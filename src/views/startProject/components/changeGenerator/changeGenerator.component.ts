import { Component, NgZone } from '@angular/core'

import { remote } from 'electron'

import { DataService } from 'src/services/dataGenerator.service'

@Component({
    selector: 'ss-change-generator',
    styles: [require('./changeGenerator.style')],
    template: require('./changeGenerator'),
})
export class ChangeGeneratorComponent {
    constructor(
        private data: DataService,
        private zone: NgZone,
    ) {
        this.data.generatorOptions = JSON.parse(localStorage.getItem('generatorOptions'))
    }

    changeGenerator() {
        const optionsMultiTicTacToe: any = remote.require(`generator-speedseed-${this.data.generator.options.template}/seed/options`)

        this.setGeneratorOptions(optionsMultiTicTacToe)
    }

    private setGeneratorOptions = (generatorOptions: any) => {
        localStorage.setItem('generatorOptions', JSON.stringify(generatorOptions))

        this.data.generatorOptions = generatorOptions
        this.zone.run(() => {})
    }
}

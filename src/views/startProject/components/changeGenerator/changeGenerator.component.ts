import { Component, NgZone } from '@angular/core'

import { ipcRenderer } from 'electron'

import loading from 'src/constants/loading'
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
        const optionsMultiTicTacToe: any = require('generator-speedseed-multi-tic-tac-toe/seed/options')

        this.setGeneratorOptions(optionsMultiTicTacToe)
    }

    private setGeneratorOptions = (generatorOptions: any) => {
        localStorage.setItem('generatorOptions', JSON.stringify(generatorOptions))

        this.zone.run(() => {
            this.data.generatorOptions = generatorOptions
        })
    }
}

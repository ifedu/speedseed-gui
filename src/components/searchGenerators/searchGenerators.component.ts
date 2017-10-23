import { Component, Input, NgZone, OnInit } from '@angular/core'

import { ipcRenderer } from 'electron'

@Component({
    selector: 'ss-search-generators',
    styles: [require('./searchGenerators.style')],
    template: require('./searchGenerators'),
})
export class SearchGeneratorsComponent implements OnInit {
    @Input() shared: any

    constructor(private zone: NgZone) {
        ipcRenderer.on('sendGeneratorOptions', this.sendGeneratorOptions)
        ipcRenderer.on('sendSelectGenerators', this.sendSelectGenerators)
    }

    ngOnInit() {
        // this.shared.generatorOptions = JSON.parse(localStorage.getItem('generatorOptions'))
        // this.shared.generators = JSON.parse(localStorage.getItem('generators'))
    }

    changeGenerator() {
        ipcRenderer.send('changeGenerator', this.shared.options.template)
    }

    searchGenerators() {
        ipcRenderer.send('searchGenerators')
    }

    private sendGeneratorOptions = (event: any, generatorOptions: any) => {
        localStorage.setItem('generatorOptions', JSON.stringify(generatorOptions))

        this.zone.run(() => {
            this.shared.generatorOptions = generatorOptions
        })
    }

    private sendSelectGenerators = (event: any, generators: any) => {
        localStorage.setItem('generators', JSON.stringify(generators))

        this.zone.run(() => {
            this.shared.generators = generators
        })
    }
}

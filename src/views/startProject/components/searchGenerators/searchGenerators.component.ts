import { Component, NgZone, OnInit } from '@angular/core'

import { ipcRenderer } from 'electron'

import dataGenerator from 'src/constants/dataGenerator'
import loading from 'src/constants/loading'

@Component({
    selector: 'ss-search-generators',
    styles: [require('./searchGenerators.style')],
    template: require('./searchGenerators'),
})
export class SearchGeneratorsComponent implements OnInit {
    dataGenerator: any

    constructor(private zone: NgZone) {
        ipcRenderer.on('ipcRendererSelectGenerators', this.ipcRendererSelectGenerators)
    }

    ngOnInit() {
        this.dataGenerator = dataGenerator

        dataGenerator.generators = JSON.parse(localStorage.getItem('generators'))
    }

    searchGenerators() {
        loading.on = true

        ipcRenderer.send('ipcMainSearchGenerators')
    }

    private ipcRendererSelectGenerators = (event: any, generators: any) => {
        localStorage.setItem('generators', JSON.stringify(generators))

        this.zone.run(() => {
            dataGenerator.generators = generators

            loading.on = false
        })
    }
}

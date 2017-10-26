import { Component, NgZone, OnInit } from '@angular/core'

import { ipcRenderer } from 'electron'

import dataGenerator from 'src/constants/dataGenerator'
import loading from 'src/constants/loading'

@Component({
    selector: 'ss-change-generator',
    styles: [require('./changeGenerator.style')],
    template: require('./changeGenerator'),
})
export class ChangeGeneratorComponent implements OnInit {
    dataGenerator: any

    constructor(private zone: NgZone) {
        ipcRenderer.on('ipcRendererGeneratorOptions', this.ipcRendererGeneratorOptions)
    }

    ngOnInit() {
        this.dataGenerator = dataGenerator

        dataGenerator.generatorOptions = JSON.parse(localStorage.getItem('generatorOptions'))
    }

    changeGenerator() {
        ipcRenderer.send('ipcMainChangeGenerator', dataGenerator.options.template)
    }

    private ipcRendererGeneratorOptions = (event: any, generatorOptions: any) => {
        localStorage.setItem('generatorOptions', JSON.stringify(generatorOptions))

        this.zone.run(() => {
            dataGenerator.generatorOptions = generatorOptions
        })
    }
}

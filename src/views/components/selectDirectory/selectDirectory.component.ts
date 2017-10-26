import { Component, NgZone, OnInit } from '@angular/core'

import { ipcRenderer } from 'electron'

import dataGenerator from 'src/constants/dataGenerator'

@Component({
    selector: 'ss-select-directory',
    styles: [require('./selectDirectory.style')],
    template: require('./selectDirectory'),
})
export class SelectDirectoryComponent implements OnInit {
    dataGenerator: any

    constructor(private zone: NgZone) {
        ipcRenderer.on('ipcRendererSelectedDirectory', this.ipcRendererSelectedDirectory)
    }

    ngOnInit() {
        this.dataGenerator = dataGenerator

        dataGenerator.selectedDirectory = localStorage.getItem('directory')
    }

    selectDirectory() {
        ipcRenderer.send('ipcMainSelectDirectory')
    }

    private ipcRendererSelectedDirectory = (event: any, dir: string) => {
        localStorage.setItem('directory', dir)

        this.zone.run(() => {
            dataGenerator.selectedDirectory = dir
        })
    }
}

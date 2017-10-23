import { Component, Input, NgZone, OnInit } from '@angular/core'

import { ipcRenderer } from 'electron'

@Component({
    selector: 'ss-select-directory',
    styles: [require('./selectDirectory.style')],
    template: require('./selectDirectory'),
})
export class SelectDirectoryComponent implements OnInit {
    @Input() shared: any

    constructor(private zone: NgZone) {
        ipcRenderer.on('sendSelectedDirectory', this.sendSelectedDirectory)
    }

    ngOnInit() {
        // this.shared.selectedDirectory = localStorage.getItem('directory')
    }

    selectDirectory() {
        ipcRenderer.send('selectDirectory')
    }

    private sendSelectedDirectory = (event: any, dir: string) => {
        localStorage.setItem('directory', dir)

        this.zone.run(() => {
            this.shared.selectedDirectory = dir
        })
    }
}

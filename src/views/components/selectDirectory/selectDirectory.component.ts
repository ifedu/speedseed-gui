import { Component, NgZone } from '@angular/core'

import { ipcRenderer, remote } from 'electron'

import { DataService } from 'src/services/dataGenerator.service'
import { PtyProcessService } from 'src/services/ptyProcess.service'

@Component({
    selector: 'ss-select-directory',
    styles: [require('./selectDirectory.style')],
    template: require('./selectDirectory'),
})
export class SelectDirectoryComponent {
    constructor(
        private data: DataService,
        private pty: PtyProcessService,
        private zone: NgZone,
    ) {
        this.data.generator.route = localStorage.getItem('directory')
    }

    selectDirectory() {
        const options: any = {
            title: 'Selected',
            buttonLabel: 'Open',
            properties: ['openDirectory'],
        }

        const { dialog } = remote.require('electron')

        dialog.showOpenDialog(remote.getCurrentWindow(), options, this.setSelectedDirectory)
    }

    private setSelectedDirectory = (dir: string) => {
        dir = this.isDir(dir)

        localStorage.setItem('directory', dir)

        this.zone.run(() => {
            this.data.generator.route = dir

            this.pty.write(() => {
                this.pty.spawn.write(`cd "${this.data.generator.route}"`)
                this.pty.spawn.write('\r')
            })
        })
    }

    private isDir = (dir: any) => (dir) ? dir[0] : ''
}

import { Component, NgZone } from '@angular/core'

import { ipcRenderer, remote } from 'electron'

import { DataService } from 'src/services/dataGenerator.service'
import { PtyProcessService } from 'src/services/ptyProcess.service'

const { dialog } = remote.require('electron')

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

        dialog.showOpenDialog(remote.getCurrentWindow(), options, this.cbSetSelectedDirectory)
    }

    private cbSetSelectedDirectory = (dir: string) => {
        dir = this.getDir(dir)

        localStorage.setItem('directory', dir)

        this.data.generator.route = dir
        this.zone.run(() => {})

        this.pty.write(() => {
            this.pty.spawn.write(`cd "${this.data.generator.route}"\r`)
        })
    }

    private getDir = (dir: any) => (dir) ? dir[0] : ''
}

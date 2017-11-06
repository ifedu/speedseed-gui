import { Injectable, NgZone } from '@angular/core'
import { remote } from 'electron'

import loading from 'src/constants/loading'
import { DataService } from 'src/services/dataGenerator.service'

const os = remote.require('os')
const stripAnsi = remote.require('strip-ansi')
const { spawn } = remote.require('node-pty')

@Injectable()
export class PtyProcessService {
    end: any
    spawn: any

    constructor(
        private data: DataService,
        private zone: NgZone,
    ) {

        const shell: string = os.platform() === 'win32' ? 'powershell.exe' : 'bash'

        this.spawn = spawn(shell, [], {
            cwd: localStorage.getItem('directory'),
            env: process.env,
        })

        this.spawn.on('data', (data: any, a: any) => {
            this.zone.run(() => loading.on = true)

            const txt = stripAnsi(data)
            console.log(txt)

            if (txt.indexOf('? Overwrite ') > -1) {
                this.spawn.write('y\r')
            }

            if (txt[txt.length-1] === '>') {
                this.zone.run(() => loading.on = false)
            }

            if (txt.indexOf('[Browsersync]') !== -1) {
                this.zone.run(() => loading.on = false)
            }
        })
    }

    write(fn: any) {
        this.stop()

        setTimeout(() => {
            fn()
        }, 1000)
    }

    private stop() {
        this.spawn.write('\x03\r')

        setTimeout(() => {
            this.spawn.write('S\r')
        }, 500)
    }
}

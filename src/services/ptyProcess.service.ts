import { Injectable, NgZone } from '@angular/core'
import { remote } from 'electron'

import { LoadingService } from 'src/services/loading.service'
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
        private loading: LoadingService,
        private zone: NgZone,
    ) {
        const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash'

        this.spawn = spawn(shell, [], {
            env: process.env,
        })

        this.spawn.on('data', (data: any, a: any) => {
            loading.on = true

            const txt = stripAnsi(data)
            console.log(txt)

            if (txt.indexOf('? Overwrite ') > -1) {
                this.spawn.write('y\r')
            }

            if (txt[txt.length-1] === '>') {
                loading.on = false
            }

            if (txt.indexOf('Finished') !== -1) {
                loading.on = false
            }

            this.zone.run(() => {})
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

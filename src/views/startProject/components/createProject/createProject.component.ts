import { Component, NgZone } from '@angular/core'

import { remote  } from 'electron'

// const child_process = remote.require('child_process')

import Cli from 'src/classes/cli'
import loading from 'src/constants/loading'
import { DataService } from 'src/services/dataGenerator.service'

@Component({
    selector: 'ss-create-project',
    styles: [require('./createProject.style')],
    template: require('./createProject'),
})
export class CreateProjectComponent {
    ptyProcess: any

    constructor(
        private data: DataService,
        private zone: NgZone,
    ) {
    }

    createProject() {
        // loading.on = true

        this.data.generator.options.templateFiles = true

        // this.cmdCreateProject()

        const os = remote.require('os')
        const { spawn } = remote.require('node-pty')

        const shell: string = os.platform() === 'win32' ? 'powershell.exe' : 'bash'
        console.log(process.env)
        this.ptyProcess = spawn(shell, [], {
            cwd: process.env.HOME,
            env: process.env,
            name: 'xterm-color',
        })

        this.ptyProcess.on('data', (data: any) => {
            console.log(data)
        })
    }

    checkDisabled() {
        let i: number = this.checkValues(-3)

        const { generatorOptions, generator } = this.data

        if (
            generatorOptions &&
            i === generatorOptions.length &&
            generator.route &&
            generator.route !== 'null'
        ) {
            return false
        }

        return true
    }

    prueba() {
        this.ptyProcess.write('pwd')
    }

    prueba2() {
        this.ptyProcess.write('\r')
    }

    private cmdCreateProject = () => {
        let options: string = JSON.stringify(this.data.generator)
        options = options.replace(/"/g, '\\"')

        // this.subprocess = Cli.spawn(`yo speedseed --speedseedgui="${options}"`)
        // console.log(this.subprocess)
        // this.subprocess.stdout.on('data', (data: any) => console.log(`${data}`))
        // this.subprocess.stderr.on('data', (data: any) => console.log(`${data}`))

        // this.subprocess.on('close', (code: any) => {
        //     this.responseCreateProject(code)
        // })
    }

    private responseCreateProject = (code: number) => {
        console.log(code)

        this.zone.run(() => {
            loading.on = false
        })
    }

    private checkValues(i: number) {
        for (let prop in this.data.generator.options) {
            const val = this.data.generator.options[prop]

            if (val != '' || val === false) {
                i++
            }
        }

        return i
    }
}

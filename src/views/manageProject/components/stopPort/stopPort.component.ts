import { Component, Input, NgZone } from '@angular/core'

import Cli from 'src/classes/cli'

@Component({
    selector: 'ss-stop-port',
    styles: [require('./stopPort.style')],
    template: require('./stopPort'),
})
export class StopPortComponent {
    port: number = 8003

    checkPort() {
        const cmd = Cli.spawn(`netstat -noa | grep :${this.port}`)

        cmd.stdout.on('data', (data: any) => {
            const lines = data.toString().split('\n')
            const lineProperties = lines[0].split(' ')
            const pid = lineProperties[lineProperties.length-1]

            this.kill(pid)
        })

        cmd.stderr.on('data', (data: any) => console.log(`-> ${data}`))

        cmd.on('close', (code: any) => {
            console.log(code)
        })
    }

    private kill(pid: string) {
        const cmd = Cli.spawn(`taskkill /f /pid ${pid}`)

        cmd.stdout.on('data', (data: any) => console.log(`> ${data}`))
        cmd.stderr.on('data', (data: any) => console.log(`-> ${data}`))

        cmd.on('close', (code: any) => {
            console.log(code)
        })
    }
}

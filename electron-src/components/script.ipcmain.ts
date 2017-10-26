import { spawn } from 'child_process'
import { ipcMain } from 'electron'

export default class Script {
    constructor() {
        ipcMain.on('ipcMainScript', this.ipcMainScript)
    }

    private ipcMainScript = (event: any, route: any, command: string): any => {
        const commandSplit: any = command.split(' ')
        const commandParams: any = [route, '&&', ...commandSplit]

        const cmd = spawn('cd', commandParams, {
            shell: true,
        })

        cmd.stdout.on('data', (data) => console.log(`${data}`))
        cmd.stderr.on('data', (data) => console.log(`${data}`))

        cmd.on('close', (code) => {
            event.sender.send('ipcRendererScript', code)
        })
    }
}

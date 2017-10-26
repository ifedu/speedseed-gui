import { spawn } from 'child_process'
import { ipcMain } from 'electron'

export default class CreateProject {
    constructor() {
        ipcMain.on('sendCreateProject', this.sendCreateProject)
    }

    private sendCreateProject = (event: any, seedOptions: any) => {
        const options: string = JSON.stringify(seedOptions).replace(/"/g, '\\"')

        const cmd = spawn('yo', ['speedseed', `--speedseedgui="${options}"`], {
            shell: true,
        })

        cmd.stdout.on('data', (data) => console.log(`${data}`))
        cmd.stderr.on('data', (data) => console.log(`${data}`))

        cmd.on('close', (code) => {
            event.sender.send('responseCreateProject', code)
        })
    }
}

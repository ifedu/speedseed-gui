import { spawn } from 'child_process'
import { dialog, ipcMain } from 'electron'

export default class createProject {
    win: any

    constructor(win: any) {
        this.win = win

        ipcMain.on('createProject', this.createProject)
    }

    private createProject = (event: any, seedOptions: any) => {
        const options: string = JSON.stringify(seedOptions).replace(/"/g, '\\"')

        const ls = spawn('yo', ['speedseed', `--speedseedgui="${options}"`], {
            shell: true,
        })

        ls.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`)
        })

        ls.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`)
        })

        ls.on('close', (code) => {
            console.log(`child process exited with code ${code}`)
        })
    }
}

import { spawn } from 'child_process'
import { dialog, ipcMain } from 'electron'

const optionsMultiTicTacToe: any = require(`generator-speedseed-multi-tic-tac-toe/seed/options`)

class IpcMain {
    win: any

    constructor(win: any) {
        this.win = win

        ipcMain.on('changeGenerator', this.changeGenerator)
        ipcMain.on('createProject', this.createProject)
        ipcMain.on('selectDirectory', this.selectDirectory)
        ipcMain.on('searchGenerators', this.searchGenerators)
    }

    private changeGenerator = (event: any, generator: any) => {
        event.sender.send('sendGeneratorOptions', optionsMultiTicTacToe)
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

    private selectDirectory = (event: any) => {
        const options: any = {
            title: 'Selected',
            buttonLabel: 'Open',
            properties: ['openDirectory'],
        }

        dialog.showOpenDialog(this.win, options, this.cbSelectDirectory.bind(this, event))
    }

    private cbSelectDirectory(event: any, dir: any) {
        event.sender.send('sendSelectedDirectory', dir[0])
    }

    searchGenerators(event: any) {
        const SearchGenerators = require('./searchGenerators').default

        const generators = new SearchGenerators()

        event.sender.send('sendSelectGenerators', generators)
    }
}

export default IpcMain

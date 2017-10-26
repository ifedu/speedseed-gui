import { ipcMain } from 'electron'

export default class ChangeGenerator {
    constructor() {
        ipcMain.on('ipcMainChangeGenerator', this.ipcMainChangeGenerator)
    }

    private ipcMainChangeGenerator = (event: any, generator: any) => {
        const optionsMultiTicTacToe: any = require(`generator-speedseed-multi-tic-tac-toe/seed/options`)

        event.sender.send('ipcRendererGeneratorOptions', optionsMultiTicTacToe)
    }
}

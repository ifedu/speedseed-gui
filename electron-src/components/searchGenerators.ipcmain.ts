import { ipcMain } from 'electron'

export default class searchGenerators {
    win: any

    constructor(win: any) {
        this.win = win

        ipcMain.on('changeGenerator', this.changeGenerator)
        ipcMain.on('searchGenerators', this.searchGenerators)
    }

    private changeGenerator = (event: any, generator: any) => {
        const optionsMultiTicTacToe: any = require(`generator-speedseed-multi-tic-tac-toe/seed/options`)

        event.sender.send('sendGeneratorOptions', optionsMultiTicTacToe)
    }

    private searchGenerators(event: any) {
        const SearchGenerators = require('./searchGenerators').default

        const generators = new SearchGenerators()

        event.sender.send('sendSelectGenerators', generators)
    }
}

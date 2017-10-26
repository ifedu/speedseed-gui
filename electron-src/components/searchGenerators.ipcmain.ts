import { ipcMain } from 'electron'

export default class SearchGenerators {
    constructor() {
        ipcMain.on('ipcMainSearchGenerators', this.ipcMainSearchGenerators)
    }

    private ipcMainSearchGenerators(event: any) {
        const SearchGenerators = require('./searchGenerators').default

        const generators = new SearchGenerators()

        event.sender.send('ipcRendererSelectGenerators', generators)
    }
}

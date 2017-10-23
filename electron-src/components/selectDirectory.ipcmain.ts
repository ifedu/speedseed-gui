import { dialog, ipcMain } from 'electron'

export default class selectDirectory {
    win: any

    constructor(win: any) {
        this.win = win

        ipcMain.on('selectDirectory', this.selectDirectory)
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
        dir = (dir) ? dir[0] : dir

        event.sender.send('sendSelectedDirectory', dir)
    }
}

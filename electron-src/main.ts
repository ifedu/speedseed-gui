import { app, BrowserWindow } from 'electron'

let win: any

class App {
    constructor() {
        app.on('before-quit', this.beforeQuit)
        app.on('ready', this.ready)
    }

    private beforeQuit() {
        console.log('Leaving...')
    }

    private ready() {
        const optionsWin = {
            center: true,
            height: 800,
            icon: `${__dirname}/-build/assets/speedseed.ico`,
            maximizable: true,
            title: 'SpeedSeed',
            width: 1000,
        }

        win = new BrowserWindow(optionsWin)

        win.openDevTools()

        win.maximize()

        win.on('closed', () => {
            win = null

            app.quit()
        })

        win.loadURL(`file://${__dirname}/-build/index.html`)
    }
}

new App()

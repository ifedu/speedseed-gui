import { spawn } from 'child_process'
import { app, BrowserWindow } from 'electron'
import { resolve } from 'path'

import IpcMain from './ipc'

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
            maximizable: true,
            title: 'SpeedSeed',
            width: 1000,
        }

        win = new BrowserWindow(optionsWin)

        win.maximize()

        win.on('closed', () => {
            win = null

            app.quit()
        })

        win.loadURL(`file://${__dirname}/-build/index.html`)

        win.toggleDevTools()
        // require('devtron').install()
    }
}

new App()
new IpcMain(win)

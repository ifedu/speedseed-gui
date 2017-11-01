import { Component, Input, NgZone } from '@angular/core'

import { ipcRenderer } from 'electron'

import dataGenerator from 'src/constants/dataGenerator'
import loading from 'src/constants/loading'

@Component({
    selector: 'ss-script',
    styles: [require('./script.style')],
    template: require('./script'),
})
export class ScriptComponent {
    @Input() command: string
    @Input() txt: string

    dataGenerator: any

    constructor(private zone: NgZone) {
        ipcRenderer.on('ipcRendererScript', this.ipcRendererScript)
    }

    ngOnInit() {
        this.dataGenerator = dataGenerator
    }

    script() {
        // loading.on = true

        ipcRenderer.send('ipcMainScript', dataGenerator.route, this.command)
    }

    private ipcRendererScript = (event: any, code: number) => {
        console.log(code)

        this.zone.run(() => {
            // loading.on = false
        })
    }
}

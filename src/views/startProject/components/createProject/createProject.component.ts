import { Component, NgZone } from '@angular/core'

import { ipcRenderer } from 'electron'

import dataGenerator from 'src/constants/dataGenerator'
import loading from 'src/constants/loading'

@Component({
    selector: 'ss-create-project',
    styles: [require('./createProject.style')],
    template: require('./createProject'),
})
export class CreateProjectComponent {
    dataGenerator: any

    constructor(private zone: NgZone) {
        ipcRenderer.on('responseCreateProject', this.responseCreateProject)
    }

    ngOnInit() {
        this.dataGenerator = dataGenerator
    }

    createProject() {
        loading.on = true

        dataGenerator.options.templateFiles = true

        const seedOptions = {
            options: dataGenerator.options,
            route: dataGenerator.selectedDirectory,
        }

        ipcRenderer.send('sendCreateProject', seedOptions)
    }

    checkDisabled() {
        let i = this.checkValues(-3)

        if (i === dataGenerator.generatorOptions.length && dataGenerator.selectedDirectory && dataGenerator.selectedDirectory !== 'null') {
            return false
        }

        return true
    }

    private checkValues(i: number) {
        for (let prop in dataGenerator.options) {
            const val = this.dataGenerator.options[prop]

            if (val != '') {
                i++
            }
        }

        return i
    }

    private responseCreateProject = (event: any, code: number) => {
        console.log(code)

        this.zone.run(() => {
            loading.on = false
        })
    }
}

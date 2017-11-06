import { Component, NgZone } from '@angular/core'
import { remote } from 'electron'

import { DataService } from 'src/services/dataGenerator.service'

@Component({
    styles: [require('./manageProject.style')],
    template: require('./manageProject'),
})
export class ManageProjectView {
    package: any
    scripts: any = []

    constructor(
        private data: DataService,
    ) {
        if (this.data.generator.route) {
            this.package = remote.require(`${this.data.generator.route}/package.json`)

            this.setScripts()
        }
    }

    setScripts() {
        for(let prop in this.package.scripts) {
            this.scripts.push({
                command: `npm run ${prop}`,
                txt: `<b>${prop}</b> => ${this.package.scripts[prop]}`,
            })
        }
    }
}

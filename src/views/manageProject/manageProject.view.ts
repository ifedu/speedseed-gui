import { Component, NgZone } from '@angular/core'

import { remote } from 'electron'

import { DataService } from 'src/services/dataGenerator.service'

@Component({
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
        for (let prop in this.package.scripts) {
            this.scripts.push({
                command: `npm run ${prop}`,
                txt: `
                    <div>${prop} =></div>
                    <div>${this.package.scripts[prop]}</div>
                `,
            })
        }
    }
}

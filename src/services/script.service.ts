import { Injectable } from '@angular/core'

import { remote } from 'electron'
import { existsSync } from 'fs'

import { DataService } from 'src/services/data.service'

@Injectable()
export class ScriptService {
    scripts: any = []

    private package: any

    constructor(
        private data: DataService,
    ) {}

    checkPackage() {
        this.resetScripts()

        if (this.data.generator.route && existsSync(`${this.data.generator.route}/package.json`)) {
            this.package = remote.require(`${this.data.generator.route}/package.json`)

            this.setScripts()
        }
    }

    private resetScripts() {
        this.scripts = []
    }

    private setScripts() {
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

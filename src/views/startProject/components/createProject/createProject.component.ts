import { Component } from '@angular/core'

import { DataService } from 'src/services/dataGenerator.service'
import { PtyProcessService } from 'src/services/ptyProcess.service'

@Component({
    selector: 'ss-create-project',
    styles: [require('./createProject.style')],
    template: require('./createProject'),
})
export class CreateProjectComponent {
    constructor(
        private data: DataService,
        private pty: PtyProcessService,
    ) {}

    createProject() {
        this.data.generator.options.templateFiles = true

        let options: string = JSON.stringify(this.data.generator)
        options = options.replace(/"/g, "\\'")

        this.pty.write(() => {
            this.pty.spawn.write(`yo speedseed --speedseedgui="${options}"`)
            this.pty.spawn.write('\r')
        })
    }

    checkDisabled() {
        let i: number = this.checkValues(-3)

        const { generatorOptions, generator } = this.data

        if (
            generatorOptions &&
            i === generatorOptions.length &&
            generator.route &&
            generator.route !== 'null'
        ) {
            return false
        }

        return true
    }

    private checkValues(i: number) {
        for (let prop in this.data.generator.options) {
            const val = this.data.generator.options[prop]

            if (val != '' || val === false) {
                i++
            }
        }

        return i
    }
}

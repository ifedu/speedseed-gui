import { Component, Input } from '@angular/core'

import { ipcRenderer } from 'electron'

@Component({
    selector: 'ss-create-project',
    styles: [require('./createProject.style')],
    template: require('./createProject'),
})
export class CreateProjectComponent {
    @Input() shared: any

    createProject() {
        this.shared.options.templateFiles = true

        const seedOptions = {
            options: this.shared.options,
            route: this.shared.selectedDirectory,
        }

        console.log(seedOptions)
        ipcRenderer.send('createProject', seedOptions)
    }
}

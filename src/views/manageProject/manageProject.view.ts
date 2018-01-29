import { Component, NgZone } from '@angular/core'

import { ScriptService } from 'src/services/script.service'

@Component({
    template: require('./manageProject'),
})
export class ManageProjectView {
    constructor(
        private script: ScriptService,
    ) {
        this.script.checkPackage()
    }
}

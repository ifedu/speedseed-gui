import { Component, Input, NgZone } from '@angular/core'

import { DataService } from 'src/services/dataGenerator.service'
import { PtyProcessService } from 'src/services/ptyProcess.service'

@Component({
    selector: 'ss-script',
    styles: [require('./script.style')],
    template: require('./script'),
})
export class ScriptComponent {
    @Input() command: string
    @Input() txt: string

    constructor(
        private data: DataService,
        private pty: PtyProcessService,
    ) {}

    script() {
        this.pty.write(() => {
            this.pty.spawn.write(this.command)
            this.pty.spawn.write('\r')
        })
    }
}

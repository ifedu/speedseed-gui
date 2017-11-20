import { Component, Input, NgZone } from '@angular/core'

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
        private pty: PtyProcessService,
    ) {}

    script() {
        this.pty.write(() => {
            this.pty.spawn.write(this.command)
            this.pty.spawn.write('\r')
        })
    }
}

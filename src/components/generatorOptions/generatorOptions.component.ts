import { Component, DoCheck, Input, NgZone, OnInit } from '@angular/core'

import { ipcRenderer } from 'electron'

@Component({
    selector: 'ss-generator-options',
    styles: [require('./generatorOptions.style')],
    template: require('./generatorOptions'),
})
export class GeneratorOptionsComponent implements DoCheck, OnInit {
    @Input() shared: any

    constructor(private zone: NgZone) {
    }

    ngDoCheck() {
        localStorage.setItem('options', JSON.stringify(this.shared.options))
    }

    ngOnInit() {
        // this.shared.options = JSON.parse(localStorage.getItem('options')) || {}
    }
}

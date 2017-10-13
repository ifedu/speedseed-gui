import { Component, NgZone, DoCheck } from '@angular/core'
import { Router } from '@angular/router'

import ipc from './landing.ipc-renderer'

@Component({
    styles: [require('./landing.style')],
    template: require('./landing'),
})
export class LandingView implements DoCheck {
    generators: any
    generatorOptions: any
    options: any = {}
    selectedDirectory: string

    constructor(private zone: NgZone) {
        this.generators = JSON.parse(localStorage.getItem('generators'))
        this.generatorOptions = JSON.parse(localStorage.getItem('generatorOptions'))
        this.options = JSON.parse(localStorage.getItem('options')) || {}

        this.selectedDirectory = localStorage.getItem('directory')

        ipc.component = this
    }

    ngDoCheck() {
        localStorage.setItem('options', JSON.stringify(this.options))
    }

    changeGenerator() {
        ipc.changeGenerator()
    }

    createProject() {
        ipc.createProject()
    }

    selectDirectory() {
        ipc.selectDirectory()
    }

    searchGenerators() {
        ipc.searchGenerators()
    }
}

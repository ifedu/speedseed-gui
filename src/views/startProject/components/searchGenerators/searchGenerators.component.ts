import { Component, NgZone } from '@angular/core'

import { ipcRenderer, remote } from 'electron'

import SearchGenerators from 'src/classes/searchGenerators'
import loading from 'src/constants/loading'
import { DataService } from 'src/services/dataGenerator.service'

@Component({
    selector: 'ss-search-generators',
    styles: [require('./searchGenerators.style')],
    template: require('./searchGenerators'),
})
export class SearchGeneratorsComponent {
    constructor(
        private data: DataService,
        private zone: NgZone,
    ) {
        this.data.generators = JSON.parse(localStorage.getItem('generators'))
    }

    searchGenerators() {
        loading.on = true

        const generators = new SearchGenerators()

        this.setGenerators(generators)
    }

    private setGenerators(generators: any) {
        localStorage.setItem('generators', JSON.stringify(generators))

        this.zone.run(() => {
            this.data.generators = generators

            loading.on = false
        })
    }
}

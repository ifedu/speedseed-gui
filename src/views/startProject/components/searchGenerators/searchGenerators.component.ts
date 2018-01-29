import { Component, NgZone } from '@angular/core'

import { ipcRenderer, remote } from 'electron'

import SearchGenerators from 'src/classes/searchGenerators'
import { LoadingService } from 'src/services/loading.service'
import { DataService } from 'src/services/data.service'

@Component({
    selector: 'ss-search-generators',
    template: require('./searchGenerators'),
})
export class SearchGeneratorsComponent {
    constructor(
        private data: DataService,
        private loading: LoadingService,
        private zone: NgZone,
    ) {
        this.data.generators = JSON.parse(localStorage.getItem('generators'))
    }

    searchGenerators() {
        this.loading.on = true

        const generators = new SearchGenerators()

        this.setGenerators(generators)
    }

    private setGenerators(generators: any) {
        localStorage.setItem('generators', JSON.stringify(generators))

        this.data.generators = generators
        this.loading.on = false
        this.zone.run(() => {})
    }
}

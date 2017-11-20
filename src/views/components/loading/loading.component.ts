import { Component } from '@angular/core'

import { LoadingService } from 'src/services/loading.service'

@Component({
    selector: 'ss-loading',
    styles: [require('./loading.style')],
    template: require('./loading'),
})
export class LoadingComponent {
    constructor(
        public loading: LoadingService,
    ) { }
}

import { Component, OnInit } from '@angular/core'

import loading from 'src/constants/loading'

@Component({
    selector: 'ss-loading',
    styles: [require('./loading.style')],
    template: require('./loading'),
})
export class LoadingComponent implements OnInit {
    loading: any

    ngOnInit() {
        this.loading = loading
    }
}

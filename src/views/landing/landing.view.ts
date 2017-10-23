import { Component, NgZone } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    styles: [require('./landing.style')],
    template: require('./landing'),
})
export class LandingView {
    shared: any = {
        options: {}
    }
}

import { Component } from '@angular/core'

@Component({
    selector: 'ss-menu',
    template: require('./menu'),
})
export class MenuComponent {
    navLinks: any = [{
        label: 'Start Project',
        path: '/start-project',
    }, {
        label: 'Manage Project',
        path: '/manage-project',
    }]
}

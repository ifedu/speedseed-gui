import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LandingView } from './landing.view'

const ROUTES: Routes = [{
    component: LandingView,
    path: 'landing',
    pathMatch: 'full'
}, {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landing'
}]

@NgModule({
    exports: [RouterModule],

    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class LandingRouter {}

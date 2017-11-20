import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { StartProjectView } from './startProject.view'

const ROUTES: Routes = [{
    component: StartProjectView,
    path: 'start-project',
    pathMatch: 'full'
}, {
    path: '',
    pathMatch: 'full',
    redirectTo: '/start-project'
}]

@NgModule({
    exports: [RouterModule],

    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class StartProjectRouter {}

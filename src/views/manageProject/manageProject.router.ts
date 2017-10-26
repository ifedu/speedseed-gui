import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ManageProjectView } from './manageProject.view'

const ROUTES: Routes = [{
    component: ManageProjectView,
    path: 'manage-project',
    pathMatch: 'full'
}]

@NgModule({
    exports: [RouterModule],

    imports: [
        RouterModule.forChild(ROUTES)
    ]
})
export class ManageProjectRouter {}

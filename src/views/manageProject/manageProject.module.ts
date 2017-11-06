import { NgModule } from '@angular/core'

import { SharedModule } from 'src/shared.module'

import { ManageProjectRouter } from './manageProject.router'
import { ManageProjectView } from './manageProject.view'

import { ScriptComponent } from './components/script/script.component'

@NgModule({
    declarations: [
        ManageProjectView,

        ScriptComponent,
    ],

    exports: [ManageProjectView],

    imports: [
        SharedModule,
        ManageProjectRouter,
    ]
})
export class ManageProjectModule {}

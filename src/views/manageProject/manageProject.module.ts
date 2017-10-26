import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule, MatGridListModule, MatInputModule, MatSelectModule } from '@angular/material'

import { SharedModule } from 'src/shared.module'

import { ScriptComponent } from './components/script/script.component'
import { StopPortComponent } from './components/stopPort/stopPort.component'

import { ManageProjectRouter } from './manageProject.router'
import { ManageProjectView } from './manageProject.view'

@NgModule({
    declarations: [
        ManageProjectView,

        ScriptComponent,
        StopPortComponent,
    ],

    exports: [ManageProjectView],

    imports: [
        CommonModule,
        FormsModule,

        MatButtonModule,
        MatGridListModule,
        MatInputModule,
        MatSelectModule,

        SharedModule,
        ManageProjectRouter,
    ]
})
export class ManageProjectModule {}

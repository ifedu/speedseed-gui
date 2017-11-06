import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import {
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule
} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DataService } from './services/dataGenerator.service'
import { PtyProcessService } from './services/ptyProcess.service'

const modules: any = [
    BrowserAnimationsModule,
    FormsModule,

    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
]

@NgModule({
    imports: [
        ...modules,
    ],

    exports: [
        ...modules,
    ],

    providers: [
        DataService,
        PtyProcessService,
    ],
})
export class SharedModule {}

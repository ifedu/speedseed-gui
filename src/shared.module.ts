import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import {
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DataService } from './services/data.service'
import { LoadingService } from './services/loading.service'
import { PtyProcessService } from './services/ptyProcess.service'
import { ScriptService } from './services/script.service'

const modules: any = [
    BrowserAnimationsModule,
    FormsModule,

    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
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
        LoadingService,
        PtyProcessService,
        ScriptService,
    ],
})
export class SharedModule {}

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatButtonModule, MatGridListModule, MatInputModule, MatSelectModule } from '@angular/material'

import { LandingRouter } from './landing.router'
import { LandingView } from './landing.view'

@NgModule({
    declarations: [LandingView],

    exports: [LandingView],

    imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        LandingRouter,

        MatButtonModule,
        MatGridListModule,
        MatInputModule,
        MatSelectModule,
    ]
})
export class LandingModule {}

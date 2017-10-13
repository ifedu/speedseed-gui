import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'

import { AppView } from './app.view'
import { AppRouter } from './app.router'

import { LandingModule } from './landing/landing.module'

@NgModule({
    bootstrap: [AppView],

    declarations: [
        AppView
    ],

    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,

        AppRouter,
        LandingModule,
    ]
})
export class AppModule {}

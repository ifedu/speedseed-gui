import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'

import { SharedModule } from 'src/shared.module'

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

        SharedModule,
        AppRouter,
        LandingModule,
    ]
})
export class AppModule {}

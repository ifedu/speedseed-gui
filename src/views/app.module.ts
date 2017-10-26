import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { MatButtonModule, MatGridListModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule } from '@angular/material'

import { SharedModule } from 'src/shared.module'

import { AppView } from './app.view'
import { AppRouter } from './app.router'

import { ManageProjectModule } from './manageProject/manageProject.module'
import { StartProjectModule } from './startProject/startProject.module'

import { LoadingComponent } from './components/loading/loading.component'
import { MenuComponent } from './components/menu/menu.component'
import { SelectDirectoryComponent } from './components/selectDirectory/selectDirectory.component'

@NgModule({
    bootstrap: [AppView],

    declarations: [
        AppView,

        LoadingComponent,
        MenuComponent,
        SelectDirectoryComponent,
    ],

    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,

        MatButtonModule,
        MatGridListModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,

        SharedModule,
        AppRouter,
        ManageProjectModule,
        StartProjectModule,
    ]
})
export class AppModule {}

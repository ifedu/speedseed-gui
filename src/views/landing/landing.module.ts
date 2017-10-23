import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule, MatGridListModule, MatInputModule, MatSelectModule } from '@angular/material'

import { SharedModule } from 'src/shared.module'

import { CreateProjectComponent } from 'src/components/createProject/createProject.component'
import { GeneratorOptionsComponent } from 'src/components/generatorOptions/generatorOptions.component'
import { SearchGeneratorsComponent } from 'src/components/searchGenerators/searchGenerators.component'
import { SelectDirectoryComponent } from 'src/components/selectDirectory/selectDirectory.component'

import { LandingRouter } from './landing.router'
import { LandingView } from './landing.view'

@NgModule({
    declarations: [
        CreateProjectComponent,
        GeneratorOptionsComponent,
        SearchGeneratorsComponent,
        SelectDirectoryComponent,
        LandingView,
    ],

    exports: [LandingView],

    imports: [
        SharedModule,
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

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule, MatGridListModule, MatInputModule, MatSelectModule } from '@angular/material'

import { SharedModule } from 'src/shared.module'

import { ChangeGeneratorComponent } from './components/changeGenerator/changeGenerator.component'
import { CreateProjectComponent } from './components/createProject/createProject.component'
import { GeneratorOptionsComponent } from './components/generatorOptions/generatorOptions.component'
import { SearchGeneratorsComponent } from './components/searchGenerators/searchGenerators.component'

import { StartProjectRouter } from './startProject.router'
import { StartProjectView } from './startProject.view'

@NgModule({
    declarations: [
        StartProjectView,

        ChangeGeneratorComponent,
        CreateProjectComponent,
        GeneratorOptionsComponent,
        SearchGeneratorsComponent,
    ],

    exports: [StartProjectView],

    imports: [
        CommonModule,
        FormsModule,

        MatButtonModule,
        MatGridListModule,
        MatInputModule,
        MatSelectModule,

        SharedModule,
        StartProjectRouter,
    ]
})
export class StartProjectModule {}

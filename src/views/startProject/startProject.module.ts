import { NgModule } from '@angular/core'

import { SharedModule } from 'src/shared.module'

import { StartProjectRouter } from './startProject.router'
import { StartProjectView } from './startProject.view'

import { ChangeGeneratorComponent } from './components/changeGenerator/changeGenerator.component'
import { CreateProjectComponent } from './components/createProject/createProject.component'
import { GeneratorOptionsComponent } from './components/generatorOptions/generatorOptions.component'
import { SearchGeneratorsComponent } from './components/searchGenerators/searchGenerators.component'

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
        SharedModule,
        StartProjectRouter,
    ]
})
export class StartProjectModule {}

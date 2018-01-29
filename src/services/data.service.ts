import { Injectable } from '@angular/core'

@Injectable()
export class DataService {
    generator: any = {
        route: '',

        options: {
            template: '',
            templateFiles: false,
        }
    }

    generatorOptions: any = []
    generators: any = ''
}

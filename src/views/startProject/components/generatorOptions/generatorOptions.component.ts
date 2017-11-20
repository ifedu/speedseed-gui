import { Component, DoCheck } from '@angular/core'

import { DataService } from 'src/services/dataGenerator.service'

@Component({
    selector: 'ss-generator-options',
    template: require('./generatorOptions'),
})
export class GeneratorOptionsComponent implements DoCheck {
    constructor(
        private data: DataService,
    ) {
        this.data.generator.options = JSON.parse(localStorage.getItem('options')) || this.data.generator.options
    }

    ngDoCheck() {
        localStorage.setItem('options', JSON.stringify(this.data.generator.options))
    }

    checkGeneratorChoice(generatorOption: any, choice: any) {
        for (let propExclude in choice.exclude) {
            return this.searchExcludeOption(generatorOption.name, choice, propExclude)
        }

        return false
    }

    private searchExcludeOption(name: string, choice: any, propExclude: string) {
        if (choice.exclude[propExclude].includes(this.data.generator.options[propExclude])) {
            this.cleanSelectedOptions(name, choice.value)

            return true
        }

        return false
    }

    private cleanSelectedOptions(name: string, value: string) {
        if (this.data.generator.options[name] === value) {
            setTimeout(() => {
                this.data.generator.options[name] = ''
            })
        }
    }
}

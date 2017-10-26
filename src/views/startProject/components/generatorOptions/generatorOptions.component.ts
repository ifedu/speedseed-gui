import { Component, DoCheck, OnInit } from '@angular/core'

import { ipcRenderer } from 'electron'

import dataGenerator from 'src/constants/dataGenerator'

@Component({
    selector: 'ss-generator-options',
    styles: [require('./generatorOptions.style')],
    template: require('./generatorOptions'),
})
export class GeneratorOptionsComponent implements DoCheck, OnInit {
    dataGenerator: any

    ngDoCheck() {
        localStorage.setItem('options', JSON.stringify(dataGenerator.options))
    }

    ngOnInit() {
        this.dataGenerator = dataGenerator

        dataGenerator.options = JSON.parse(localStorage.getItem('options')) || {}
    }

    checkGeneratorChoice(generatorOption: any, choice: any) {
        for (let propExclude in choice.exclude) {
            return this.searchExcludeOption(generatorOption.name, choice, propExclude)
        }

        return false
    }

    private searchExcludeOption(name: string, choice: any, propExclude: string) {
        if (choice.exclude[propExclude].includes(this.dataGenerator.options[propExclude])) {
            this.cleanSelectedOptions(name, choice.value)

            return true
        }

        return false
    }

    private cleanSelectedOptions(name: string, value: string) {
        if (this.dataGenerator.options[name] === value) {
            setTimeout(() => {
                this.dataGenerator.options[name] = ''
            })
        }
    }
}

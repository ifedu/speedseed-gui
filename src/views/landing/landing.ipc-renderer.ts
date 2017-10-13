import { ipcRenderer } from 'electron'

class Ipc {
    component: any = {}

    constructor() {
        ipcRenderer.on('sendGeneratorOptions', this.sendGeneratorOptions)
        ipcRenderer.on('sendSelectedDirectory', this.sendSelectedDirectory)
        ipcRenderer.on('sendSelectGenerators', this.sendSelectGenerators)
    }

    createProject() {
        this.component.options.templateFiles = true

        const seedOptions = {
            options: this.component.options,
            route: this.component.selectedDirectory,
        }

        ipcRenderer.send('createProject', seedOptions)
    }

    changeGenerator() {
        ipcRenderer.send('changeGenerator', this.component.options.template)
    }

    selectDirectory() {
        ipcRenderer.send('selectDirectory')
    }

    searchGenerators() {
        ipcRenderer.send('searchGenerators')
    }

    private sendGeneratorOptions = (event: any, generatorOptions: any) => {
        localStorage.setItem('generatorOptions', JSON.stringify(generatorOptions))

        this.component.zone.run(() => {
            this.component.generatorOptions = generatorOptions
        })
    }

    private sendSelectedDirectory = (event: any, dir: string) => {
        localStorage.setItem('directory', dir)

        this.component.zone.run(() => {
            this.component.selectedDirectory = dir
        })
    }

    private sendSelectGenerators = (event: any, generators: any) => {
        localStorage.setItem('generators', JSON.stringify(generators))

        this.component.zone.run(() => {
            this.component.generators = generators
        })
    }
}

export default new Ipc()

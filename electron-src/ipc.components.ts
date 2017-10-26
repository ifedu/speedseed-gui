import ChangeGenerator from './components/changeGenerator.ipcmain'
import CreateProject from './components/createProject.ipcmain'
import SearchGenerators from './components/searchGenerators.ipcmain'
import SelectDirectory from './components/selectDirectory.ipcmain'
import Script from './components/script.ipcmain'

export default class IpcComponents {
    constructor(win: any) {
        new ChangeGenerator()
        new CreateProject()
        new SearchGenerators()
        new SelectDirectory(win)
        new Script()
    }
}

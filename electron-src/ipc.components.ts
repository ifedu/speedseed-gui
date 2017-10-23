import createProject from './components/createProject.ipcmain'
import searchGenerators from './components/searchGenerators.ipcmain'
import selectDirectory from './components/selectDirectory.ipcmain'

export default class IpcComponents {
    win: any

    constructor(win: any) {
        this.win = win

        new createProject(win)
        new searchGenerators(win)
        new selectDirectory(win)
    }
}

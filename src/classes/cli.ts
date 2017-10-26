import { remote } from 'electron'

const child_process = remote.require('child_process')

export default class Cli {
    static spawn(command: string) {
        const commandSplit: any = command.split(' ')

        return child_process.spawn(commandSplit[0], commandSplit.splice(1), {
            shell: true,
        })
    }
}

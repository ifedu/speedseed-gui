import 'core-js/client/shim.min.js'
import 'zone.js/dist/zone.js'

/*< if (args.dist) { >*/
import { enableProdMode } from '@angular/core'
/*< } >*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { remote } from 'electron'

import { AppModule } from './views/app.module'

/*< if (args.dev) { >*/
remote.getCurrentWebContents().openDevTools()
remote.require('devtron').install()
/*< } >*/

/*< if (args.dist) { >*/
enableProdMode()
/*< } >*/

platformBrowserDynamic()
.bootstrapModule(AppModule)

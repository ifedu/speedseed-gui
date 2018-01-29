export default {
    "description": "<%= project %> with <%= framework %>",
    "name": "<%= project %>",
    "private": true,
    "version": "0.0.0",
    "scripts": {
        "i": "npm install",
        "preinstall": "yo speedseed:construct",
        "update": "yo speedseed --update=true && npm run i",
        "start": "gulp build.dev --dev",
        "build": "gulp build",
        "build.dev": "gulp build.dev --dev",
        "build.dev.debug": "node --inspect --debug-brk ./node_modules/gulp/bin/gulp.js build.dev --dev",
        "build.dev.open": "gulp build.dev --dev --open",
        "dist": "gulp build.dist --dist",
        "dist.dev": "gulp build.dist.dev --dev --dist",
        "dist.dev.debug": "node --inspect --debug-brk ./node_modules/gulp/bin/gulp.js build.dist.dev --dev",
        "dist.dev.open": "gulp build.dist.dev --dev --dist --open",
        "gulp": "gulp",
        "postinstall": "cd electron-src && npm i",
        "electron-packager": "electron-packager",
        "electron.dev": "gulp electron.dev --electron --dev",
        "electron.dist": "gulp electron.dist --electron --dist",
        "electron.packager": "gulp electron.packager",
        "electron.packager.dev": "gulp electron.packager.dev --electron --dev",
        "electron.packager.dist": "gulp electron.packager.dist --electron --dist",
        "electron.run": "gulp electron.run --electron",
        "test": "gulp test --spec",
        "test.dev": "gulp test.dev --dev --spec"
    },
    "dependencies": {
        "@angular/common": "5.2.2",
        "@angular/compiler": "5.2.2",
        "@angular/core": "5.2.2",
        "@angular/forms": "5.2.2",
        "@angular/http": "5.2.2",
        "@angular/platform-browser": "5.2.2",
        "@angular/platform-browser-dynamic": "5.2.2",
        "@angular/router": "5.2.2",
        "core-js": "2.5.3",
        "reflect-metadata": "0.1.12",
        "rxjs": "5.5.6",
        "zone.js": "0.8.20"
    },
    "devDependencies": {
        "@types/browser-sync": "0.0.38",
        "@types/connect-history-api-fallback": "1.3.1",
        "@types/del": "3.0.0",
        "@types/extract-text-webpack-plugin": "3.0.0",
        "@types/gulp": "4.0.5",
        "@types/gulp-htmlmin": "1.3.31",
        "@types/gulp-plumber": "0.0.32",
        "@types/lodash": "4.14.96",
        "@types/node": "9.3.0",
        "@types/run-sequence": "0.0.30",
        "@types/webpack": "3.8.3",
        "browser-sync": "2.23.6",
        "connect-history-api-fallback": "1.5.0",
        "del": "3.0.0",
        "gulp": "3.9.1",
        "gulp-cssmin": "0.2.0",
        "gulp-htmlmin": "4.0.0",
        "gulp-minify-inline": "1.0.0",
        "gulp-modify-file": "1.0.0",
        "gulp-plumber": "1.2.0",
        "http-proxy-middleware": "0.17.4",
        "lodash": "4.17.4",
        "run-sequence": "2.2.1",
        "ts-node": "4.1.0",
        "tsconfig-paths": "3.1.1",
        "tslint": "5.9.1",
        "typescript": "2.6.2",
        "css-loader": "0.28.9",
        "extract-text-webpack-plugin": "3.0.2",
        "html-loader": "0.5.5",
        "modify-file-loader": "1.0.0",
        "pug-html-loader": "1.1.5",
        "raw-loader": "0.5.1",
        "style-loader": "0.19.1",
        "ts-loader": "3.3.1",
        "webpack": "3.10.0",
        "@types/electron-packager": "8.7.3",
        "electron": "1.7.11",
        "electron-packager": "10.1.1",
        "node-sass": "4.7.2",
        "sass-loader": "6.0.6",
        "@types/jasmine": "2.8.5",
        "@types/karma": "1.7.3",
        "jasmine": "2.9.0",
        "karma": "2.0.0",
        "karma-chrome-launcher": "2.2.0",
        "karma-coverage": "1.1.1",
        "karma-jasmine": "1.1.1",
        "karma-phantomjs-launcher": "1.0.4",
        "phantomjs-prebuilt": "2.1.16"
    },
    "engines": {
        "node": ">=6.0.0"
    }
}
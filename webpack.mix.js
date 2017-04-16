const { mix } = require('laravel-mix')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

mix.stylus('resources/styl/app.styl', 'static/css')
   .js('resources/js/app.js', 'static/js')
   .extract(['barba.js'])
   .sourceMaps()
   .webpackConfig({
     plugins: [
       new SWPrecacheWebpackPlugin({
         filepath: './static/service-worker.js',
         staticFileGlobs: [
           'static/img/**.*',
           'static/css/**/*.css',
           'static/js/**/*.js'
         ],
         stripPrefix: 'static'
       })
     ]
   })
   .disableNotifications()

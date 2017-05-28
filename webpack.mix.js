const { mix } = require('laravel-mix')
const path = require('path')
const WorkboxPlugin = require('workbox-webpack-plugin')

mix.js('resources/js/app.js', 'static/js')
   .stylus('resources/stylus/app.styl', 'static/css')
   .extract(['barba.js'])
   .webpackConfig({
     plugins: [
       new WorkboxPlugin({
         globDirectory: './public/',
         staticFileGlobs: [
           'css/**/*.css',
           'js/**/*.js'
         ],
         swDest: path.join('./public/', 'service-worker.js')
       })
     ]
   })
   .disableNotifications()

const { mix } = require('laravel-mix')
const WorkboxPlugin = require('workbox-webpack-plugin')

mix.js('resources/js/app.js', 'public/js')
   .stylus('resources/stylus/app.styl', 'public/css')
   .extract(['barba.js'])
   .webpackConfig({
     plugins: [
       new WorkboxPlugin({
         globDirectory: 'public/',
         globPatterns: [
           'css/**/*.css',
           'js/**/*.js'
         ],
         swDest: 'public/service-worker.js'
       })
     ]
   })
   .disableNotifications()

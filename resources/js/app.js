import Barba from 'barba.js'
import {HideShowTransition} from './barba-transition'

/* eslint-env browser */
(function () {
  'use strict'
  const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  )

  if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        registration.onupdatefound = () => {
          if (navigator.serviceWorker.controller) {
            const installingWorker = registration.installing

            installingWorker.onstatechange = () => {
              switch (installingWorker.state) {
                case 'installed':
                  break

                case 'redundant':
                  throw new Error(
                    'The installing ' + 'service worker became redundant.'
                  )

                default:
              }
            }
          }
        }
      })
      .catch(e => {
        console.error('Error during service worker registration:', e)
      })
  }

  document.addEventListener('DOMContentLoaded', function (event) {
    Barba.Pjax.getTransition = () => HideShowTransition
    Barba.Pjax.start()
  })

  Barba.Dispatcher.on('initStateChange', function () {
    window.ga('send', 'pageview')
  })
})()

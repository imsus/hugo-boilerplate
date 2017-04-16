import Barba from 'barba.js'

let HideShowTransition = Barba.BaseTransition.extend({
  start () {
    this.newContainerLoading.then(this.finish.bind(this))
  },

  finish () {
    document.body.scrollTop = 0
    this.done()
  }
})

export {
  HideShowTransition
}

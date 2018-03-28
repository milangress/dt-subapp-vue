/**
 * Simple wobbly clock module
 * could also be updated by an external source ...
 */

class WobbleClock {
  constructor (fps, resolution = 10, store = undefined) {
    this._fps = fps
    this._frametime = 1000 / this._fps
    this._resolution = resolution
    this._store = store
    this._time = Date.now()
    this._running = false
  }
  start () {
    this._running = true
    this.checkAndSetTime()
  }
  stop () {
    clearTimeout(this._running)
    this._running = false
  }
  checkAndSetTime () {
    const _this = this
    setTimeout(() => {
      _this.checkAndSetTime()
    }, this._resolution)
    if (Date.now() - this._time >= this._frametime) {
      this._time = Date.now()
      if (this._store) {
        this._store.commit('time', this._time)
      }
    }
  }
}

export default WobbleClock

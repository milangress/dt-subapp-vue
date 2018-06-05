/* global Primus */

import TinyEmitter from 'tiny-emitter'

class NetworkClock extends TinyEmitter {
  constructor (url = 'http://10.10.10.102:7070', options = {}) {
    super()

    const _this = this
    this._primus = Primus.connect(url, options)
    this._start = undefined
    this._remote = undefined
    this._internal = undefined
    this._offset = undefined
    this._primus.on('data', data => {
      // console.log('Received a clock message', data)
      // _this.emit('clock', data)
      _this._internal = Date.now()
      if (!_this._start) _this._start = _this._internal
      _this._remote = Math.round(data.us * 0.001)
      _this._offset = _this._internal - _this._remote
    })
  }

  getTime () {
    if (!this._offset) return -1
    return Date.now() - this._offset
  }
}

export default NetworkClock

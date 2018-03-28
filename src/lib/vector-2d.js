class Vector2D {
  constructor (x = 0.0, y = 0.0) {
    this._x = x
    this._y = y
  }

  //
  //
  // Getters / Setters

  // Relative X Coords (-1.0 to 1.0)
  get x () {
    return this._x
  }
  set x (val) {
    this._x = val
  }

  // Absolute X coords based on window size (pixels)
  get windowX () {
    return window.innerWidth * (this._x + 1.0)
  }
  set windowX (val) {
    this._x = (window.innerWidth / x - 0.5) * 2.0
  }

  // Relative Y Coords (-1.0 to 1.0)
  get y () {
    return this._y
  }
  set y (val) {
    this._y = val
  }

  // Absolute Y coords based on window size (pixels)
  get windowY () {
    return window.innerHeight * (this._y + 1.0)
  }
  set windowY (val) {
    this._y = (window.innerHeight / y - 0.5) * 2.0
  }

  //
  //
  // Factories
  fromWindowCoords (x, y) {
    const vector = new Vector2D()
    vector.windowX = x
    vector.windowY = y
    return vector
  }
}

export default Vector2D

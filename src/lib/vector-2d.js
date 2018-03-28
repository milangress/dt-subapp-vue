class Vector2D {
  constructor (x = 0.0, y = 0.0, scale = 1000) {
    this._x = x
    this._y = y
    this._scale = scale
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

  // Scaled X coords

  get scaleX () {
    return this.x * this.scale
  }
  set scaleX (val) {
    this._x = val / this.scale
  }

  // Relative Y Coords (-1.0 to 1.0)
  get y () {
    return this._y
  }
  set y (val) {
    this._y = val
  }

  // Scaled Y coords
  get scaleY () {
    return this.y * this.scale
  }
  set scaleY (val) {
    this._y = val / this.scale
  }

  // Overall scale
  get scale () {
    return this._scale
  }
  set scale (val) {
    this._scale = val
  }

  //
  //
  // Factories
  static fromScaledCoords (x, y) {
    const vector = new Vector2D()
    vector.scaledX = x
    vector.scaledY = y
    return vector
  }
}

export default Vector2D

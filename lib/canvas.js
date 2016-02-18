'use strict';

import Context2d from './context2d';

class Canvas {

  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  getContext(contextId) {
    if (contextId === '2d') {
      const ctx = this._context2d || new Context2d(this);
      this._context2d = ctx;
      return ctx;
    }
    return null;
  }

  toDataURL(type, encoderOptions) {

  }

}

Canvas.Context2d = Context2d;

export default Canvas;

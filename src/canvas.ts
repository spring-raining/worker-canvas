'use strict';

import Context2D from './context2D';

export default class Canvas {

  private _width: number;
  private _height: number;
  private _context2d: Context2D;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  getContext(contextId: string): Context2D {
    if (contextId === '2d') {
      const ctx = this._context2d || new Context2D(this);
      this._context2d = ctx;
      return ctx;
    }
    return null;
  }

  toDataURL(type, encoderOptions) {

  }

}

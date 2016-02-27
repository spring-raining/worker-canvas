'use strict';

import Canvas from './canvas';
import CanvasGradient from './canvasGradient';
import CanvasPattern from './canvasPattern';
import ImageData from './imageData';
//import {isValidNumber} from './util';

export default class Context2D {

  canvas: Canvas;
  fillStyle: string|CanvasGradient|CanvasPattern = '#000';
  font: string = '10px sans-serif';
  globalAlpha: number = 1.0;
  globalCompositeOperation: string = 'source-over';
  lineCap: string = 'butt';
  lineDashOffset: number = 0.0;
  lineJoin: string = 'miter';
  lineWidth: number = 1.0;
  miterLimit: number = 10;
  imageSmoothingEnabled: boolean = true;
  shadowBlur: number = 0;
  shadowColor: string = 'black';
  shadowOffsetX: number = 0;
  shadowOffsetY: number = 0;
  strokeStyle: string|CanvasGradient|CanvasPattern = '#000';
  textAlign: string = 'start';
  textBaseline: string = 'alphabetic';
  
  private _imageData: ImageData;

  constructor(canvas: Canvas) {
    this.canvas = canvas;
    this._imageData = new ImageData(canvas.width, canvas.height);
  }

  arc(x: number, y: number, radius: number,
      startAngle: number, endAngle: number, anticlockwise: boolean): void {

  }

  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {

  }

  beginPath(): void {

  }

  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number,
                x: number, y: number): void {

  }

  clearRect(x: number, y: number, w: number, h: number): void {

  }

  clip(fillRule: string): void {

  }

  closePath(): void {

  }

  createImageData(imageDataOrSw: number|ImageData, sh: number): ImageData {
    return undefined;
  }

  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient {
    return undefined;
  }

  createPattern(image: HTMLImageElement|HTMLCanvasElement|HTMLVideoElement,
                repetition: string): CanvasPattern {
    return undefined;
  }

  createRadialGradient(x0: number, y0: number, r0: number,
                       x1: number, y1: number, r1: number): CanvasGradient {
    return undefined;
  }

  drawImage(image: HTMLImageElement|HTMLCanvasElement|HTMLVideoElement,
            offsetX: number, offsetY: number, width: number, height: number,
            canvasOffsetX: number, canvasOffsetY: number,
            canvasImageWidth: number, canvasImageHeight: number): void {

  }

  fill(fillRule: string): void {

  }

  fillRect(x: number, y: number, w: number, h: number): void {

  }

  fillText(text: string, x: number, y: number, maxWidth: number): void {

  }

  getImageData(sx: number, sy: number, sw: number, sh: number): ImageData {
    return undefined;
  }

  getLineDash(): number[] {
    return undefined;
  }

  isPointInPath(x: number, y: number, fillRule: string): boolean {
    return undefined;
  }

  lineTo(x: number, y: number): void {

  }

  measureText(text: string): TextMetrics {
    return undefined;
  }

  moveTo(x: number, y: number): void {

  }

  putImageData(imagedata: ImageData, dx: number, dy: number,
               dirtyX: number, dirtyY: number,
               dirtyWidth: number, dirtyHeight: number): void {

  }

  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {

  }

  rect(x: number, y: number, w: number, h: number): void {

  }

  restore(): void {

  }

  rotate(angle: number): void {

  }

  save(): void {

  }

  scale(x: number, y: number): void {

  }

  setLineDash(segments: number[]): void {

  }

  setTransform(m11: number, m12: number, m21: number, m22: number,
               dx: number, dy: number): void {

  }

  stroke(): void {

  }

  strokeRect(x: number, y: number, w: number, h: number): void {

  }

  strokeText(text: string, x: number, y: number, maxWidth: number): void {

  }

  transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void {

  }

  translate(x: number, y: number): void {

  }

  /*constructor(canvas) {
    this._canvas = canvas;

    this._lineWidth = 1.0;
    this._lineCap = 'butt';
    this._lineJoin = 'miter';
    this._miterLimit = 10;
    this._lineDashOffset = 0.0;
    this._font = '10px sans-serif';
    this._textAlign = 'start';
    this._textBaseline = 'alphabetic';
    this._direction = 'inherit';
    this._fillStyle = '#000';
    this._strokeStyle = '#000';
    this._shadowBlur = 0;
    this._shadowColor = 'black';
    this._shadowOffsetX = 0;
    this._shadowOffsetY = 0;
    this._globalAlpha = 1.0;
    this._globalCompositeOperation = 'source-over';
    this._imageSmoothingEnabled = true;
  }

  get lineWidth() {
    return this._lineWidth;
  }

  set lineWidth(value) {
    if (isPositive(value)) {
      this._lineWidth = value;
    }
  }

  get lineCap() {
    return this._lineCap;
  }

  set lineCap(value) {
    switch (value) {
      case 'butt':
      case 'round':
      case 'square':
        this._lineCap = value;
        break;
    }
  }

  get lineJoin() {
    return this._lineJoin;
  }

  set lineJoin(value) {
    switch (value) {
      case 'bevel':
      case 'round':
      case 'miter':
        this._lineJoin = value;
        break;
    }
  }

  get miterLimit() {
    return this._miterLimit;
  }

  set miterLimit(value) {
    if (isPostive(value)) {
      this._miterLimit = value;
    }
  }

  get lineDashOffset() {
    return this._lineDashOffset;
  }

  set lineDashOffset(value) {
    if (isValidNumber(value)) {
      this._lineDashOffset = value;
    }
  }

  get font() {
    return this._font;
  }

  set font(value) {
    if (isString(value)) {
      this._font = value;
    }
  }

  get textAlign() {
    return this._textAlign;
  }

  set textAlign(value) {
    switch (value) {
      case 'left':
      case 'right':
      case 'center':
      case 'start':
      case 'end':
        this._textAlign = value;
        break;
    }
  }

  get textBaseline() {
    return this._textBaseline;
  }

  set textBaseline(value) {
    switch (value) {
      case 'top':
      case 'hanging':
      case 'middle':
      case 'alphabetic':
      case 'ideographic':
      case 'bottom':
        this._textBaseline = value;
        break;
    }
  }

  get direction() {
    return this._direction;
  }

  set direction(value) {
    switch (value) {
      case 'ltr':
      case 'rtl':
      case 'inherit':
        this._direction = value;
        break;
    }
  }

  get fillStyle() {
    return this._fillStyle;
  }

  set fillStyle(value) {
    if (isString(value)
      || value instanceof CanvasGradient
      || value instanceof CanvasPattern) {
      this._fillStyle = value;
    }
  }

  get strokeStyle() {
    return this._strokeStyle;
  }

  set strokeStyle(value) {
    if (isString(value)
      || value instanceof CanvasGradient
      || value instanceof CanvasPattern) {
      this._fillStyle = value;
    }
  }

  get shadowBlur() {
    return this._shadowBlur;
  }

  set shadowBlur(value) {
    if (isPositiveOrZero(value)) {
      this._shadowBlur = value;
    }
  }

  get shadowColor() {
    return this._shadowColor;
  }

  set shadowColor(value) {
    if (isString(value)) {
      this._shadowColor = value;
    }
  }

  get shadowOffsetX() {
    return this._shadowOffsetX;
  }

  set shadowOffsetX(value) {
    if (isValidNumber(value)) {
      this._shadowOffsetX = value;
    }
  }

  get shadowOffsetY() {
    return this._shadowOffsetY;
  }

  set shadowOffsetY(value) {
    if (isValidNumber(value)) {
      this._shadowOffsetY = value;
    }
  }

  get currentTransform() {
    return this._currentTransform;
  }

  set currentTransform(value) {
    this._currentTransform = value;
  }

  get globalAlpha() {
    return this._globalAlpha;
  }

  set globalAlpha(value) {
    if (isValidNumber(value) && 0 <= value && value <= 1) {
      this._globalAlpha = value;
    }
  }

  get globalCompositeOperation() {
    return this._globalCompositeOperation;
  }

  set globalCompositeOperation(value) {
    switch (value) {
      case 'source-over':
      case 'source-in':
      case 'source-out':
      case 'source-atop':
      case 'destination-over':
      case 'destination-in':
      case 'destination-out':
      case 'destination-atop':
      case 'lighter':
      case 'copy':
      case 'xor':
      case 'multiply':
      case 'screen':
      case 'overlay':
      case 'darken':
      case 'lighten':
      case 'color-dodge':
      case 'color-burn':
      case 'hard-light':
      case 'soft-light':
      case 'difference':
      case 'exclusion':
      case 'hue':
      case 'saturation':
      case 'color':
      case 'luminosity':
        this._globalCompositeOperation = value;
        break;
    }
  }

  get imageSmoothingEnabled() {
    this._imageSmoothingEnabled;
  }

  set imageSmoothingEnabled(value) {
    if (isBoolean(value)) {
      this._imageSmoothingEnabled = value;
    }
  }

  get canvas() {
    return this._canvas;
  }

  clearRect(x, y, width, height) {

  }

  fillRect(x, y, width, height) {

  }

  strokeRect(x, y, width, height) {

  }

  fillText(text, x, y, maxWidth) {

  }

  strokeText(text, x, y, maxWidth) {

  }

  measureText(text) {

  }

  lineWidth() {

  }

  getLineDash() {

  }

  setLineDash(segments) {

  }

  createLinearGradient(x0, y0, x1, y1) {

  }

  createRadialGradient(x0, y0, r0, x1, y1, r1) {

  }

  createPattern(image, repetition) {

  }

  beginPath() {

  }

  closePath() {

  }

  moveTo(x, y) {

  }

  lineTo(x, y) {

  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {

  }

  quadraticCurveTo(cpx, cpy, x, y) {

  }

  arc(x, y, radius, startAngle, endAngle, anticlockwise) {

  }

  arcTo(x1, y1, x2, y2, radius) {

  }

  ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {

  }

  rect(x, y, width, height) {

  }

  fill() {

  }

  stroke() {

  }

  drawFocusIfNeeded(element) {

  }

  scrollPathIntoView() {

  }

  clip() {

  }

  isPointInPath(x, y) {

  }

  isPointInStroke(x, y) {

  }

  rotate(angle) {

  }

  scale(x, y) {

  }

  translate(x, y) {

  }

  transform(a, b, c, d, e, f) {

  }

  setTransform(a, b, c, d, e, f) {

  }

  resetTransform() {

  }

  drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {

  }

  createImageData(width, height) {

  }

  getImageData(sx, sy, sw, sh) {

  }

  putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {

  }

  save() {

  }

  restore() {

  }

  addHitRegion(options) {

  }

  removeHitRegion(id) {

  }

  clearHitRegions() {

  }*/

}

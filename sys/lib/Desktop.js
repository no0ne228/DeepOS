/*
 * Copyright 2024 KolibriKing
 */

export class Desktop {
  constructor(data) {
    this.data = data;
    this.bg = document.createElement('div');
    this.bg.id = 'desktop';
    this.bg.style.backgroundColor = this.data.bg;
    this.bg.style.width = '100vw';
    this.bg.style.height = '100vh';
    this.bg.style.display = 'block';
    this.bg.style.position = 'absolute';
    this.bg.style.top = '0';
    this.bg.style.left = '0';
  }
  init() {document.querySelector('body').appendChild(this.bg);}
}
/*
 * Copyright 2024 KolibriKing
 */

export class Window {
  constructor(data) {
    /*full window div*/
    this.allWindow = document.createElement("div");
    this.allWindow.style.height = `calc(${data.height} + 4vh)`;
    this.allWindow.style.width = data.width;
    this.allWindow.style.position = "absolute";
    this.allWindow.style.top = data.pos.top;
    this.allWindow.style.left = data.pos.left;
    this.allWindow.id = "window";
    this.allWindow.style.zIndex = 5100;
    //this.allWindow.style.cursor = "move";
    this.allWindow.draggable = true;
    /*window content iframe*/
    this.windowContent = document.createElement("iframe");
    this.windowContent.style.height = data.height;
    this.windowContent.style.width = data.width;
    this.windowContent.style.position = "absolute";
    this.windowContent.style.bottom = "0";
    this.windowContent.style.border = "none";
    this.windowContent.src = data.src;
    /*window bar*/
    this.windowBar = document.createElement("div");
    this.windowBar.style.height = "4vh";
    this.windowBar.style.width = data.width;
    this.windowBar.style.backgroundColor = "rgb(73, 73, 73)";
    this.windowBar.style.position = "absolute";
    this.windowBar.style.top = "0";
    this.windowBar.style.cursor = "move";
    this.windowBar.draggable = true;
    /* Add event listeners for window movement */
    let clicked = false;
    let x, y;
    this.windowBar.addEventListener("mousedown", (event) => {
      clicked = true;
      x = event.pageX - this.allWindow.offsetLeft;
      y = event.pageY - this.allWindow.offsetTop;
    });
    document.addEventListener("mousemove", (event) => {
      if (clicked) {
        let newX = event.pageX - x;
        let newY = event.pageY - y;
        this.allWindow.style.left = `${newX}px`;
        this.allWindow.style.top = `${newY}px`;
      }
    });
    document.addEventListener("mouseup", () => {
      clicked = false;
    });
    /*window title*/
    this.windowTitle = document.createElement('span');
    this.windowTitle.textContent = data.title;
    this.windowTitle.style.color = '#ffffff';
    this.windowTitle.style.position = 'absolute';
    this.windowTitle.style.top = '0.8vh';
    this.windowTitle.style.left = 'calc(3.5vh + 1vw)';
    this.windowTitle.style.fontSize = '2vh';
    this.windowTitle.style.fontFamily = 'sans-serif';
    /*window icon*/
    this.windowIcon = document.createElement('img');
    this.windowIcon.src = data.icon;
    this.windowIcon.style.width = '3.5vh';
    this.windowIcon.style.height = '3.5vh';
    this.windowIcon.style.position = 'absolute';
    this.windowIcon.style.top = '0.25vh';
    this.windowIcon.style.left = '0.5vw';
    /*window close button*/
    this.windowCloseIcon = document.createElement('img');
    this.windowCloseIcon.src = '/usr/icons/Window/close.png';
    this.windowCloseIcon.style.width = '3.5vh';
    this.windowCloseIcon.style.height = '3.5vh';
    this.windowCloseIcon.style.position = 'absolute';
    this.windowCloseIcon.style.top = '0.25vh';
    this.windowCloseIcon.style.right = '1vw';
    this.windowCloseIcon.onclick = function() {
      document.querySelector('div#window').remove();
    }
  }
  init() {
    document.querySelector("body").appendChild(this.allWindow);
    document.querySelector("div#window").appendChild(this.windowContent);
    document.querySelector("div#window").appendChild(this.windowBar);
    document.querySelector("div#window").appendChild(this.windowTitle);
    document.querySelector('div#window').appendChild(this.windowIcon);
    document.querySelector('div#window').appendChild(this.windowCloseIcon);
  }
}

export class Desktop {
  constructor(data) {
    /*background*/
    this.data = data;
    this.bg = document.createElement("img");
    this.bg.id = "desktop_bg";
    this.bg.src = data.bg.bg;
    this.bg.style.width = "100vw";
    this.bg.style.height = "100vh";
    this.bg.style.display = "block";
    this.bg.style.position = "absolute";
    this.bg.style.top = "0";
    this.bg.style.left = "0";
    this.bg.style.zIndex = "0";
    this.bg.alt = data.alt;
    /*tobpar*/
    this.topbar = document.createElement("div");
    this.topbar.style.backgroundColor = this.data.topbar.fill;
    this.topbar.style.display = "block";
    this.topbar.style.height = "5vh";
    this.topbar.style.width = "100vw";
    this.topbar.style.position = "absolute";
    this.topbar.style.top = "0";
    this.topbar.style.left = "0";
    this.topbar.style.zIndex = "5100";
  }
  init() {
    document.querySelector("body").appendChild(this.bg);
    document.querySelector("body").appendChild(this.topbar);
  }
}

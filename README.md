# DeepOS
A simple OS that is mostly written in JavaScript

## Download and run
### Using Github CLI
Clone the repository

```bash
gh repo clone KolibriKing/DeepOS
cd /path/to/os
```

**Start server**

Using python

`python3 -m http.server 3000`

Or

Using npm

```bash
npm i light-server -g
light-server -s . -p 3000
```

Then navigate to [http://0.0.0.0:3000](http://0.0.0.0:3000) in a web browser

**Note: it's recommended to use method via `npm` for development**

Make sure your server root is where `index.html` located and your browser supports EcmaScript 6, because from version Pre-0.05.2 Alpha `import` statements are being used instead of `importScript` function declared in `/sys/init.js`

## Table of contents
[DeepOS](https://github.com/KolibriKing/DeepOS/new/main?readme=1#deepos)
 - [Download and run](https://github.com/KolibriKing/DeepOS/edit/main/README.md#download-and-run)
   - [Using Github CLI](https://github.com/KolibriKing/DeepOS/edit/main/README.md#using-github-cli)

# DeepOS
![Static Badge](https://img.shields.io/badge/Stable-v.0.15.1--Alpha-blue)
![Static Badge](https://img.shields.io/badge/License-Apache_2.0-orange)

A simple javascript OS

## Download and run
### Using installer
```bash
curl -s https://raw.githubusercontent.com/KolibriKing/DeepOS/main/install.sh | bash
```

### Using Github CLI
Clone the repository

```bash
gh repo clone KolibriKing/DeepOS
cd /path/to/os
```

**Start DeepOS**

```bash
npm start
```

Then navigate to [http://0.0.0.0:3000](http://0.0.0.0:3000) in a web browser

Make sure your server root is where `index.html` located and your browser supports EcmaScript 6, because from version 0.05.2 Alpha `import` statements are being used instead of `importScript` function declared in `/sys/init.js`

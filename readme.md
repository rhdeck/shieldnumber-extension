# ShieldNumber-Extension

## Building Distribution files
```
yarn 
NODE_ENV=production yarn build
```

## Note on Hashed JS and CSS files
This repository uses [parcel](https://parceljs.org) to bundle the source files. The bundled files have a different hash each time, so the file names will not match, though the files will be identical.
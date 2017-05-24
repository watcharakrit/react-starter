# Saneha
Single Page Application (SPA) with React and Redux.

### Requirement
- Node LTS Version: 6.9.1
- Webpack: 1.13.3
- React: 15.4.1
- Redux: 3.6.0
- CSSModules
- SCSS

### Install
`npm install`.

### Start
- `npm start`.
- http://localhost:7900

#### Structures
```
.
├── src
|   |
|   ├── components        //React Components.
|   |
|   ├── layouts           //React Component Layouts Types.
|   |
|   ├── core
|   |   └── config.js     //Core Config System of SPA.
|   |
|   ├── helpers           //Utils and Helpers function.
|   |   └── request.js    //Wrapper Request Function.
|   |
|   ├── modules           //Redux Actions and Reducers (including on one to call modules).
|   |
|   ├── styles            //Mixins Variables and Themes of Global Styles.
|   |
|   ├── app.js            //Setup React Router.
|   └── index.js          //index webpack of projects.
|
|
├── .babelrc
├── .eslintrc
├── .scss-lint.yml
|
├── index.html
|
├── webpack.config.js     //Config webpack for Dev.
├── webpack.staging.js    //Config webpack for Staging.
└── webpack.production.js //Config webpack for Production.
```

## Contributors
- Watcharakrit@getalongwell.co.th

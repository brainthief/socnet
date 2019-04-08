# socnet

Social network for training purpose

## Links

01 [Уроки "React JS - путь самурая](https://www.youtube.com/watch?v=Zgd9IlbhDcU&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8) - Intro

02 [Уроки React JS (Зачем NodeJS на фронте)](https://www.youtube.com/watch?v=WN2LHq3yRwQ) - Intro NodeJS

03 [Уроки React JS (Установка NodeJS)](https://www.youtube.com/watch?v=AUi1JT4n8xA) - Install NodeJS

[NodeJS](https://nodejs.org/en/)

04 [Уроки React JS](https://www.youtube.com/watch?v=9Jk8SLMl3gI) - create-react-app

[create-react-app](https://github.com/facebook/create-react-app) - GITHUB CRA

```
npx create-react-app my-app
cd my-app
npm start
```

```
yarn start
```

05 [Уроки React JS](https://www.youtube.com/watch?v=TPYgQvY9VVQ) - SPA: single page application

06 [Уроки React JS](https://www.youtube.com/watch?v=CdweQ2F2qBI) - index.js, App, JSX

07 [Уроки React JS](https://www.youtube.com/watch?v=UMw_hbNMIAA) - component - it's function, that return JSX code.

* component must start with capital letter 

Jeigu, return ir JSX kodas prasideda ta pačia eilute, galima nedėti neapskliausti JSX kodo

```
const App = () => {
  return <div className="App">
    <h1>SOCNET</h1>
  </div>
}
```
```
const App = () => {
  return (
    <div className="App">
      <h1>SOCNET</h1>
    </div>
  );
}
```
Use component:
```
<App />
```
08 [Уроки React JS](https://www.youtube.com/watch?v=lXpPS4wKDfE) - import / export

* import only what export other module

* only one default export

* export const Profile...

* export default Profile...

* import Profile from './profile - imports default export

* import React from 'react' - import from node modules

* import {Profile} from './profile' - import not default export

* import Profile form './../profile'

09 [Уроки React JS](https://www.youtube.com/watch?v=VTr3pCutjxg) - import / export our component to modules

10 [Уроки React JS](https://www.youtube.com/watch?v=TZUPCqfs8VU) - danger of auto import

VS plugin for auto import module - auto import. If not working plugin after installation, need create new file with component and try use in JSX. 

VS EN spell checker - Code Spell Checker

11 [Уроки React JS (соц. сеть, шаг 1, вёрстка, grid)](https://www.youtube.com/watch?v=t6rAzhi3vjQ) - step1, design with grid

* div - 'new row'

12 [Уроки React JS (Разбивка на компоненты)](https://www.youtube.com/watch?v=00ZNuBIE-pM) - one component - one file

13 [Уроки React JS (git-репозиторий)](https://www.youtube.com/watch?v=6pAkynDPXEc) - GIT

* gitk --all&  - open GUI for GIT

* ctrl + insert - copy in GUI

* shift + insert - paste 

* git checkout commit-number - switch between commits

(IT KAMASUTRA GIT repository)[https://github.com/it-kamasutra/react-way-of-samurai]

14 [Уроки React JS (css-модули, css-modules)](https://www.youtube.com/watch?v=bQ3UPYFHyJ0) - CSS MODULES in ReactJS

* file *.module.css

* import in css -> import css from './file.module.css'

* user CSS -> className={css.head}

* user multi class -> className={\`${css.classOne} ${css.classTwo}\`}

15. [Уроки React JS (структура папок, новые компоненты, улучшаем css)](https://www.youtube.com/watch?v=8VOuxijh9_s)

[List all lessons](https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8)
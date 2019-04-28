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

* **import** only what **export** other module

* only **one** default export

* **export const Profile**...

* **export default Profile**...

* **import Profile from './profile** - imports default export

* **import React from 'react'** - import from node modules

* **import {Profile} from './profile'** - import not default export

* **import Profile form './../profile'**

09 [Уроки React JS](https://www.youtube.com/watch?v=VTr3pCutjxg) - import / export our component to modules

10 [Уроки React JS](https://www.youtube.com/watch?v=TZUPCqfs8VU) - danger of auto import

VS plugin for auto import module - **auto import**. If not working plugin after installation, need create new file with component and try use in JSX. 

VS EN spell checker - **Code Spell Checker**

11 [Уроки React JS (соц. сеть, шаг 1, вёрстка, grid)](https://www.youtube.com/watch?v=t6rAzhi3vjQ) - step1, design with grid

* div - 'new row'

12 [Уроки React JS (Разбивка на компоненты)](https://www.youtube.com/watch?v=00ZNuBIE-pM) - one component - one file

13 [Уроки React JS (git-репозиторий)](https://www.youtube.com/watch?v=6pAkynDPXEc) - GIT

* **gitk --all&**  - open GUI for GIT

* **ctrl + insert** - copy in GUI

* **shift + insert** - paste 

* **git checkout commit-number** - switch between commits

(IT KAMASUTRA GIT repository)[https://github.com/it-kamasutra/react-way-of-samurai]

14 [Уроки React JS (css-модули, css-modules)](https://www.youtube.com/watch?v=bQ3UPYFHyJ0) - CSS MODULES in ReactJS

* file __*.module.css__

* import in css -> **import css from './file.module.css'**

* use CSS -> **className={css.head}**

* use multi class -> **className={\`${css.classOne} ${css.classTwo}\`}**

```
 <div className={`${css.item} ${css.active}`}>Message</div>
 ```


15 [Уроки React JS (структура папок, новые компоненты, улучшаем css)](https://www.youtube.com/watch?v=8VOuxijh9_s)

16 [Уроки React JS (props - важнейшая тема) - react курсы бесплатно](https://www.youtube.com/watch?v=-mDs48HB3II&) - props

 * every component get **props** (object with 'attributes'):

```
const Header = (props) => ...
```

* if no attributes -> <Header />. Props will be empty object

```
{
  //empty object
}
```

* if with attributes -> <Header **name='Name'**> -> component get props object with values

```
{
  name: 'Name'
}
```
use in component JSX

```
{props.name}
```

17 [Уроки React JS (остановочка "react за час, часть 1")](https://www.youtube.com/watch?v=Ps2TiA5dIKc)

17.x [Уроки React JS (инкубатор - теперь и онлайн)](https://www.youtube.com/watch?v=AVpodoajaAc) 

18 [Уроки React JS (страница Dialogs)](https://www.youtube.com/watch?v=IL1LTYDNAhk) - DialogsPage

19 [Уроки React JS (route, browser-router, маршрутизация)](https://www.youtube.com/watch?v=5X5ZLWdAnt4) - route, browser-route

install route package to project

```
npm install --save react-router-dom
```

```
yarn add react-router-dom
```

use in main component:
```
...
import { BrowserRouter, Route } from "react-router-dom"
...
const App = (props) => {
  const { profilePage, dialogPage } = props.state;
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Navbar />
        <div className='content'>
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}
```
20. [Уроки React JS (NavLink)](https://www.youtube.com/watch?v=Wm62LRtxomk) -  NavLink 

For navigation used NavLink component:

```
...
import { NavLink } from 'react-router-dom'
const Nav = () => {
 return (
  <nav className={css.nav}>
   <div className={css.item}><NavLink to="/profile">Profile</NavLink></div>
   <div className={css.item}><NavLink to="/dialogs">Message</NavLink></div>
   ...
  </nav>
...
```

or Link component:

```
...
import { Link } from 'react-router-dom'
const Nav = () => {
 return (
  <nav className={css.nav}>
   <div className={css.item}><Link to="/profile">Profile</Link></div>
   <div className={css.item}><Link to="/dialogs">Message</Link></div>
   ...
  </nav>
...
```

If need change 'active' link class:

```
<div className={css.item}><NavLink to="/profile" activeClassName={css.active}>Profile</NavLink></div>
```

Exact - tells router do action only if '/' and nothing more

```
 <div className={css.item}><Link exact to="/">Profile</Link></div>
```

21. [Уроки React JS (Верстаем страницу Диалогов)](https://www.youtube.com/watch?v=vcGrFNXy3zk) 

22. [Уроки React JS (Route exact)](https://www.youtube.com/watch?v=HfGD5xRIiMU)

If need use different link for same Component:
```
 <div><NavLink to='/dialogs/0' activeClassName={css.active} >{userList[0]} </NavLink></div>
```

23. [Уроки React JS (props для Диалогов)](https://www.youtube.com/watch?v=DnRvj9A_1ps)

24. [Уроки React JS (UI - BLL, выносим данные в сторону)](https://www.youtube.com/watch?v=M7wWqAsw_iE) - UI and BLL

- **UI - User Interface**. Only draw components

- **BLL - Business Logic Layer**. How to use props / data

25. [Уроки React JS (метод массива - map)](https://www.youtube.com/watch?v=IG2I3j1vCfQ) - map method

- **const newArray** - create destination array

- **const newArray = oldArray.map(rules)** - from source array map method take every element and using rules create new array. 

- **const newArray = oldArray.map( (param1, param2, param3) => {} )** - param1 - every row of source array, param2 - index of every row, param3 - source array

26. [Уроки React JS (структура проекта, ещё раз про ui - bll)](https://www.youtube.com/watch?v=9ic9dq7FLaM) 

![app structure](https://github.com/brainthief/socnet/blob/master/forgit/026.JPG)

SPA - single page application. 

**UI BLL DAL** - main code parts

* **BLL** - Business Logic Layer. Redux responsible for BLL. Store data. Gets data from server and send to UL.

* **UI** - User Interface. React responsible for UI. Gets data from BLL and rendering.

![BLL and UI data flow](https://github.com/brainthief/socnet/blob/master/forgit/0262.JPG)

27. [Уроки React JS (component vs render, прокидываем props через Route)](https://www.youtube.com/watch?v=wNWKFyh34r0)

Migrate data over rout component:

```
<Route path="/profile" render=( () => <Profile posts={prop.posts}>) />

```

28. [Уроки React JS (выносим данные в index.js)](https://www.youtube.com/watch?v=BygaoztCh94)

29. [Уроки React JS (упаковываем данные в state)](https://www.youtube.com/watch?v=GW5PwlzXBDc) - state moved to separate file

![app structure](https://github.com/brainthief/socnet/blob/master/forgit/0294.JPG)

30. [Уроки React JS (остановочка "react за час, часть 2")](https://www.youtube.com/watch?v=5js6RxcmxOA)

- functional component -> presentation , stateless, dumb component. Return JS content

31. [31. Уроки React JS - onClick, ref, VirtualDOM](https://www.youtube.com/watch?v=VkHcOHWSaNQ)

Event action:

```
<button onCLick={ () => { alert('action') } }>send</button>
```

Wrong way (function will run after rendering):

```
<button onCLick={ alert('action') }>send</button>
```

Giving link (function is object - have links)(without "()" ):

```
<button onCLick={ myFunction }>send</button>
```

------------------------------

Bad practice is to work with DOM without ReactJS crated VirtualDOM (Ref or native JS like getElementById).
- Create link 

```
let newPostElement = React.createRef()
```

- Show witch element it will be

```
<textarea ref={newPostElement}></textarea>
```

- Use value of ref element

```
let text = newPostElement.current.value
```

32. [Уроки React JS - прокидываем callback через props](https://www.youtube.com/watch?v=OtMEWJ-3d18)



-----------------------------------------------------
```
yarn add prop-types
```

usage:

```
...
import PropTypes from 'prop-types'

const Message = ({ author, msg, me }) => {
...
}

Message.propTypes = {
 author: PropTypes.string,
 msg: PropTypes.string,
 me: PropTypes.string
}
```
In last component

-----------------------------------------------------

Add img:

```
<img className={css.img} src={require(`./../../../../img/avatars/${imgUrl}`)} alt={name} />
```

-----------------------------------------------------
Render after change 'state' in functional react programing

```
const changeTextArea = (e) => {
 ...
 renderEntirePage();
}

const renderEntirePage = () => {
 ReactDOM.render(<App changeTextArea={changeTextArea} />, document.getElementById('root'));
}

renderEntirePage();
```
-----------------------------------------------------
Callback

```
const MyPosts = (props) => {
 const { comments, title, newComment } = props.profilePage
 return (
  <div className={css.myPosts}><div className={css.title}>{title}</div>
   <div> New post
    <div>
     <textarea onChange={(e) => { props.changeTextArea(e) }} value={newComment}></textarea>
     <button onClick={() => { props.addNewPost() }} disabled={newComment.length <= 0 ? true : false}>Add posts</button>
    </div>
    {comments.map((el, index) => <Post key={index} message={el.msg} like={el.likeCount} />)}
   </div>
  </div>
 )
}
```
Copy, modify and replace. Render
```
const addNewPost = () => {
 state.profilePage.comments = [{ msg: state.profilePage.newComment, likeCount: '0' }, ...state.profilePage.comments]
 state.profilePage.newComment = ''
 renderEntirePage();
}
```
Action, update, render
```
const changeTextArea = (e) => {
 state.profilePage.newComment = e.target.value
 renderEntirePage();
}
```
-----------------------------------------------------
SOLID:

**S** - every function / component / element / system is qualitatively responsible for one job

[List all lessons](https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8)

in debugger mode can get variables in console
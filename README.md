# socnet

Social network for training purpose

* if in folder is index.js file, it will be imported first

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
 ---------------------------------------------
 Inline styles with logic:

 ```
 const style = {
   color: important ? 'steelblue' : 'black',
   fontWeight: important ? 'bold' : 'normal'
 }
 ...
 return(<span style={style}>...</span>)
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

* event in camel case - onClick, onBlur, onMouseOver.
* need give function.
* pay attention to this save context. 
* in class component giving link using this.
```
onLabelCLick(){
}
render() {
  return(
    ...
    <span
     onClick = {this.onLabelClick}
    >
     Click
    </span>
    ...
  )
}
```
* in class component giving link with bind this (?every time will be created new function).
```
onLabelCLick(){
  console.log(this.props.label)
}
render() {
  return(
    ...
    <span
     onClick = {this.onLabelClick.bind(this)}
    >
     Click
    </span>
    ...
  )
}
```

* if function is in constructor will get save this
```
constructor(){
  super();
  this.onLabelCLick(){
    console.log(this.props.label)
  }
}

render() {
  return(
    ...
    <span
     onClick = {this.onLabelClick}
    >
     Click
    </span>
    ...
  )
}
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

- Creating function

```
export let myFunction = (text) => {
  newObject = {
    id : 5,
    message : text
  }
  state.myArray.push(newObject) //not best way!!
}
```
- Sending function link via props to component

```
<Component myFunction={myFunction} />
```

Inside component:
```
...
{myFunction} = props
...
<button onClick={()=>{myFunction()}}>send</button>
```

33. [Уроки React JS - добавление поста на стену (зачатки FLUX-концепции)](https://www.youtube.com/watch?v=H6EEnnLvFYo)

cannot be bidirectional import:

![bidirectional import](https://github.com/brainthief/socnet/blob/master/forgit/0331.jpg)

using third file for solving problem:

![app structure](https://github.com/brainthief/socnet/blob/master/forgit/0332.jpg)

* index.js:

```
...
import state from './state.js
import {renderEntireTree} from './render.js'
...
renderEntireTree(state)
```

* state.js:
```
import {renderEntireTree} from './render.js'
...
export addPost = (text) => {
  ...
  renderEntireTree(state)
}
```

* render.js

```
import state from 'state
export const renderEntirePage = (state) => {
 ReactDOM.render(<App state={state} addNewPost={addNewPost} changeTextArea={changeTextArea} />, document.getElementById('root'));
}
```

![flux concept](https://github.com/brainthief/socnet/blob/master/forgit/0333.jpg)

34. [Уроки React JS - Вынос мозга (FLUX-круговорот на каждый символ)](https://www.youtube.com/watch?v=bpEy10oJSCg)

![state management](https://github.com/brainthief/socnet/blob/master/forgit/034.JPG)

* for small project can be used local state of class components

onChange save every symbol in state:

```
<div> New post
  <div>
    <textarea className={css.textarea} rows="1" onChange={(e) => { dispatch({ type: UPDATE_TEXT, value: e.target.value }) }} value={newComment}></textarea>
  </div>
  <div>
    <button className={css.button} onClick={() => { dispatch({ type: ADD_COMMENT }) }} disabled={newComment.length <= 0 ? true : false}>Add posts</button>
  </div>
 ...
</div>
```

save value from state and clear

```
dispatch(action) {
    switch (action.type) {
      case ADD_COMMENT:
        this._state.profilePage.comments = [{ msg: this._state.profilePage.newComment, likeCount: '0' }, ...this._state.profilePage.comments]
        this._state.profilePage.newComment = ''
        this._refresh()
        break;
      case UPDATE_TEXT:
        this._state.profilePage.newComment = action.value
        this._refresh()
        break
        ...
      default:
        break;
    }
  }
```

35. [Уроки, Курс React JS - callback, subscribe, observer](https://www.youtube.com/watch?v=iN6QXbHedQc)

To use outside function (for manual render VirtualDOM) created empty method:
```
_refresh() {
  },
```
Using setter method. Calling subscribe method and changed refresh() alias to outside function:
```
 subscribe(func) {
    this._refresh = func
  }
```

In index.js changed alias to renderEntirePage function:

```
store.subscribe(renderEntirePage);
```

36. [Уроки, Курс React JS - про ООП поверхностно (зачем нам объекты)](https://www.youtube.com/watch?v=s1n24A2Xr0M)

```
let man = {
  name: 'Name',
  age: 31,
  sayName(){
    alert(this.name);
  }
}
```

Encapsulation. Means don't use directly man.name, bus use getters or setters. Hide details. Only with store methods can change date. This methods can call interface on object. 

```
let man = {
  name: 'Name',
  age: 31,
  getName(){
    return this.name;
  }
}

console.log(man.getName())
```

Properties of object starts be private. Using interface : 'geters' and 'seters'. 

```
let man = {
  _name: 'Name',
  _age: 31,
  getName(){
    return this._name;
  },
  setName(name){
    this._name = name
  }
}
```

37. [Уроки, Курс React JS - store, state, ООП, рефакторинг](https://www.youtube.com/watch?v=Bq_tmt-hRn0)

* all state with methods will be in store.

```
const store = {
  _state: {
    profilePage: {...},
    ...
  },
  getState() {...},
  dispatch(action) {...},
  _refresh() {...},
  subscribe(func) {...}
}
export default store
```

 * function migrate to store method

 ```
 const getState = () => {}
 ```

 goes to 

 ```
 const store = {
  _state: {...},
  getState() {...}
}
 ```

 * if need get state outside:

```
const store = {
  _state: {
    profilePage: {...},
    ...
  },
  getState() {
    return this._state
  },
}
export default store
```

use:

```
store.getState()
```
# Context Problem

**TypeError: Cannot read property 'profilePage' of undefined**

Means that with profilePage ir ok, but problem 'left'. **Context**

**this._state.**profilePage

This means who name call function, not where it is.
```
const store = {
  _state: {
    profilePage: {...},
    ...
  },
  getState() {
    return this._state
  },
}
```

using:

```
<App state={store.getState()}>
```
this will be **store**

if we send (don't run) link function to component

```
<App addPost={store.addPost}>
```

and call in component function - this will be this props context

```
const addPost = () => {
  props.addPost()
}
```

For save context need use bind method

```
<App addPost={store.addPost.bind(store)}>
```

Will return function with mounted needed context. This = store

-----------------------------------------------------
store, subscribe, dispatch

```
export const ADD_COMMENT = 'PROFILE/ADD_COMMENT'
export const UPDATE_TEXT = 'PROFILE/UPDATE_TEXT'
...
const store = {
  _state: {
    profilePage: {
      title: 'My posts',
      comments: [
        { msg: 'all ok ;)', likeCount: 5 },
      ...
      ],
      newComment: ""
    },
    ...
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_COMMENT:
        this._state.profilePage.comments = [{ msg: this._state.profilePage.newComment, likeCount: '0' }, ...this._state.profilePage.comments]
        this._state.profilePage.newComment = ''
        this._refresh()
        break;
      case UPDATE_TEXT:
        this._state.profilePage.newComment = action.value
        this._refresh()
        break
      ...
      default:
        break;
    }
  },
  _refresh() {
  },
  subscribe(func) {
    this._refresh = func
  }
}
export default store
```

1.  ___state ( "___" before property) means it's private property. To get or change need 'seters' and 'geters' methods in store object. Get method for state is :

```
  getState() {
    return this._state
  },

```

2. To use outside function (for manual render VirtualDOM) created empty method:
```
_refresh() {
  },
```
With set method called subscribe changed to alias outside function:
```
 subscribe(func) {
    this._refresh = func
  }
```
In index.js changed alias to renderEntirePage function:
```
store.subscribe(renderEntirePage);
```

3. To access property inside object using this (nos object name)
```
    return this._state
```

4. Using one method for different actions (dispatch)

```
dispatch(action) {
    switch (action.type) {
      case ADD_COMMENT:
        this._state.profilePage.comments = [{ msg: this._state.profilePage.newComment, likeCount: '0' }, ...this._state.profilePage.comments]
        this._state.profilePage.newComment = ''
        this._refresh()
        break;
      case UPDATE_TEXT:
        this._state.profilePage.newComment = action.value
        this._refresh()
        break
      default:
        break;
    }
```
* **break** or **return** stops action.

5. action is object and must have **type** property:

```
dispatch({ type: "UPDATE_TEXT", value: e.target.value })
```

6. giving method to components:

```
const App = (props) => {
 ...
  const dispatch = props.dispatch
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Navbar sideBar={sideBar} />
        <div className='content'>
          <Route exact path="/profile" render={() => <Profile profilePage={profilePage} dispatch={dispatch} />} />
          <Route path="/dialogs" render={() => <Dialogs dialogPage={dialogPage} dispatch={dispatch} />} />
          ...
        </div>
      </div>
    </BrowserRouter>);}
```

7. In state.js is const for action type

```
export const ADD_COMMENT = 'PROFILE/ADD_COMMENT'
export const UPDATE_TEXT = 'PROFILE/UPDATE_TEXT'
```

Importing in component needed const and using it:

```
...
import { ADD_COMMENT, UPDATE_TEXT } from './../../../redux/state'

const MyPosts = (props) => {
 ...
 let dispatch = props.dispatch
 return (
  <div className={css.myPosts}><div className={css.title}>{title}</div>
   <div> New post
    <div>
     <textarea className={css.textarea} rows="1" onChange={(e) => { dispatch({ type: UPDATE_TEXT, value: e.target.value }) }} value={newComment}></textarea>
    </div>
    <div>
     <button className={css.button} onClick={() => { dispatch({ type: ADD_COMMENT }) }} disabled={newComment.length <= 0 ? true : false}>Add posts</button>
    </div>
    <div className={css.comments}>
     {comments.map((el, index) => <Post key={index} message={el.msg} like={el.likeCount} />)}
    </div>
   </div>
  </div>
 )
}
export default MyPosts
```

8. Need bind dispatch for save this content to store object

```
import store from './redux/state.jsx';
const state = store.getState()

const renderEntirePage = () => {
 ReactDOM.render(<App
  state={state}
  dispatch={store.dispatch.bind(store)}
 />, document.getElementById('root'));
}
```

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

**O** - open for sharing, closed for modification

[List all lessons](https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8)

in debugger mode can get variables in console

# Redux

Library for state control. 

Install:

```
yarn add redux
```

and

```
npm install redux --save
```

## Store

* Have methods: getState, subscribe, dispatch
* Will be created from init reducer data.
* combineReducers will collect all reducers returns to one state
* createStore(combinedReducers) will create store. Will create action type for init date (will work default with initialState data). 

```
  _state: {
    profilePage: profilePageReducer(undefined, { type: 'init' }),
    dialogPage: dialogPageReducer(undefined, { type: 'init' }),
    sideBar: sideBarReducer(undefined, { type: 'init' })
  },
```

* store.getState() return state
* have dispatch and subscribe methods


```
import profilePageReducer from './redux/profilePageReducer'
import dialogPageReducer from './redux/dialogPageReducer'
import sideBarReducer from './redux/sideBarReducer'
import { combineReducers, createStore } from 'redux'


const combinedReducers = combineReducers({
 profilePage: profilePageReducer,
 dialogPage: dialogPageReducer,
 sideBar: sideBarReducer
})
const store = createStore(combinedReducers)
const state = store.getState()
```

## Subscribe

* renderEntirePage(state) - callback function for 'manual' rendering.
* subscribe will be run after every dispatch.

```
store.subscribe(() => {
 const state = store.getState();
 renderEntirePage(state)
});
```

## Action

* REDUX - DUCK - logic for naming action type.
* Action is object.
* Every action must have property type. **SC/PROFILE_PAGE/ACC_COMMENT** - **project/page/action** and it must be unique, because every action will be given to every reducer.
* Can be combined to one object for logic. One export exports all actions constants.

```
export const DIALOGS = {
  ADD_MESSAGE: 'SC/DIALOGS/ADD_MESSAGE',
  REMOVE_MESSAGE: 'SC/DIALOGS/REMOVE_MESSAGE'
}
```

and use in reduce:

```
case DIALOGS.ADD_MESSAGE
```

## Action creators

* Its functions for creating actions for reducers
* Helping create action in component

```
import { addMessageActionCreator, updateMessageActionCreator } from './../../redux/dialogPageReducer'
...
const mapDispatchToProps = (dispatch) => {
 return {
  addMessage: () => { dispatch(addMessageActionCreator()) },
  updateMessage: (e) => { dispatch(updateMessageActionCreator(e.target.value)) }
 }
}
```

Action creators:
```
export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateMessageActionCreator = (value) => {
  return {
    type: UPDATE_MESSAGE,
    value
  }
}
```

* We quickly know what need for action.

## Dispatch

* Will give part **state** ant **action** to reducer.
* After all he will initialize render VirtualDOM.

```
dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogPageReducer(this._state.dialogPage, action)
    this._state.sideBar = sideBarReducer(this._state.sideBar, action)
    this._refresh();
}
```

## Reducer

* Every reducer are in separate files.
* Reducer will get state and action.
* Every reducer is responsible only part of state (**state = store.state.profilePage**). Dispatch connect all part to one sate.
* Reducer must have initial state for initialization. (sideBarPageReducer = (state **= initialState**, action)).
* Every reducer must return state.
* Every action will be send to every reducer.


Empty reducer
```
const sideBarPageReducer = (state = initialState, action) => {
 switch (action.type) {
  default:
   return state
 }
}
```

Example:
```
...
const profilePageReducer = (state = initialState, action) => {
 switch (action.type) {
  case ADD_COMMENT:
   state.comments = [{ msg: state.newComment, likeCount: '0' }, ...state.comments]
   state.newComment = ''
   return state
  case UPDATE_TEXT:
   state.newComment = action.value
   return state
  default:
   return state
}}
...
```

With default data:
```
const combinedReducers = combineReducers({
 profilePage: profilePageReducer,
 dialogPage: dialogPageReducer,
 sideBar: sideBarReducer
})
const store = createStore(combinedReducers, {})
```
[Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)

# React-redux

* Clear component from attributes

Install:
```
yarn add react-redux
```

## Provider

* Fix context problem

Envelope main component
```
import {Provider} from './react-redux'
...
ReactDOM.render((
 <Provider store={store}>
  <AppRootComponent />
 </Provider>
), rootElement)
```

## Connect

* Its HOC.
* Monitoring or data changed.
* Initialization render after data modification.
* connect()() - firs run connect(), then results go to ().
* connect(mapStateToProps, mapDispatchToProps)(Dialogs) - combine sate and functions to component (Dialogs).
* mapStateToProps - connect state part to component props. This name can be changed.

Connect **state.dialogPage**  to component props via dialogPage property

```
const mapStateToProps = (state) => {
 return { dialogPage: state.dialogPage  }
}
```

And in results in props object:

```
 const { userList, chat, newMessage } = props.dialogPage;
```

* mapDispatchToProps - connect dispatcher to object props. This name can be changed.

```
const mapDispatchToProps = (dispatch) => {
 return {
  addMessage: () => { dispatch(addMessageActionCreator()) },
  updateMessage: (e) => { dispatch(updateMessageActionCreator(e.target.value)) }
 }
}
```

After in props appears callbacks:
```
const { addMessage, updateMessage } = props
```

Inside component can be used:
```
const MyPosts = (props) => {
 const { addMessage, updateMessage } = props
 return (
...
     <textarea className={css.textarea} rows="1" onChange={(e) => { updateMessage(e) }} value={newComment}></textarea>
...
     <button className={css.button} onClick={() => { addMessage() }} disabled={newComment.length <= 0 ? true : false}>Add posts</button>
...
 )
}
```

Code:
```
const Dialogs = (props) => {
 const { userList, chat, newMessage } = props.dialogPage;
 const { addMessage, updateMessage } = props

 return (
 ...
 )
}

const mapStateToProps = (state) => {
 return {
  dialogPage: state.dialogPage
 }
}

const mapDispatchToProps = (dispatch) => {
 return {
  addMessage: () => { dispatch(addMessageActionCreator()) },
  updateMessage: (e) => { dispatch(updateMessageActionCreator(e.target.value)) }
 }
}

const ConnectedDialogs = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default ConnectedDialogs
```

**In reducers must be used copies of state**

```
const dialogPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newState = { ...state }
      ...
      return newState
    case UPDATE_MESSAGE:
      newState = { ...state }
      newState.newMessage = action.value
      return newState
    case DELETE:
      newState = { ...state }
      newState.messages = newState.messages.filter( n => n.id != action.id )
      return newState
    default:
      return state
  }
}
```

## Thunk

BLL must work with DAL. UI can't work DAL. 
```
yarn add redux-thunk
```

### Where creating store need import applyMiddleware from redux and thunkMiddleware from redux-thunk.

```
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
```

In second parameter give applyMiddleware

```
const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware))
```

### In reducer create ThunkCreator
```
export const fetchTasksThunkCreator = () => {
  return (dispatch) => {
    dispatch(updateStatusInprogressActionCreator());
    API.getUsers().then(res => {
      res.data.error ? alert(res.data.error) : dispatch(updateDataActionCreator(res.data));
      res.data.error ? alert(res.data.error) : dispatch(updateStatusSuccessActionCreator());
    });
  }
}
```
* ThunkCreator return function, that need dispatch. 
* We can use more that one dispatch
* Can dispatch actions at thunks in thunk


### Now need dispatch thunk creator in component:
```
const mapDispatchToProps = dispatch => {
  return {
    fetchTask: () => {
      dispatch(fetchTasksThunkCreator())
    },
  };
};
```
And run this method:
```
  componentDidMount() {
    this.props.fetchTask();
  }
```




# Class component (statefull)

* used when need have local store.
* extends react Component
* can have constructor
```
constructor() {
}
```
* super() - will get parent (extended class) properties and execute parent class constructor.
```
constructor(){
  super();
}
```
* if not used constructor react will create clear basic constructor
* state can be created outside constructor
```
class App extends React.Component {
  state = {}
}

```
* method render() return like function component
* props available **this.props**
```
render(){
  const {label, important = false} = this.props
  ...
  return()
}
```

* class component return object - {}.render()
* functional component return JSX

* create method in class component. Method must work with data. 
```
class App extends React.Component {

  myMethod {

  }
}
```

* this context in class component
```
class App extends React.Component {
  myMethod {
    alert(this.myId)
  }
  myId = 15;
}
```

* given method in attributes will lost his this context.
```
<button onClick={this.myMethod} Click</button>
```
for fix need bind
```
<button onClick={this.myMethod.bind(this)} Click</button>
```
Better way is bind in constructor, than render. Constructor run only one time. And bind will create only one function with correct context. Render run after every change and every time will created new function (object) in memory.
```
constructor(){
  super();
  this.myMethod=this.myMethod.bind(this)
}
```
if method created with arrow function - context will be correct.
```
class App extends React.Component {
  myMethod =  () => {
    alert(this.myId)
  }
  myId = 15;
}
```

# JavaScript basics

* In JS is primitives and objects

Created 4 objects
```
let a = {
  dialogs: [1,2,3],
  messages: ['text1', 'text2'],
  current: {name: 'one', id: 5}
}
```

## Shadow copy - paviršutinė kopija.

* Using spread operator.
* Coped (created copy in memory) only primitives
* Coped link to memory. Physical object in memory still same, just one more line to same area.

```
let stateCopy = {...state}
```

## Deep object copy

Create deeper copy - using spread operators to every object:

```
let stateCopy = {
  ...state,
  dialogs: [...state.dialogs],
  messages: [...state.messages],
  currentDialog: {...state.currentDialog}
  }
```



[Library for create deep copy](https://github.com/immutable-js/immutable-js)

Function for recursive object copy (to JSON -> JSON to object):
```
const cloned = JSON.parse(JSON.stringify(original))
```

## onChange

In native JS onchange activated when element lost focus. In React JS after every click.

# API

API - Application Programming Interface

Server have entry point (endpoint). Browser send request to endpoint. In our situation every endpoint have unique url.

## Transmission have:

1. **URL** where will be send.
2. http-request type: **get** (for get data)/ **post** (for send data)
3. request payload - sending data
4. response data - returned data
5. http codes in status: **404** (not found) / **5XX** (server errors) / **3XX** (redirected), **2XX** (OK)

* **Get** request don't have payload. Only parameters in url - https://...**?id=1&page=3**

## RESP server API

* every endpoint have unique url

'GET-POST' way:
- "http://xx.com/api/users/get" - **get** type
- "http://xx.com/api/users/create" - **post** type
- "http://xx.com/api/users/update" - **post** type
- "http://xx.com/api/users/delete" - **post** type

'GET-POST-PUT-DELETE' (CRUD) way:

- "http://xx.com/api/users" - types **get/post/put/delete**

RESP API transmission have:
1. **URL** where will be send.
2. http-request type: **get** (for get data)/ **post** (for create data) /  **put** (for update data) /  **delete** (for delete data) / patch
3. request payload - sending data
4. response data - returned data
5. http codes in status: **404** (not found) / **5XX** (server errors) / **3XX** (redirected), **2XX** (OK)

**RESP** - one endpoint and different types

## API First

* first step - create API: documentation, specification, plans. 
* second step - created or generated frontend and backend.

[SWAGGER](https://swagger.io/blog/api-development/api-first-approach-with-swagger/)
[RAML](https://raml.org/)

# AXIOS

```
yarn add axios
```

## get in axios

```
axios
 .get("https://xx.com/users")
 .then(data => ....)
```
* axios.get() -> return promise

* result will come in first parameter. 
* good practice initial data request use in componentDidMount  

## async 

```
console.log('1')
axios
 .get("https://xx.com/users")
 .then(data => console.log('2') )
console.log('3')
```
result: 132, because axios.get async method. Came to event loop. 

## control status of transfer 

1. create status constants in reducer 

```
export const statuses = {
 NOT_INITIALIZED: "NOT_INITIALIZED",
 ERROR: "ERROR",
 INPROGRESS: "INPROGRESS",
 SUCCESS: "SUCCESS",
};
```

2. create reducer

* constant for actions
```
const UPDATE_STATUS_INPROGRESS = "CB/TABLE/UPDATE_STATUS_INPROGRESS";
const UPDATE_STATUS_SUCCESS = "CB/TABLE/UPDATE_STATUS_SUCCESS";
```

* action creators
```
const initialState = {
 status: statuses.NOT_INITIALIZED,
 data: []
};

export const updateStatusInprogressActionCreator = () => {
 return {
  type: UPDATE_STATUS_INPROGRESS,
 };
};
```

* reducer 

```
const userListPageReducer = (state = initialState, action) => {
 switch (action.type) {
  case UPDATE_STATUS_INPROGRESS:
   ...
   newStateS.status = statuses.INPROGRESS;
   return newStateS;
  case UPDATE_STATUS_SUCCESS:
   ...
   newStateSu.status = statuses.SUCCESS;
   return newStateSu;
  default:
   return state;
 }
};
```

* on load component

```
const UserList = (props) => {
  ...
  if (status === statuses.NOT_INITIALIZED) {
    setInprogress();
    axios.get("https://....com/api/users").then(res => {

      res.data.error ? alert(res.data.error) : setData(res.data)
      res.data.error ? alert(res.data.error) : setSuccess()
    });

  }
  ...
  const mapDispatchToProps = dispatch => {
  return {
    setInprogress: () => {
      dispatch(updateStatusInprogressActionCreator());
    },
    setSuccess: () => {
      dispatch(updateStatusSuccessActionCreator());
    },
    setData: val => {
      dispatch(updateDataActionCreator(val));
    }
  };
};
```

# VS Code

* ctrl + alt + -> - moving to different tab
* ctrl + space - activate advisor

# Chrome

[JSON view plugin for chrome](https://chrome.google.com/webstore/search/jsonview?h1=lt)

#Other

[Yarn](https://yarnpkg.com/en/)
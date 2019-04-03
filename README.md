# socnet

Social network for training purpose

## Links

01 [Уроки "React JS - путь самурая](https://www.youtube.com/watch?v=Zgd9IlbhDcU&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8) - Intro

02 [Уроки React JS (Зачем NodeJS на фронте)](https://www.youtube.com/watch?v=WN2LHq3yRwQ) - Intro NodeJS

03 [Уроки React JS (Установка NodeJS)](https://www.youtube.com/watch?v=AUi1JT4n8xA) - Install NodeJS

[NodeJS](https://nodejs.org/en/)

04 [Уроки React JS](https://www.youtube.com/watch?v=9Jk8SLMl3gI) - create-react-app

[create-react-app](https://github.com/facebook/create-react-app)

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

07 [Уроки React JS](https://www.youtube.com/watch?v=UMw_hbNMIAA) - commponent - it's function, that return JSX code.

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
Komponento 'iškvietimas':
```
<App />
```
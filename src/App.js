import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import './App.css';
/* import Header from './components/header/header.component' */
/* import HomePage from './pages/homepage/homepage.component' */
/* import ShopPage from './pages/shop/shop.component' */

const HomePage = (props) => {
  console.log(props)
  return (
    <div>
      <Link to='/topics'>Topics</Link>
      <h1>Home Page</h1>
    </div>
  )
}


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

const TopicsList = (props) => {
  console.log(props)  
  return(
    <div>
      <h1>Topic List Page</h1>
    </div>
  )
}

const TopicDetail = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Topic Detail Page: {props.match.params.topicId}</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      
        <Route exact path='/' component={HomePage}  />
        <Route exact path='/topics' component={TopicsList} />
        <Route path='/topics/:topicId' component={TopicDetail} />
      
    </div>
  );
}

export default App;

import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'; 

import Join from './components/Join/Join'; 
import Chat from './components/Chat/Chat'; 
import Hero from './components/Hero/Hero'; 

const App = () => (
    <Router> 
        <Route path="/" exact component={Hero} /> 
        <Route path="/chat" component={Chat} />
        <Route path="/join" component={Join} />
    </Router>
)

export default App; 
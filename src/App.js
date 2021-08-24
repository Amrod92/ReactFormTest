import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/UI/Narbar';
import Footer from './components/UI/Footer';
import Home from './components/Home';
import InsertData from './components/InsertData';
import Form from './components/Form';
import PageNotFound from './components/PageNotFound';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          {/* Homepage route */}
          <Route path='/' exact component={Home} />
          {/* Insert data route */}
          <Route path='/insertdata' exact component={InsertData} />
          {/* Insert data route */}
          <Route path='/insertdata/form' exact component={Form} />
          {/* 404 route */}
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

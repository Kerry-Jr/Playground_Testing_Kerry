import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShoppingList from './containers/ShoppingList';
import Cities from './containers/Cities';
import Layouts from './containers/Layouts';
import Contact from './components/Contact';
import PassGen from './containers/PassGen';

function App() {
  return (
    <div className='container bg-primary'>
      <div className='row'>
        <div className='col-10 offset-1'>
          <Router>
            {/* <Route exact path ='/' component={ShoppingList}/> */}
            <Route exact path ='/' render={() => <ShoppingList title="Shopping List" />}/>
            {/* <Route exact path = '/cities' component={Cities}/> */}
            <Route exact path = '/cities' render={() => <Cities title="City Name" />}/>
            <Route exact path = '/layouts' render={() => <Layouts title="layouts" />}/>
            <Route exact path = '/contact' render={() => <Contact title="contacts" />}/>
            <Route exact path = '/passgen' render={() => <PassGen title="PW Gen" />}/>
       
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;



//ask Musa if I would have to make another file for a seperate div.
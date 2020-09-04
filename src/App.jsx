import React from 'react';
import Header from './components/Header';
import Results from './components/Results';
import NominationsList from './components/NominationsList';
import UserNominations from './components/UserNominations';
import { 
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const App = () => {
  return(
    <div>
      <Header />
      <main>
        <Router>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/nominations-list'>Nominations List</Link>
          </nav>
          <Route exact path='/'>
            <Results />
            <UserNominations />
          </Route>
          <Route exact path='/nominations-list'>
            <NominationsList />
          </Route>
        </Router>
      </main>
    </div>
  )
}

export default App;
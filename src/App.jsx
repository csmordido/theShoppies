import React, { useState } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import NominationsList from './components/NominationsList';
import UserNominations from './components/UserNominations';
import Modal from './components/Modal';
import { 
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const App = () => {
  const [userNominations, setuserNominations] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  return(
    <div>
      <Header />
      <main>
        <Router>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/nominations-list'>Nominated Movies</Link>
          </nav>
          <Route exact path='/'>
            <Results 
              setuserNominations={setuserNominations}
              userNominations={userNominations}
              setIsConfirmed={setIsConfirmed}
            />
            <UserNominations 
              userNominations={userNominations}
              setuserNominations={setuserNominations}
              setIsConfirmed={setIsConfirmed}
            />
          </Route>
          <Route exact path='/nominations-list'>
            
              <NominationsList isConfirmed={isConfirmed} />
             
          </Route>
        </Router>
        {
          userNominations.length === 5
          ? <Modal />
          : null
        }
      </main>
    </div>
  )
}

export default App;
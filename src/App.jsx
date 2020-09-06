import React, { useState, useEffect } from 'react';
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
  const [nominationsList, setNominationsList] = useState([]);

  useEffect(() => {
      const nominations = localStorage.getItem('nominations');
      setNominationsList(JSON.parse(nominations));

      // window.addEventListener('storage',  (e) => {
      //   console.log(e, 'storage updated');
      // });

  }, []);

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
            <Results 
              setuserNominations={setuserNominations}
              userNominations={userNominations}
            />
            <UserNominations 
              userNominations={userNominations}
              setuserNominations={setuserNominations}
            />
          </Route>
          <Route exact path='/nominations-list'>
            <NominationsList nominationsList={nominationsList} />
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
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import NominationsList from './components/NominationsList';
import UserNominations from './components/UserNominations';
import Modal from './components/Modal';
import Footer from './components/Footer';
import { 
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './styles/nav.css';

const App = () => {
  const [userNominations, setuserNominations] = useState([]);
  const [nominationsList, setNominationsList] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    const nominations = localStorage.getItem('nominations');
    setNominationsList(JSON.parse(nominations));
  }, [isConfirmed]);

  return(
    <div>
      <Header />
      <main>
        <Router>
          <nav className='mainNav wrapper'>
            <Link to='/'>Home</Link>
            <Link to='/nominations-list'>Nominated Movies</Link>
          </nav>
          <Route exact path='/'>
            <section className='wrapper'>
              <Results 
                setuserNominations={setuserNominations}
                userNominations={userNominations}
                setIsConfirmed={setIsConfirmed}
                nominationsList={nominationsList}
              />
              <UserNominations 
                userNominations={userNominations}
                setuserNominations={setuserNominations}
                setIsConfirmed={setIsConfirmed}
              />
            </section>
          </Route>
          <Route exact path='/nominations-list'>
            <NominationsList 
              nominationsList={nominationsList}
            />
          </Route>
        </Router>
        {
          userNominations.length === 5
          ? <Modal />
          : null
        }
      </main>
      <Footer />
    </div>
  )
}

export default App;
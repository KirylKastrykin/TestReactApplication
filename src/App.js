import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import NewsPage from './components/News/NewsPage';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Footer from './components/Footer/Footer';
import NewsPageContainer from './components/News/NewsPageContainer';

function App(props) {

  const [isDarkTheme, setTheme] = useState(false);

  let onChangeTheme = () => {

    setTheme(!isDarkTheme);
  }

  let appItemsClass = isDarkTheme ? "app-wrapper-dark" : "app-wrapper"

  return (

    <div className={appItemsClass}> <Header />
    <Navbar />

    <div className='app-wrapper-content'>

      <Route path='/profile' render={() => <Profile />} />
      <Route path='/dialogs' render={() => <DialogsContainer />} />
      <Route path='/news' render={() => <NewsPageContainer />} />
      <Route path='/music' render={() => <Music />}/>
      <Route path='/settings' render={() => <Settings onChangeTheme={onChangeTheme} isDarkTheme={isDarkTheme}/>} />
      <Route path='/users' render={() => <UsersContainer />} />
    </div>

    <Footer />
  </div>

  );
}

export default App;

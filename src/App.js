import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {

  let myPerson = "Joel"

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" render={() => <ContactPage person={myPerson} />} />
      </Switch>
    </div>
  );
}

export default App;

import { useRef } from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import './scss/App.scss';

function App() {
  const descriptionRef = useRef(null)

  console.log(descriptionRef)
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
    </div>
  );
}

export default App;

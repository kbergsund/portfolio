import Tools from './Tools';
import About from './About';
import Work from './Work';
import Contact from './Contact';

const Main = () => {

  return(
    <main>
      <Tools />
      <About id='about'/>
      <Work id='work'/>
      <Contact id='contact'/>
    </main>
  )
}

export default Main;
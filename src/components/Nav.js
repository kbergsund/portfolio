import { scrollTo } from '../utils';
import Button from '@mui/material/Button';
import '../scss/Nav.scss';

const Nav = () => {
  const handleClick = (id) => {
    scrollTo(id)
    console.log(id)
  }

  return (
    <nav>
      <h1 id='home'>kb</h1>
      <section className='nav-buttons'>
        <Button variant="text" onClick={() => handleClick('home')}>Home</Button>
        <Button variant="text" onClick={() => handleClick('about')}>About</Button>
        <Button variant="text" onClick={() => handleClick('work')}>Work</Button>
        <Button variant="text" onClick={() => handleClick('contact')}>Contact</Button>
      </section>
    </nav>
  )
}

export default Nav;
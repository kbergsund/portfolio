import Button from '@mui/material/Button';
import { scrollTo } from '../utils';
import '../scss/Nav.scss';

const Nav = () => {

  const handleClick = (id) => {
    scrollTo(id)
    console.log(id)
  }

  return (
    <nav>
      <button className='kb' id='home' onClick={() => handleClick('home')}>kb</button>
      <section className='nav-buttons'>
        <Button variant='text' onClick={() => handleClick('home')}>Home</Button>
        <Button variant='text' color='primary' onClick={() => handleClick('about')}>About</Button>
        <Button variant='text' color='primary' onClick={() => handleClick('work')}>Work</Button>
        <Button variant='text' color='primary' onClick={() => handleClick('contact')}>Contact</Button>
      </section>
    </nav>
  )
}

export default Nav;
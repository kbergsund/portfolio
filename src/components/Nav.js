import Button from '@mui/material/Button';
import '../scss/Nav.scss';

const Nav = () => {
  return(
    <nav>
      <h1>kb</h1>
      <section className='nav-buttons'>
        <Button variant="text">About</Button>
        <Button variant="text">Work</Button>
        <Button variant="text">Contact</Button>
      </section>
    </nav>
  )
}

export default Nav;
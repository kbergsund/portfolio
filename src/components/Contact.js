import Button from '@mui/material/Button';
import '../scss/Contact.scss';

const Contact = ({ id }) => {
  return (
    <footer id={id}>
      <div className='contact-color-box'>
        <h3>Contact</h3>
        <p className='email'>k.bergsund@gmail.com</p>
        <div className='contact-buttons'>
          <Button variant='outlined' color='tertiary'>Resume</Button>
          <Button variant='outlined' color='tertiary'>Email</Button>
          <Button variant='outlined' color='tertiary'>LinkedIn</Button>
          <Button variant='outlined' color='tertiary'>Github</Button>
        </div>
        <p>Designed and built by Kyra Bergsund.</p>
      </div>
    </footer>
  )
}

export default Contact;
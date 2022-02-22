import Button from '@mui/material/Button';
import '../scss/Contact.scss';

const Contact = ({ id }) => {
  return (
    <footer id={id}>
      <div className='contact-color-box'>
        <h3>Contact</h3>
        <h4>k.bergsund@gmail.com</h4>
        <Button variant='contained'>Resume</Button>
        <Button variant='contained'>Email</Button>
        <Button variant='contained'>LinkedIn</Button>
        <Button variant='contained'>Github</Button>
        <p>Designed and built by Kyra Bergsund.</p>
      </div>
    </footer>
  )
}

export default Contact;
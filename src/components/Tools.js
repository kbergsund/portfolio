import { FaReact, FaHtml5, FaNpm, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiCypress} from 'react-icons/si';
import '../scss/Tools.scss';

const Tools = () => {
  return (
    <section className='tools'>
      <h2>I’m a detail-oriented software engineer.</h2>
      <p className='short-bio'>Interested in products that benefit communities and bring people closer to what they love. Hoping to broaden access to human connection and outdoor recreation as a means of inspiring diverse audiences to care more for each other and the environment.</p>
      <h3>Top Tools:</h3>
        <section className='tool-circles'>
        <div className='tool-icon-background'><FaReact color='white' size='40'/></div>
        <div className='tool-icon-background'><SiJavascript color='white' size='35'/></div>
        <div className='tool-icon-background'><FaHtml5 color='white' size='40'/></div>
        <div className='tool-icon-background'><SiCss3 color='white' size='35'/></div>
        <div className='tool-icon-background'><SiCypress color='white' size='40'/></div>
        <div className='tool-icon-background'><FaNpm color='white' size='40'/></div>
        <div className='tool-icon-background'><FaNodeJs color='white' size='40'/></div>
      </section>
      <p>See complete stack on my Github</p>
    </section>
  )
}

export default Tools;
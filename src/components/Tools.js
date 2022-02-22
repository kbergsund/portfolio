import { useState } from 'react';
import Button from '@mui/material/Button';
import { FaReact, FaHtml5, FaNpm, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiCypress } from 'react-icons/si';
import '../scss/Tools.scss';

const Tools = () => {
  const [isShown, setIsShown] = useState(false)
  const [reactShown, setReactShown] = useState(false)
  const [jsShown, setJsShown] = useState(false)
  const [htmlShown, setHtmlShown] = useState(false)
  const [cssShown, setCssShown] = useState(false)
  const [cyShown, setCyShown] = useState(false)
  const [npmShown, setNpmShown] = useState(false)
  const [nodeShown, setNodeShown] = useState(false)

  return (
    <section className='tools'>
      <h2>I’m a detail-oriented software engineer.</h2>
      <p className='short-bio'>Interested in products that benefit communities and bring people closer to what they love. Hoping to broaden access to self-expression, human connection and outdoor recreation as a means of inspiring diverse audiences to care more for each other and the environment.</p>
      <h3>Top Tools</h3>
      <section className='tool-circle-container'>
        <div className='tool-circle'>
          <div onMouseEnter={() => setReactShown(true)}
            onMouseLeave={() => setReactShown(false)} className='tool-icon-background'><FaReact color='white' size='40' /></div>
          {reactShown && <p>React</p>}
        </div>
        <div className='tool-circle'>
          <div onMouseEnter={() => setJsShown(true)}
            onMouseLeave={() => setJsShown(false)} className='tool-icon-background'><SiJavascript color='white' size='35' /></div>
          {jsShown && <p>JavaScript</p>}
        </div>
        <div className='tool-circle'>
          <div onMouseEnter={() => setHtmlShown(true)}
            onMouseLeave={() => setHtmlShown(false)} className='tool-icon-background'><FaHtml5 color='white' size='40' /></div>
          {htmlShown && <p>HTML5</p>}
        </div>
        <div className='tool-circle'>
          <div onMouseEnter={() => setCssShown(true)}
            onMouseLeave={() => setCssShown(false)} className='tool-icon-background'><SiCss3 color='white' size='35' /></div>
          {cssShown && <p>CSS3</p>}
        </div>
        <div className='tool-circle'>
          <div onMouseEnter={() => setCyShown(true)}
            onMouseLeave={() => setCyShown(false)} className='tool-icon-background'><SiCypress color='white' size='40' /></div>
          {cyShown && <p>Cypress</p>}
        </div>
        <div className='tool-circle'>
          <div onMouseEnter={() => setNpmShown(true)}
            onMouseLeave={() => setNpmShown(false)} className='tool-icon-background'><FaNpm color='white' size='40' /></div>
          {npmShown && <p>NPM</p>}
        </div>
        <div className='tool-circle'>
          <div onMouseEnter={() => setNodeShown(true)}
            onMouseLeave={() => setNodeShown(false)} className='tool-icon-background'><FaNodeJs color='white' size='40' /></div>
          {nodeShown && <p>Node.js</p>}
        </div>
      </section>
      <p className='resume-github-msg'>See complete stack on my <br /><Button variant='contained' color='secondary'>resume</Button>  or  <Button variant='contained' color='secondary'>Github</Button></p>
      {/* <div className='line'></div> */}
    </section>
  )
}

export default Tools;
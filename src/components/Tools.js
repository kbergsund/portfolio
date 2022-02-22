import { useState } from 'react';
import { FaReact, FaHtml5, FaNpm, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiCypress } from 'react-icons/si';
import '../scss/Tools.scss';

const Tools = () => {
  const [isShown, setIsShown] = useState(false)

  return (
    <section className='tools'>
      <h2>I’m a detail-oriented software engineer.</h2>
      <p className='short-bio'>Interested in products that benefit communities and bring people closer to what they love. Hoping to broaden access to self-expression, human connection and outdoor recreation as a means of inspiring diverse audiences to care more for each other and the environment.</p>
      <h3>Top Tools</h3>
      <section className='tool-circle-container'>
        <div className='tool-circle'>
          <div onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} className='tool-icon-background'><FaReact color='white' size='40' /></div>
          {isShown && <p>React</p>}
        </div>
        <div className='tool-circle'>
          <div onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} className='tool-icon-background'><SiJavascript color='white' size='35' /></div>
          {isShown && <p>JavaScript</p>}
        </div>
        <div className='tool-circle'>
          <div onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} className='tool-icon-background'><FaHtml5 color='white' size='40' /></div>
          {isShown && <p>HTML5</p>}
        </div>
        <div className='tool-circle'>
          <div onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} className='tool-icon-background'><SiCss3 color='white' size='35' /></div>
          {isShown && <p>CSS3</p>}
        </div>
        <div className='tool-circle'>
          <div onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} className='tool-icon-background'><SiCypress color='white' size='40' /></div>
          {isShown && <p>Cypress</p>}
        </div>
        <div className='tool-circle'>
          <div onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} className='tool-icon-background'><FaNpm color='white' size='40' /></div>
          {isShown && <p>NPM</p>}
        </div>
        <div className='tool-circle'>
          <div onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} className='tool-icon-background'><FaNodeJs color='white' size='40' /></div>
          {isShown && <p>Node.js</p>}
        </div>
      </section>
      <p>See complete stack on my resume or <a href='https://github.com/kbergsund/'>Github</a></p>
      {/* <div className='line'></div> */}
    </section>
  )
}

export default Tools;
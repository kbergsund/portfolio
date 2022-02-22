import Button from '@mui/material/Button';
import puzzlrs from '../assets/puzzlrs.png';
import whereto from '../assets/whereto.png';
import gamenight from '../assets/gamenight.png';
import '../scss/Work.scss';

const Work = ({ id }) => {
  return (
    <section className='work' id={id}>
      <div className='line'></div>
      <h3>Featured Work</h3>
      <div className='project-container'>
        <article className='project'>
          <a href='https://puzzlrs.surge.sh/'><img src={puzzlrs} alt='puzzlrs web app homepage' /></a>
          <div className='project-info'>
            <h4>puzzlrs</h4>
            <a className='repo-link' href='https://github.com/Puzzle-Capstone/puzzlrs-ui'>Github</a>
            <p className='project-bio'>Puzzlrs allows people who love puzzles to trade amongst each other. We all related to having multiple puzzles we'd done only once gathering dust in our homes while we were out buying new every time. We set out to provide an alternative, more sustainable solution. It's a win-win: everyone gets to enjoy doing new puzzles while generating less waste. This application was built from scratch in 2 weeks by a team of 3 front-end and 2 back-end engineers.</p>
          </div>
        </article>
        <article className='project'>
          <a href='https://where-to-next.surge.sh/'><img src={whereto} alt='where to next? web app homepage' /></a>
          <div className='project-info'>
            <h4>whereto</h4>
            <a className='repo-link' href='https://github.com/kbergsund/where-to'>Github</a>
            <p className='project-bio'>Where to Next? is for planning outdoor trips. When wanderlust hits but you don't know where to go. Quickly and seamlessly zero in on top California destinations that offer your favorite activities. Designed, built, tested, and deployed over the course of 4 days with React, React Router, Javascript, Cypress, HTML5, Sass, and npm.</p>
          </div>
        </article>
        <article className='project'>
          <a href='https://ccollums.github.io/gamenight/'><img src={gamenight} alt='gamenight web app homepage' /></a>
          <div className='project-info'>
            <h4>gamenight</h4>
            <a className='repo-link' href='https://github.com/ccollums/gamenight'>Github</a>
            <p className='project-bio'>gamenight is a simple interface that keeps track of the competition, friendly or not, among friends across multiple game nights. Built with 2 other front-end engineers. The goal was to envision and build a complex React web app from scratch while self-teaching a new concept, global state management using React's Context API, in the span of one week.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Work;
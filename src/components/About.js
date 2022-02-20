import '../scss/About.scss';

const About = ({ id }) => {
  return (
    <section className='about' id={id}>
      {/* <div className='line'></div> */}
      <div className='about-color-box'>
        <h3 className='about-header'>About</h3>
        <p className='long-bio'>I started my career in music festival production because I am passionate about facilitating meaningful experiences for broad audiences. I love being part of a team that fabricates joy. Now, as a software engineer, I continue that work by actively contributing to the creation of impactful products. I’m focused on the intersections of impactful immersive tech, human connection, and sustainability. Specializing in front-end engineering with experience in React, JavaScript, HTML, and CSS/Sass, I bring my eagerness to never stop learning, my enjoyment of solving problems in innovative ways, and my strengths in methodical organization and proactive communication to every team.
        <br /><br />
        As an outdoor enthusiast, I am excited by the potential for software products to bring people together and to increase access to outdoor education, recreation, and sustainable living. I believe it is an avenue that will in turn inspire people to care more for each other and the world we live in.</p>
      </div>
    </section>
  )
}

export default About;
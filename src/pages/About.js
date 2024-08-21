import '../css/pageStyles/About.css';

function About() {
  return (
    <>
    <div className="fake-header-box"></div>
    
    <section className="about-banner">
      <section className="about-banner-content">
        <div>
          <h1>I'm Matthew Scavone</h1>
          <img src={require("../images/matthewscavone.jpg")} alt="Image of me, Matthew Scavone."></img>
        </div>
        <div className="hr"></div>
        <p>ErrorNotFound is my development company</p>
      </section>
    </section>
    <main className="about-main">
        <section className="about-background">
          <h2>Background</h2>
          <div className="p-holder">
            <p>I'm a solo indie game developer based in Sydney, NSW. I am working on completing my Bachelor's Degree in
              Computer Science with an expected finish at the end of 2024. Upon completion, I aim to move on to a Masters 
              Degree in Software Engineering in 2025. I have studied both in Australia and abroad in the United States of America 
              at the University of North Carolina Wilmington<sup><a href="https://uncw.edu/" target="_blank">UNCW</a></sup>.
            </p>
            <p>My passion for video games has lead me to spend my free time honing my skills as a developer through
              the medium of Game Development. Seeing the results of my work as I build my games is highly motivating for me
              not only as it relates to Game Development but in all areas as I become more excited with reaching, seeing 
              and using the end product of whatever it is that I am working on.
            </p>
            <p>I am reachable at <a href="mailto:email@email.com">email@email.com</a> for any inquiries.
            </p>
          </div>
        </section>

        <section className="about-skills">
          <h2>Skills</h2>
          <div className="p-holder">
            <p>I use <span>Unity</span> and <span>C#</span> for most of my Game Development.</p>
            <p>I use <span>Aseprite</span> for my 2D sprites & <span>Blender</span> for 3D modelling.</p>
            <p>I built this website using the <span>React</span> framework.</p>
          </div>
        </section>

        <section className="about-featured-project">
          <h2>Current Project</h2>
          <a href='https://store.steampowered.com/' target='_blank' rel="noreferrer"><img alt='Banner of the teams active project.' src={require("../images/SoulSwapBanner.png")}/></a>
        </section>
    </main>
    </>
  );
}



export default About;


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook  } from '@fortawesome/free-brands-svg-icons'
import { LightSpeed, Bounce } from 'react-reveal';
import './css/blog.css'
import Blog from './Blog';




const Home = () => {

    return ( 
        <section className='home__introduction' id='home'>
              <div className='home__inside__container'>
                <LightSpeed left>
                  <h1 className='hello'>Hello.</h1>
                </LightSpeed>  
                <LightSpeed left delay={250}>
                  <h2 className='myName'>      
                    I'm <span className='name'>Reydel Ocon</span>.
                  </h2>
                  </LightSpeed> 
               <LightSpeed left delay={350}>
                <p className='description'>
                  I like <span className='important__text'>building stuff</span>, writing <span className='important__text'>blog posts</span>, contributing to
                  <span className='important__text'> open source</span>, watching <span className='important__text'>anime</span> and reading<span className='important__text'> books</span>.

                  <br />
                  <br />

                  I love working with <span className='important__text'>React</span>, <span className='important__text'>TypeScript</span>, <span className='important__text'>Tailwind CSS</span> and <span className='important__text'>SASS</span>.

                  <br />

                  I do designing on <span className='important__text'>Figma</span>.

                  <br />
     
                  I'm scared of <span className='important__text'>dogs</span> but I love <span className='important__text'>cats</span>.

                  <br />

                  I stored my projects on <span className='important__text'>
                    <a href="https://github.com/reydelshit" 
                    title="Github"
                    target="_blank"
                    rel='noreferrer'>Github
                    </a></span> so if you're interested go check it
                  <br />
                  <br />

                  As of now, I have watched <span className='important__text'>40+ of animes</span> and my favorite is <span className='important__text'>One Piece</span>.

                </p>
                </LightSpeed>
                <div class='icons__yow'>
                <Bounce top>
                    <a href="https://github.com/reydelshit" 
                    className='soc__icons'
                    title="Github"
                    target="_blank"
                    rel='noreferrer'>
                      <FontAwesomeIcon icon={faGithub } />
                    </a>
                  <a
                    href="https://facebook.com/reydelshit"
                    className='soc__icons'
                    title="Facebook"
                    target="_blank"
                    rel='noreferrer'
                    >
                        <FontAwesomeIcon icon={ faFacebook } />
                    </a>  
                    </Bounce>
                </div>
              </div>         
              <Blog/>
        </section>
     );
}
 
export default Home;
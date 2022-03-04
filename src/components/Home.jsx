
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook  } from '@fortawesome/free-brands-svg-icons'
import { Bounce } from 'react-reveal';
import '../index.css';
import Blog from './Blog';




const Home = () => {

    return ( 
        <section className='flex flex-col gap-24 px-5 md:px-20 font-benPoppins md:flex-row bg-background'>
              <div className='flex justify-center h-85 flex-col md:w-5/12 '>
                <Bounce>
                  <h1 className='text-5xl font-bold mb-5'>Hello.</h1>
                </Bounce>  
                <Bounce>
                  <h2 className='text-4xl font-bold mb-4'>      
                    I'm <span className='important'>Reydel Ocon</span>.
                  </h2>
                  </Bounce> 
               <Bounce>
                <p className=''>
                  I like <span className='important'>building stuff</span>, writing <span className='important'>blog posts</span>, contributing to
                  <span className='important'> open source</span>(not really), watching <span className='important'>anime</span> and reading<span className='important'> books</span>.

                  <br />
                  <br />

                  I love working with <span className='important'>React</span>, <span className='important'>Vue</span>, <span className='important'>Node js</span>, <span className='important'>Express</span>, <span className='important'>TypeScript</span>, <span className='important'>Tailwind CSS</span> and <span className='important'>SASS</span>.

       
     
                  I'm scared of <span className='important'>dogs</span> but I love <span className='important'>cats</span>.

                  <br />

                  I stored my projects on <span className='important'>
                    <a href="https://github.com/reydelshit" 
                    title="Github"
                    target="_blank"
                    rel='noreferrer'>Github
                    </a></span> so if you're interested go check it
                  <br />
                  <br />

                  As of now, I have watched <span className='important'>40+ of animes</span> and my favorite is <span className='important'>One Piece</span>.

                </p>
                </Bounce>
                <div class='flex justify-between text-4xl w-20 mt-10'>
                <Bounce top>
                    <a href="https://github.com/reydelshit" 
                    title="Github"
                    target="_blank"
                    rel='noreferrer'
                    className='hover:text-primary'>
                      <FontAwesomeIcon icon={faGithub}/>
                    </a>
                  <a
                    href="https://facebook.com/reydelshit"
                    title="Facebook"
                    target="_blank"
                    rel='noreferrer'
                    className='hover:text-primary'
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

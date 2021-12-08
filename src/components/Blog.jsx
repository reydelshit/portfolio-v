// import './css/blog.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../index.css';
import { TailSpin } from 'svg-loaders-react'




const query = `
    {
      user(username: "reydelshit") {
        publication {
          posts{
            slug
            title
            brief
            dateAdded
          }
        }
      }
    }
  `;
    // const [ blog, setBlog ] = useState([])

    // useEffect(() => {
    //   async function fetchData() {
    //   let currentFetch = 'https://reydelshit.github.io/portfolio-admin-panel/portfolio.json'
    //   const res = await fetch(currentFetch)
    //   const blogPost = await res.json()
  
    //   setBlog(blogPost.posts)
    //  }
    //   fetchData()
    //   }, []);

class Blog extends React.Component {

  state = {
        posts: [],
        loading: true
  }
  componentDidMount() {
    this.fetchPosts();
  }
fetchPosts = async () => {
  const response = await fetch('https://api.hashnode.com', {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
  })
  const ApiResponse = await response.json();

  // console.log(ApiResponse.data.user.publication.posts);
  this.setState({ posts: ApiResponse.data.user.publication.posts, loading: false });


};


    render() {
      if (this.state.loading) return <div className="flex w-9/12 items-center justify-center h-5/6"><TailSpin trokeOpacity=".125" /></div>;
      return(
        <div className='flex flex-col justify-center h-full md:w-9/12 md:px-4'>
            <div className='flex justify-between mb-8'>
              <h2 className='font-medium text-sm'>{this.state.posts.length} POSTS <FontAwesomeIcon  className='transform rotate-12' icon={ faWifi }/></h2>
              <a href='https://github.com/reydelshit'
                className='text-xs hover:text-primary'
                title="Github"
                target="_blank"
                rel='noreferrer'
                >View the site's code   <FontAwesomeIcon icon={ faGithub } className='transform rotate-20'/>
              </a>
            </div>
           <div className=''>
            {this.state.posts.map((post, index) => <div>
              <span className='text-sm font-extralight'>{new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit"
             }).format(new Date(post.dateAdded))}</span>
              <a key={index} href={`https://reydelp.hashnode.dev/${post.slug}`} 
              className='block text-lg font-bold hover:text-primary' >
              {post.title}
              </a>
              <p className='mb-5 text-sm leading-6'>{post.brief.slice(0, 200)}</p>
              </div>
              )}
           </div>        
        </div>
      )
        
    };
}
 
export default Blog;

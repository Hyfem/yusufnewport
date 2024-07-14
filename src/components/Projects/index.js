import './index.css'
import Ecommerce from '../../assets/images/ECOMMERS.jpeg';
import Spaceaire from '../../assets/images/SPACEAIR.jpeg';
import Kitchen from '../../assets/images/KITCHEN.jpeg';

const Projects = () =>{
    return (
        <div className='container'>

            <div className='ecommerce' >
                <h1 className='intro'>
                    RESPONSIVE PROJECTS
                </h1>

                <div className='box'>
                <h2>
                    FULL STACK
                </h2>
                
                
                  <div className='image-container'>
                    <img src={Spaceaire } alt='/' />

                    </div>                  
                 <p>
                    This project was made for commercial purpose 
                    i and my friend who is a backend specialist
                     came up with the idea you can review by 
                     clicking the link bellow
                </p>
                <a 
                       target='_blank'
                       rel='noreferrer' 
                      href='https://git-testing-1.onrender.com'
                    >
                        <button>Review</button>
                    </a>
                </div>
            <div className='box'>
                  <h2>SIMPLE PAGE</h2>
                  <div className='image-container'>
                   <img src={Kitchen} alt='/' />

                </div>       

                    
                   <p>
                        This is a simple website that showcase
                         add to cart
                         it was built 
                         to showcase my strength in HTML CSS and JS 
                    </p>
                    <a 
                       target='_blank'
                       rel='noreferrer' 
                      href='https://spaceair.netlify.app'
                    >
                        <button>Review</button>
                    </a>     
                </div>
                <div className='box'>
                    <h2>SPACE AIR</h2>
                    <div className='image-container'>
                     <img src={Ecommerce} alt='/' />

                    </div>                 
                    <p>
                        I actually came up with the idea
                     of this frontend but when i
                      look into what the Api wil
                       cost i had to step down, Its 
                       a page for booking flight and
                        hotels
                    </p>
                    <a 
                       target='_blank'
                       rel='noreferrer' 
                      href='https://spaceair.netlify.app'
                    >
                        <button>Review</button>
                    </a>

                </div>

            </div>
            

            
        </div>
    )
}

export default Projects;
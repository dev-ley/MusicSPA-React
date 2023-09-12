import { Link } from 'react-router-dom';
import './Simo.css'

function Simo () {
    return(
     
      <div className='conteiner'> 
            <div className='box'>
              <h1>Feel the music</h1>
              <p>Stream over 10 million songs with one click</p>
              <Link className='link' to='/Signin'>Join Now</Link>
            </div>
 
       </div>
     
    )
}

export default Simo;
import { Link } from 'react-router-dom';
import './Simo.css'

function Simo () {
    return(
     
      <div className='conteiner__simo'> 
            <div className='box__simo'>
              <h1>Feel the music</h1>
              <p>Stream over 10 million songs with one click</p>
              <Link className='link__simo' to='/Signin'>Join Now</Link>
            </div>
       </div>
     
    )
}

export default Simo;
import './Discover.css'
import img2 from './img2.png'

function Discover () {
    return(
    
    <div className="conteiner_discover">
        <div className='box_discover'>
          <h1>Discover new music</h1>
          <div className='botoes_discover'>
            <a href='#'>Charts</a>
            <a href='#'>Songs</a>
            <a href='#'>Artists</a>
          </div>
          <p>By joing you can benefit by listening to the latest albums released</p>
        </div>
        <div className='box2_discover'>
          <img src={img2}></img>
        </div>
   </div>    )
}

export default Discover;
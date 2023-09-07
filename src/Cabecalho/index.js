
import './Cabecalho.css'
import logo from './logo.png'


function Cabecalho() {
    return (
        <header className="cabecalho">
            <nav className="nav">

                <img className='img' src={logo}></img>
                <a href="/">Simo</a>
                <a href="/1">Discover</a>
                <a href="/2">Join</a>
                <a href="/3">Sign In</a>
            </nav>
        </header>
    )
}

export default Cabecalho;
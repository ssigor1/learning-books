import logo from '../../images/logo.svg';
import logo2 from '../../images/perfil.svg';
import './style.css'

function Logo() {
    return (
        <div className="logo">
            <img src={logo2}
             alt='logo'
              className='logo-img'></img>
            <p><strong>Learning</strong> Books</p>
        </div>
    )
}

export default Logo
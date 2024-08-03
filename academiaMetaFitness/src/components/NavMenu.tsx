import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../css/NavMenu.css';

function NavMenu() {
    return (
        <nav className="nav-menu">
            <div className="img-holder">
                <a href=""><img src="src\img\logo-meta-fitness.jpg" alt="logo" /></a>
            </div>
            <ul className='nav-list'>
                <li className='nav-item'><a href="#" className='nav-link'>Quem Somos</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>Nossos Planos</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>Turmas e Horários</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>Fale Conosco</a></li>
            </ul>
            <ul className='social-media'>
                <li className='social-item'><a href=""><FaWhatsapp size={(25)}/></a></li>
                <li className='social-item'><a href="https://www.instagram.com/metafitness_academia_marileia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><FaInstagram size={(25)}/></a></li>
                <li className='social-item'><a href="https://www.facebook.com/meta.riodasostras" target="_blank"><FaFacebook size={(25)}/></a></li>
            </ul>
        </nav>
    )
}

export default NavMenu;
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome,faUser,faL,faG,faY} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoS} alt="logo" />
      <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
      <NavLink exact='true' activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a 
          target='_blank' 
          rel='noreferrer' 
          href='https://www.linkedin.com/in/angel-mazulu-b68645265/'>
          <FontAwesomeIcon icon={faL} color="#4d4d4e"/>
        </a>
      </li>

      <li>
        <a 
          target='_blank' 
          rel='noreferrer' 
          href='https://github.com/ThandekaSinqobileAngel?tab=repositories'>
          <FontAwesomeIcon icon={faG} color="#4d4d4e"/>
        </a>
      </li>
      <li>
        <a 
          target='_blank' 
          rel='noreferrer' 
          href='https://www.youtube.com/watch?v=bmpI252DmiI&list=PPSV'>
          <FontAwesomeIcon icon={faY} color="#4d4d4e"/>
        </a>
      </li>
    </ul>
  </div>
)

export default  Sidebar;
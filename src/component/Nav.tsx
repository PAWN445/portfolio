import amImage from '../assets/am-png.png';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav id="nav" className="flex items-center justify-between p-4 border-white/5 sticky top-0 z-50">
      <div className='pl-6'>
        <img className='w-20 h-20' src={amImage} alt="logo here" />
      </div>
      <div className="nav-links flex gap-6 pr-6" id="nav-links">
        <Link to="/" className='hover:text-gray-400'>Home</Link>
        <Link to="/contact" className='hover:text-gray-400'>Contact Us</Link>
        <Link to="/projects" className='hover:text-gray-400'>Projects</Link>
      </div>
    </nav>
  );
}

export default Nav;
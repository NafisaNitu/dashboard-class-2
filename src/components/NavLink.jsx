import { Link } from 'react-router'
import { DynamicIcon } from 'lucide-react/dynamic';


const NavLink = ({name, path, icon, color}) => {
  return (
        <li className='flex gap-4 items-center'>
            <DynamicIcon name={icon} color={color} size={20} />                
            <Link to={path}>{name}</Link>
        </li>
  );
};

export default NavLink
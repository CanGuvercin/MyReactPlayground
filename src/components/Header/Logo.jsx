import { Link } from 'react-router-dom'; 
import miniLogo from '../../assets/MicroLogo.png';

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={miniLogo}/>
      </Link>
    </div>
  );
}

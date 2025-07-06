import { Link } from 'react-router-dom'; // varsa

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        🛍️ <strong>ShopZone</strong>
      </Link>
    </div>
  );
}

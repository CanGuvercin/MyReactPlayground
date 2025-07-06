export default function LoggedInMenu() {
  return (
    <div className="user-menu">
      <span>👤 John Doe ▼</span>
      {/* Bu dropdown hover veya tıklamayla açılabilir */}
      <ul className="dropdown">
        <li>My Cart</li>
        <li>My Orders</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

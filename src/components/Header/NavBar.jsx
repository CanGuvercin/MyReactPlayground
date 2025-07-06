export default function NavBar() {
  const categories = ['Electronics', 'Clothing', 'Books', 'Home'];

  return (
    <nav className="nav-bar">
      <ul>
        {categories.map(category => (
          <li key={category}>
            {category}
            {/* burada ileride dropdown eklersin */}
          </li>
        ))}
      </ul>
    </nav>
  );
}

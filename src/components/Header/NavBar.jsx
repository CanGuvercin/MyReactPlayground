export default function NavBar() {
  const categories = ['Electronics', 'Clothing', 'Books', 'Home'];

  const Toolbar = () => <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem' }}><button>Back</button><h1>Title</h1><button>Menu</button></div>;


  return (
    <nav className="nav-bar">
      <ul>
        {categories.map(category => (
          <li key={category}>
            {category}
            {/* burada ileride dropdown eklersin */}
            {Toolbar}
          </li>
        ))}
      </ul>
    </nav>
  );
}

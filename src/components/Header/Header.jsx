import Logo from './Logo';
import NavBar from './NavBar';
import LoggedInMenu from './AuthStatus/LoggedInMenu';
import LoggedOutMenu from './AuthStatus/LoggedOutMenu';
import { useState } from 'react';

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // şimdilik sahte

  return (
    <header className="header">
      <div className="left-section">
        <Logo />
      </div>
      <div className="center-section">
        <NavBar />
      </div>
      <div className="right-section">
        {isAuthenticated ? <LoggedInMenu /> : <LoggedOutMenu />}
      </div>
    </header>
  );
}

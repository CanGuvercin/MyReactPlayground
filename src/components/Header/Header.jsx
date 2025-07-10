import Logo from './Logo';
import NavBar from './NavBar';
import LoggedInMenu from './AuthStatus/LoggedInMenu';
import LoggedOutMenu from './AuthStatus/LoggedOutMenu';
import { useState } from 'react';

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // şimdilik sahte


  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div className="flex items-center gap-4 flex-shrink-0">
          <Logo className="ml-0" />
        </div>
        <div className="flex items-center gap-4 flex-1">
          {isAuthenticated ? <LoggedInMenu /> : <LoggedOutMenu />}
        </div>
        <div></div> {/* Sağ taraf şimdilik boş */}
      </header>
    </>
  );
}

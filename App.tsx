
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X,
  Home,
  Users,
  LayoutGrid,
  Library,
  Sword,
  Book,
  Search,
  Settings,
  HelpCircle
} from 'lucide-react';
import HomePage from './pages/HomePage';
import WikiPage from './pages/WikiPage';
import PiecesPage from './pages/PiecesPage';
import OpeningsPage from './pages/OpeningsPage';
import HistoryPage from './pages/HistoryPage';
import PlayersPage from './pages/PlayersPage';
import ResourcesPage from './pages/ResourcesPage';
import TermsPage from './pages/TermsPage';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="w-full min-h-screen"
  >
    {children}
  </motion.div>
);

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Play', path: '/wiki', icon: Sword },
    { name: 'Puzzles', path: '/terms', icon: LayoutGrid },
    { name: 'Learn', path: '/openings', icon: Book },
    { name: 'Encyclopedia', path: '/pieces', icon: Library },
    { name: 'Players', path: '/players', icon: Users },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 lg:w-44 bg-[#262421] flex flex-col items-center py-4 z-50 border-r border-black/20">
      <Link to="/" className="mb-8 p-2">
        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-transparent flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-[#81b64c]">
             <path d="M50 10 L30 40 L40 40 L40 70 L25 80 L25 90 L75 90 L75 80 L60 70 L60 40 L70 40 Z" />
          </svg>
        </div>
      </Link>

      <nav className="flex-grow flex flex-col space-y-2 w-full px-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col lg:flex-row items-center lg:space-x-4 p-3 rounded-md transition-all group ${
              location.pathname === item.path 
                ? 'bg-[#312e2b] text-white shadow-inner' 
                : 'text-[#989795] hover:bg-[#2b2926] hover:text-white'
            }`}
          >
            <item.icon size={22} className={location.pathname === item.path ? 'text-[#81b64c]' : 'group-hover:text-[#81b64c]'} />
            <span className="text-[10px] lg:text-sm font-bold mt-1 lg:mt-0">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto flex flex-col space-y-4 w-full px-2 mb-4">
        <button className="flex flex-col lg:flex-row items-center lg:space-x-4 p-3 text-[#989795] hover:text-white transition-colors">
          <Settings size={20} />
          <span className="hidden lg:block text-sm font-bold">Settings</span>
        </button>
        <button className="flex flex-col lg:flex-row items-center lg:space-x-4 p-3 text-[#989795] hover:text-white transition-colors">
          <HelpCircle size={20} />
          <span className="hidden lg:block text-sm font-bold">Help</span>
        </button>
      </div>
    </aside>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Wiki', path: '/wiki', icon: Sword },
    { name: 'Terms', path: '/terms', icon: LayoutGrid },
    { name: 'Openings', path: '/openings', icon: Book },
    { name: 'Pieces', path: '/pieces', icon: Library },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#262421] border-t border-white/5 flex justify-around p-2 z-[60]">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
            location.pathname === item.path ? 'text-[#81b64c]' : 'text-[#989795]'
          }`}
        >
          <item.icon size={20} />
          <span className="text-[10px] font-bold mt-1">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/wiki" element={<PageWrapper><WikiPage /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper><TermsPage /></PageWrapper>} />
        <Route path="/openings" element={<PageWrapper><OpeningsPage /></PageWrapper>} />
        <Route path="/pieces" element={<PageWrapper><PiecesPage /></PageWrapper>} />
        <Route path="/history" element={<PageWrapper><HistoryPage /></PageWrapper>} />
        <Route path="/players" element={<PageWrapper><PlayersPage /></PageWrapper>} />
        <Route path="/resources" element={<PageWrapper><ResourcesPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex bg-[#312e2b] min-h-screen">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <main className="flex-grow lg:pl-44 pb-20 lg:pb-0">
          <AnimatedRoutes />
        </main>
        <MobileNav />
      </div>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { Palette, Monitor, Zap, Flower2, Moon } from 'lucide-react';
import './ThemeSwitcher.css';

const themes = [
  { id: 'cyberpunk', name: 'Cyberpunk', icon: <Zap size={18} />, color: '#00e5ff' },
  { id: 'gold', name: 'Midnight Gold', icon: <Monitor size={18} />, color: '#d4af37' },
  { id: 'matrix', name: 'Matrix', icon: <div className="matrix-icon">01</div>, color: '#00ff41' },
  { id: 'rose', name: 'Rose Nebula', icon: <Flower2 size={18} />, color: '#ff007f' }
];

const ThemeSwitcher = () => {
  const [activeTheme, setActiveTheme] = useState('cyberpunk');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'cyberpunk';
    setActiveTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = (themeId) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('portfolio-theme', themeId);
    setIsOpen(false);
  };

  return (
    <div className={`theme-switcher ${isOpen ? 'open' : ''}`}>
      <button 
        className="theme-toggle-btn glass" 
        onClick={() => setIsOpen(!isOpen)}
        title="Switch Theme"
      >
        <Palette size={20} />
      </button>

      <div className="theme-options glass">
        {themes.map((theme) => (
          <button
            key={theme.id}
            className={`theme-option ${activeTheme === theme.id ? 'active' : ''}`}
            onClick={() => toggleTheme(theme.id)}
            style={{ '--theme-color': theme.color }}
          >
            <span className="theme-icon">{theme.icon}</span>
            <span className="theme-name">{theme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;

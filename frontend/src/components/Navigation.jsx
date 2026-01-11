import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X, Target } from 'lucide-react';
import { Switch } from './ui/switch';

export const Navigation = ({ judgeMode, setJudgeMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/demo', label: 'Live Demo' },
    { path: '/impact', label: 'Impact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-medium)' }}>
      <div className="container" style={{ padding: '20px 40px' }}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: 'var(--brand-primary)', 
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Brain size={28} color="var(--text-inverse)" strokeWidth={2.5} />
            </div>
            <div>
              <div className="heading-5" style={{ color: 'var(--text-primary)', marginBottom: '2px' }}>EduForesight</div>
              <div className="caption" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Decision Intelligence</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="body-small"
                style={{
                  color: isActive(link.path) ? 'var(--brand-primary)' : 'var(--text-white)',
                  textDecoration: 'none',
                  fontWeight: isActive(link.path) ? 600 : 500,
                  transition: 'color 0.3s ease',
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => !isActive(link.path) && (e.target.style.color = 'var(--text-white)')}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Judge Mode Toggle */}
            <div className="flex items-center gap-3 ml-4" style={{ 
              padding: '8px 16px', 
              backgroundColor: 'var(--bg-card)',
              borderRadius: '10rem',
              border: '1px solid var(--border-medium)'
            }}>
              <Target size={18} color={judgeMode ? 'var(--brand-primary)' : 'var(--text-secondary)'} />
              <span className="caption" style={{ fontSize: '0.75rem', color: judgeMode ? 'var(--brand-primary)' : 'var(--text-secondary)' }}>Judge Mode</span>
              <Switch checked={judgeMode} onCheckedChange={setJudgeMode} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            {mobileMenuOpen ? (
              <X size={28} color="var(--text-primary)" />
            ) : (
              <Menu size={28} color="var(--text-primary)" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden" style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-medium)' }}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="body-medium"
                  style={{
                    color: isActive(link.path) ? 'var(--brand-primary)' : 'var(--text-white)',
                    textDecoration: 'none',
                    fontWeight: isActive(link.path) ? 600 : 500,
                    padding: '12px 0',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem'
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="flex items-center gap-3 mt-2" style={{ padding: '12px 0' }}>
                <Target size={18} color={judgeMode ? 'var(--brand-primary)' : 'var(--text-secondary)'} />
                <span className="body-small" style={{ color: judgeMode ? 'var(--brand-primary)' : 'var(--text-secondary)' }}>Judge Mode</span>
                <Switch checked={judgeMode} onCheckedChange={setJudgeMode} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

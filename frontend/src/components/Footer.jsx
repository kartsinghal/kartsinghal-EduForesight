import React from 'react';
import { Brain, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'var(--bg-card)', 
      borderTop: '1px solid var(--border-medium)',
      marginTop: '120px'
    }}>
      <div className="container" style={{ padding: '60px 40px' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: 'var(--brand-primary)', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Brain size={24} color="var(--text-inverse)" strokeWidth={2.5} />
              </div>
              <div className="heading-5" style={{ color: 'var(--text-primary)' }}>EduForesight</div>
            </div>
            <p className="body-small" style={{ color: 'var(--text-secondary)', marginTop: '12px' }}>
              Simulating Futures. Preventing Dropouts. Saving Potential.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="heading-5" style={{ color: 'var(--text-white)', marginBottom: '20px' }}>Platform</h4>
            <div className="flex flex-col gap-3">
              <Link to="/features" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Features
              </Link>
              <Link to="/demo" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Live Demo
              </Link>
              <Link to="/impact" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Impact & Policy
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="heading-5" style={{ color: 'var(--text-white)', marginBottom: '20px' }}>Research</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Methodology
              </a>
              <a href="#" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                Case Studies
              </a>
              <a href="#" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                White Papers
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="heading-5" style={{ color: 'var(--text-white)', marginBottom: '20px' }}>Connect</h4>
            <div className="flex gap-4">
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                <Github size={24} />
              </a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                <Linkedin size={24} />
              </a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          marginTop: '60px', 
          paddingTop: '30px', 
          borderTop: '1px solid var(--border-medium)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
            © 2025 EduForesight AI. Built for positive impact.
          </p>
          <div className="flex gap-6">
            <a href="#" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy</a>
            <a href="#" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms</a>
            <a href="#" className="body-small" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

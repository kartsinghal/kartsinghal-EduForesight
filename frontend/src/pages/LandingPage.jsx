import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, GitBranch, Bell, Target, TrendingUp, Award } from 'lucide-react';
import { systemMetrics } from '../data/mockData';

export const LandingPage = ({ judgeMode }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section" style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Hero Text */}
            <div>
              {judgeMode && (
                <div className="judge-mode-badge" style={{ marginBottom: '20px', display: 'inline-block' }}>
                  🎯 Innovation Spotlight
                </div>
              )}
              
              <h1 className="brand-display" style={{ marginBottom: '32px' }}>
                SIMULATING
                <br />
                FUTURES.
              </h1>
              
              <p className="body-large" style={{ 
                color: 'var(--text-white)', 
                marginBottom: '24px',
                maxWidth: '600px'
              }}>
                {judgeMode 
                  ? "We don't predict dropouts. We simulate alternate realities and design prevention strategies."
                  : "The first education intelligence platform that simulates alternate futures to prevent student dropouts before they happen."
                }
              </p>
              
              <p className="body-medium" style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '40px',
                maxWidth: '600px'
              }}>
                Preventing Dropouts. Saving Potential. Using Decision Intelligence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/demo" className="btn-primary">
                  Live Demo
                </Link>
                <Link to="/features" className="btn-secondary">
                  See Features
                </Link>
              </div>
              
              {judgeMode && (
                <div style={{ 
                  marginTop: '40px', 
                  padding: '24px', 
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--brand-primary)',
                  borderRadius: '12px'
                }}>
                  <p className="body-small" style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>
                    🧠 INNOVATION: Counterfactual analysis + Causal reasoning + Silence detection
                  </p>
                </div>
              )}
            </div>
            
            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="feature-card" style={{ borderRadius: '16px' }}>
                <TrendingUp size={40} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
                <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>
                  {systemMetrics.studentsAnalyzed.toLocaleString()}
                </div>
                <p className="body-small">Students Analyzed</p>
              </div>
              
              <div className="feature-card" style={{ borderRadius: '16px' }}>
                <Target size={40} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
                <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>
                  {systemMetrics.dropoutsDetected.toLocaleString()}
                </div>
                <p className="body-small">At-Risk Detected</p>
              </div>
              
              <div className="feature-card" style={{ borderRadius: '16px' }}>
                <Brain size={40} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
                <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>
                  {systemMetrics.interventionsDeployed.toLocaleString()}
                </div>
                <p className="body-small">Interventions Deployed</p>
              </div>
              
              <div className="feature-card" style={{ borderRadius: '16px' }}>
                <Award size={40} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
                <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>
                  {systemMetrics.successRate}%
                </div>
                <p className="body-small">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: '120px 0', backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>
              {judgeMode ? 'WHY THIS MATTERS' : 'OUR PHILOSOPHY'}
            </div>
            <h2 className="heading-2" style={{ marginBottom: '32px' }}>
              {judgeMode 
                ? 'NOT PREDICTION. DECISION INTELLIGENCE.'
                : 'THIS IS NOT A PREDICTION SYSTEM'
              }
            </h2>
            <p className="body-large" style={{ color: 'var(--text-white)', marginBottom: '24px' }}>
              We simulate alternate futures. We understand causality. We design prevention strategies.
            </p>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              {judgeMode
                ? 'Using counterfactual reasoning and causal inference—the same techniques used in economics and policy research—we answer: "What if things were different?"'
                : 'Traditional systems predict "who will dropout." We answer "what can prevent it" by simulating interventions before they happen.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Preview */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>
              {judgeMode ? 'THREE BREAKTHROUGH FEATURES' : 'FLAGSHIP CAPABILITIES'}
            </div>
            <h2 className="heading-2">DECISION INTELLIGENCE</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Link to="/demo?feature=counterfactual" style={{ textDecoration: 'none' }}>
              <div className="feature-card" style={{ borderRadius: '16px', height: '100%' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: 'var(--secondary-olive)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <GitBranch size={32} color="var(--brand-primary)" strokeWidth={2} />
                </div>
                
                <h3 className="heading-4" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>
                  Counterfactual Student Analysis
                </h3>
                
                {judgeMode && (
                  <div className="judge-mode-badge" style={{ marginBottom: '12px' }}>FLAGSHIP</div>
                )}
                
                <p className="body-small" style={{ marginBottom: '16px' }}>
                  {judgeMode
                    ? '🔥 Simulates alternate futures. "What if attendance improved? What if aid was provided earlier?" This is policy-level decision intelligence.'
                    : 'Simulate alternate realities: What if this student received financial aid? What if mentorship started in semester 1? See the outcomes before acting.'
                  }
                </p>
                
                <div className="caption" style={{ color: 'var(--brand-primary)', marginTop: 'auto' }}>
                  Interactive Simulation →
                </div>
              </div>
            </Link>
            
            {/* Feature 2 */}
            <Link to="/demo?feature=causal" style={{ textDecoration: 'none' }}>
              <div className="feature-card" style={{ borderRadius: '16px', height: '100%' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: 'var(--secondary-olive)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Brain size={32} color="var(--brand-primary)" strokeWidth={2} />
                </div>
                
                <h3 className="heading-4" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>
                  Failure Chain Breaker AI
                </h3>
                
                {judgeMode && (
                  <div className="judge-mode-badge" style={{ marginBottom: '12px' }}>CAUSAL</div>
                )}
                
                <p className="body-small" style={{ marginBottom: '16px' }}>
                  {judgeMode
                    ? '🧠 Dropout as a process, not an event. Maps causal chains: Financial stress → Low attendance → Anxiety → Disengagement. Identifies where to intervene.'
                    : 'Dropout is a process, not a single event. We map the causal chain: stress → attendance → grades → dropout. Find the breakpoint and intervene there.'
                  }
                </p>
                
                <div className="caption" style={{ color: 'var(--brand-primary)', marginTop: 'auto' }}>
                  View Causal Graphs →
                </div>
              </div>
            </Link>
            
            {/* Feature 3 */}
            <Link to="/demo?feature=silent" style={{ textDecoration: 'none' }}>
              <div className="feature-card" style={{ borderRadius: '16px', height: '100%' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: 'var(--secondary-olive)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Bell size={32} color="var(--brand-primary)" strokeWidth={2} />
                </div>
                
                <h3 className="heading-4" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>
                  Silent Student Detector
                </h3>
                
                {judgeMode && (
                  <div className="judge-mode-badge" style={{ marginBottom: '12px' }}>UNIQUE</div>
                )}
                
                <p className="body-small" style={{ marginBottom: '16px' }}>
                  {judgeMode
                    ? '🔇 The unseen problem: Low noise, high risk students. They don\'t complain. They don\'t ask for help. But they\'re at critical risk. We find them.'
                    : 'Identifies students who are: Low interaction. Low complaints. Low visibility. But HIGH dropout risk. These are the students nobody talks about.'
                  }
                </p>
                
                <div className="caption" style={{ color: 'var(--brand-primary)', marginTop: 'auto' }}>
                  Detect Silent Risk →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '120px 0',
        backgroundColor: 'var(--secondary-olive)',
        position: 'relative'
      }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="heading-2" style={{ marginBottom: '32px' }}>
              {judgeMode ? 'READY TO SEE IT IN ACTION?' : 'EXPERIENCE THE FUTURE OF EDUCATION INTELLIGENCE'}
            </h2>
            <p className="body-large" style={{ color: 'var(--text-white)', marginBottom: '40px' }}>
              {judgeMode
                ? 'Try the interactive demo. Simulate alternate futures. See causal chains. Detect silent students.'
                : 'Explore our live interactive demo and see how decision intelligence can transform education outcomes.'
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/demo" className="btn-primary">
                Launch Interactive Demo
              </Link>
              <Link to="/features" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

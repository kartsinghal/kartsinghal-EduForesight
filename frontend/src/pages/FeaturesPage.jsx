import React from 'react';
import { GitBranch, Brain, Bell, Target, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturesPage = ({ judgeMode }) => {
  return (
    <div className="animate-fade-in" style={{ paddingTop: '100px' }}>
      {/* Header */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {judgeMode && (
              <div className="judge-mode-badge" style={{ marginBottom: '20px', display: 'inline-block' }}>
                JUDGE MODE: Feature Deep Dive
              </div>
            )}
            <h1 className="heading-1" style={{ marginBottom: '32px' }}>
              DECISION INTELLIGENCE FEATURES
            </h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              {judgeMode
                ? 'Three breakthrough capabilities that separate prediction from prevention.'
                : 'Advanced AI capabilities that simulate futures, understand causality, and detect invisible risk.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Feature 1: Counterfactual Analysis */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: 'var(--brand-primary)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px'
              }}>
                <GitBranch size={40} color="var(--text-inverse)" strokeWidth={2.5} />
              </div>
              
              <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '12px' }}>
                FLAGSHIP FEATURE
              </div>
              
              <h2 className="heading-2" style={{ marginBottom: '24px' }}>
                COUNTERFACTUAL STUDENT ANALYSIS
              </h2>
              
              {judgeMode && (
                <div style={{ 
                  padding: '16px 20px', 
                  backgroundColor: 'var(--bg-page)',
                  border: '2px solid var(--brand-primary)',
                  borderRadius: '12px',
                  marginBottom: '24px'
                }}>
                  <p className="body-small" style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>
                    🔥 JUDGE INSIGHT: This is WHAT-IF AI. Used in economics and policy research. Not just prediction—simulation of alternate realities.
                  </p>
                </div>
              )}
              
              <p className="body-medium" style={{ color: 'var(--text-white)', marginBottom: '20px' }}>
                We don't just predict outcomes. We simulate alternate futures.
              </p>
              
              <div style={{ marginBottom: '32px' }}>
                <h4 className="heading-5" style={{ marginBottom: '16px' }}>Key Questions Answered:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'What if attendance improved by 10%?',
                    'What if financial aid was provided in semester 1 vs semester 3?',
                    'What if mentorship intervention happened earlier?',
                    'Which intervention has maximum impact?'
                  ].map((item, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '12px',
                      marginBottom: '12px'
                    }}>
                      <div style={{ 
                        width: '6px', 
                        height: '6px', 
                        backgroundColor: 'var(--brand-primary)',
                        borderRadius: '50%',
                        marginTop: '10px',
                        flexShrink: 0
                      }} />
                      <span className="body-small" style={{ color: 'var(--text-white)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to="/demo?feature=counterfactual" className="btn-primary">
                Try Interactive Demo
              </Link>
            </div>
            
            <div className="feature-card" style={{ borderRadius: '16px', padding: '40px' }}>
              <h4 className="heading-5" style={{ color: 'var(--brand-primary)', marginBottom: '24px' }}>
                HOW IT WORKS
              </h4>
              
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Baseline Analysis', desc: 'Current student state: attendance, GPA, engagement, financial status' },
                  { step: '02', title: 'Intervention Simulation', desc: 'Model alternate scenarios with different interventions and timing' },
                  { step: '03', title: 'Outcome Prediction', desc: 'Calculate dropout probability, GPA trajectory, completion likelihood' },
                  { step: '04', title: 'Comparison & Decision', desc: 'Visual comparison of futures. Choose optimal intervention strategy' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ 
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'var(--secondary-olive)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span className="heading-5" style={{ color: 'var(--brand-primary)', fontSize: '0.9rem' }}>
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h5 className="heading-5" style={{ marginBottom: '8px', fontSize: '1rem' }}>{item.title}</h5>
                      <p className="body-small" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Failure Chain Breaker */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="feature-card" style={{ borderRadius: '16px', padding: '40px' }}>
                <h4 className="heading-5" style={{ color: 'var(--brand-primary)', marginBottom: '24px' }}>
                  CAUSAL CHAIN EXAMPLE
                </h4>
                
                <div style={{ position: 'relative' }}>
                  {[
                    { label: 'Financial Stress', impact: 90, color: '#ff4444' },
                    { label: 'Part-time Work', impact: 75, color: '#ff7744' },
                    { label: 'Low Attendance', impact: 65, color: '#ffaa44' },
                    { label: 'Academic Struggle', impact: 55, color: '#ffdd44' },
                    { label: 'Disengagement', impact: 45, color: '#d9fb06' }
                  ].map((stage, idx) => (
                    <div key={idx} style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span className="body-small" style={{ fontWeight: 600 }}>{stage.label}</span>
                        <span className="caption" style={{ color: 'var(--brand-primary)' }}>{stage.impact}%</span>
                      </div>
                      <div style={{ 
                        width: '100%', 
                        height: '12px', 
                        backgroundColor: 'var(--bg-page)',
                        borderRadius: '6px',
                        overflow: 'hidden'
                      }}>
                        <div style={{ 
                          width: `${stage.impact}%`, 
                          height: '100%', 
                          backgroundColor: stage.color,
                          transition: 'width 0.3s ease'
                        }} />
                      </div>
                      {idx < 4 && (
                        <div style={{ 
                          width: '2px', 
                          height: '16px', 
                          backgroundColor: 'var(--brand-primary)',
                          margin: '8px 0 8px 12px'
                        }} />
                      )}
                    </div>
                  ))}
                </div>
                
                <div style={{ 
                  marginTop: '24px',
                  padding: '20px',
                  backgroundColor: 'var(--bg-page)',
                  borderRadius: '12px',
                  border: '1px solid var(--brand-primary)'
                }}>
                  <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>BREAK POINT</div>
                  <p className="body-small" style={{ fontWeight: 600 }}>Financial Stress</p>
                  <p className="body-small" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
                    Intervention: Emergency financial aid + flexible schedule
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: 'var(--brand-primary)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px'
              }}>
                <Brain size={40} color="var(--text-inverse)" strokeWidth={2.5} />
              </div>
              
              <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '12px' }}>
                CAUSAL REASONING
              </div>
              
              <h2 className="heading-2" style={{ marginBottom: '24px' }}>
                FAILURE CHAIN BREAKER AI
              </h2>
              
              {judgeMode && (
                <div style={{ 
                  padding: '16px 20px', 
                  backgroundColor: 'var(--bg-card)',
                  border: '2px solid var(--brand-primary)',
                  borderRadius: '12px',
                  marginBottom: '24px'
                }}>
                  <p className="body-small" style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>
                    🧠 JUDGE INSIGHT: We model dropout as a PROCESS, not an event. Causal chain detection shows understanding beyond ML accuracy.
                  </p>
                </div>
              )}
              
              <p className="body-medium" style={{ color: 'var(--text-white)', marginBottom: '20px' }}>
                Dropout doesn't happen overnight. It's a cascade of events.
              </p>
              
              <p className="body-small" style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                We map the entire causal chain from root cause to dropout. Then we identify the optimal break point—the stage where intervention has maximum impact with minimum cost.
              </p>
              
              <div style={{ marginBottom: '32px' }}>
                <h4 className="heading-5" style={{ marginBottom: '16px' }}>Outputs:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Root cause identification',
                    'Complete causal chain mapping',
                    'Impact severity at each stage',
                    'Optimal intervention point',
                    'Recommended prevention strategy'
                  ].map((item, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '12px',
                      marginBottom: '12px'
                    }}>
                      <div style={{ 
                        width: '6px', 
                        height: '6px', 
                        backgroundColor: 'var(--brand-primary)',
                        borderRadius: '50%',
                        marginTop: '10px',
                        flexShrink: 0
                      }} />
                      <span className="body-small" style={{ color: 'var(--text-white)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to="/demo?feature=causal" className="btn-primary">
                View Causal Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Silent Student Detector */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: 'var(--brand-primary)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px'
              }}>
                <Bell size={40} color="var(--text-inverse)" strokeWidth={2.5} />
              </div>
              
              <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '12px' }}>
                THE UNSEEN PROBLEM
              </div>
              
              <h2 className="heading-2" style={{ marginBottom: '24px' }}>
                SILENT STUDENT DETECTOR
              </h2>
              
              {judgeMode && (
                <div style={{ 
                  padding: '16px 20px', 
                  backgroundColor: 'var(--bg-page)',
                  border: '2px solid var(--brand-primary)',
                  borderRadius: '12px',
                  marginBottom: '24px'
                }}>
                  <p className="body-small" style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>
                    🔇 JUDGE INSIGHT: The problem nobody talks about. Low noise, high risk. Emotional + social intelligence meets AI.
                  </p>
                </div>
              )}
              
              <p className="body-medium" style={{ color: 'var(--text-white)', marginBottom: '20px' }}>
                The most at-risk students often make the least noise.
              </p>
              
              <p className="body-small" style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                They don't complain. They don't ask for help. They suffer silently. Traditional systems miss them because they look for visible signs. We look for invisible patterns.
              </p>
              
              <div style={{ marginBottom: '32px' }}>
                <h4 className="heading-5" style={{ marginBottom: '16px' }}>Detection Indicators:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    { label: 'Low complaint frequency', severity: 'Critical signal' },
                    { label: 'Minimal help-seeking behavior', severity: 'High risk' },
                    { label: 'Declining social interaction', severity: 'Warning sign' },
                    { label: 'Low visibility but high stress', severity: 'Red flag' }
                  ].map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span className="body-small" style={{ color: 'var(--text-white)' }}>{item.label}</span>
                        <span className="caption" style={{ color: 'var(--brand-primary)' }}>{item.severity}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to="/demo?feature=silent" className="btn-primary">
                See Detection Demo
              </Link>
            </div>
            
            <div className="feature-card" style={{ borderRadius: '16px', padding: '40px' }}>
              <h4 className="heading-5" style={{ color: 'var(--brand-primary)', marginBottom: '24px' }}>
                SILENCE SCORE BREAKDOWN
              </h4>
              
              <div style={{ marginBottom: '32px' }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <div className="heading-1" style={{ fontSize: '5rem', lineHeight: 1, marginBottom: '8px' }}>91</div>
                  <div className="caption" style={{ color: 'var(--brand-primary)' }}>SILENCE SCORE (CRITICAL)</div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { metric: 'Complaints Filed', value: 0, max: 10, status: 'CRITICAL' },
                    { metric: 'Help-Seeking Behavior', value: 5, max: 100, status: 'HIGH RISK' },
                    { metric: 'Social Interaction', value: 15, max: 100, status: 'HIGH RISK' },
                    { metric: 'Class Participation', value: 32, max: 100, status: 'MEDIUM' }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span className="body-small">{item.metric}</span>
                        <span className="caption" style={{ 
                          color: item.status.includes('CRITICAL') ? '#ff4444' : item.status.includes('HIGH') ? '#ffaa44' : 'var(--brand-primary)'
                        }}>
                          {item.status}
                        </span>
                      </div>
                      <div style={{ 
                        width: '100%', 
                        height: '8px', 
                        backgroundColor: 'var(--bg-page)',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <div style={{ 
                          width: `${(item.value / item.max) * 100}%`, 
                          height: '100%', 
                          backgroundColor: item.status.includes('CRITICAL') ? '#ff4444' : item.status.includes('HIGH') ? '#ffaa44' : 'var(--brand-primary)'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div style={{ 
                padding: '20px',
                backgroundColor: 'var(--bg-page)',
                borderRadius: '12px',
                border: '2px solid #ff4444'
              }}>
                <div className="caption" style={{ color: '#ff4444', marginBottom: '8px' }}>RECOMMENDED ACTION</div>
                <p className="body-small" style={{ fontWeight: 600 }}>Proactive counselor outreach within 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '12px' }}>
              SUPPORTING CAPABILITIES
            </div>
            <h2 className="heading-2">COMPLETE PLATFORM</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Risk Scoring',
                description: 'Real-time dropout risk calculation based on 50+ factors'
              },
              {
                icon: Zap,
                title: 'Intervention ROI',
                description: 'Calculate cost-effectiveness of each intervention strategy'
              },
              {
                icon: Shield,
                title: 'Privacy First',
                description: 'Student data protection with federated learning architecture'
              }
            ].map((feature, idx) => (
              <div key={idx} className="feature-card" style={{ borderRadius: '16px', textAlign: 'center' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: 'var(--secondary-olive)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <feature.icon size={32} color="var(--brand-primary)" />
                </div>
                <h4 className="heading-5" style={{ marginBottom: '12px' }}>{feature.title}</h4>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--secondary-olive)' }}>
        <div className="container text-center">
          <h2 className="heading-2" style={{ marginBottom: '32px' }}>
            SEE IT IN ACTION
          </h2>
          <p className="body-large" style={{ marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            Experience all three flagship features in our interactive demo.
          </p>
          <Link to="/demo" className="btn-primary">
            Launch Live Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

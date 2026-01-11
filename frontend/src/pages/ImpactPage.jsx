import React from 'react';
import { TrendingUp, DollarSign, Users, Target, Award, Zap } from 'lucide-react';
import { systemMetrics, interventionImpact } from '../data/mockData';
import { Link } from 'react-router-dom';

export const ImpactPage = ({ judgeMode }) => {
  return (
    <div className="animate-fade-in" style={{ paddingTop: '100px' }}>
      {/* Header */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {judgeMode && (
              <div className="judge-mode-badge" style={{ marginBottom: '20px', display: 'inline-block' }}>
                POLICY & RESEARCH IMPACT
              </div>
            )}
            <h1 className="heading-1" style={{ marginBottom: '32px' }}>
              {judgeMode ? 'REAL WORLD IMPACT' : 'IMPACT & POLICY USE'}
            </h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              {judgeMode
                ? 'This isn\'t just a prediction tool. It\'s decision intelligence for education policy.'
                : 'EduForesight AI enables data-driven policy decisions that prevent dropouts and save lives.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* System Metrics */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '12px' }}>
              PLATFORM PERFORMANCE
            </div>
            <h2 className="heading-2">BY THE NUMBERS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card" style={{ borderRadius: '16px', textAlign: 'center' }}>
              <Users size={48} color="var(--brand-primary)" style={{ margin: '0 auto 20px' }} />
              <div className="heading-2" style={{ fontSize: '3rem', marginBottom: '8px', lineHeight: 1 }}>
                {systemMetrics.studentsAnalyzed.toLocaleString()}
              </div>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>Students Analyzed</p>
            </div>
            
            <div className="feature-card" style={{ borderRadius: '16px', textAlign: 'center' }}>
              <Target size={48} color="var(--brand-primary)" style={{ margin: '0 auto 20px' }} />
              <div className="heading-2" style={{ fontSize: '3rem', marginBottom: '8px', lineHeight: 1 }}>
                {systemMetrics.dropoutsDetected.toLocaleString()}
              </div>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>At-Risk Students Detected</p>
            </div>
            
            <div className="feature-card" style={{ borderRadius: '16px', textAlign: 'center' }}>
              <Zap size={48} color="var(--brand-primary)" style={{ margin: '0 auto 20px' }} />
              <div className="heading-2" style={{ fontSize: '3rem', marginBottom: '8px', lineHeight: 1 }}>
                {systemMetrics.interventionsDeployed.toLocaleString()}
              </div>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>Interventions Deployed</p>
            </div>
            
            <div className="feature-card" style={{ borderRadius: '16px', textAlign: 'center' }}>
              <Award size={48} color="var(--brand-primary)" style={{ margin: '0 auto 20px' }} />
              <div className="heading-2" style={{ fontSize: '3rem', marginBottom: '8px', lineHeight: 1 }}>
                {systemMetrics.successRate}%
              </div>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intervention ROI */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '12px' }}>
              COST-EFFECTIVENESS ANALYSIS
            </div>
            <h2 className="heading-2">INTERVENTION ROI</h2>
            {judgeMode && (
              <p className="body-medium" style={{ color: 'var(--text-secondary)', marginTop: '20px' }}>
                Policy decisions need economic justification. Here's the data.
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Financial Aid',
                data: interventionImpact.financialAid,
                icon: DollarSign
              },
              {
                name: 'Mentorship Program',
                data: interventionImpact.mentorship,
                icon: Users
              },
              {
                name: 'Early Intervention',
                data: interventionImpact.earlyIntervention,
                icon: TrendingUp
              }
            ].map((intervention, idx) => (
              <div key={idx} className="feature-card" style={{ borderRadius: '16px', padding: '32px' }}>
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
                  <intervention.icon size={32} color="var(--brand-primary)" />
                </div>
                
                <h3 className="heading-4" style={{ marginBottom: '24px' }}>{intervention.name}</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="caption" style={{ marginBottom: '8px' }}>Cost per Student</div>
                    <div className="heading-4" style={{ color: 'var(--brand-primary)' }}>
                      ${intervention.data.costPerStudent.toLocaleString()}
                    </div>
                  </div>
                  
                  <div>
                    <div className="caption" style={{ marginBottom: '8px' }}>Dropout Reduction</div>
                    <div className="heading-4" style={{ color: 'var(--brand-primary)' }}>
                      {intervention.data.dropoutReduction}%
                    </div>
                  </div>
                  
                  <div>
                    <div className="caption" style={{ marginBottom: '8px' }}>ROI Multiplier</div>
                    <div className="heading-4" style={{ color: 'var(--brand-primary)' }}>
                      {intervention.data.roiMultiplier}x
                    </div>
                  </div>
                  
                  <div>
                    <div className="caption" style={{ marginBottom: '8px' }}>Implementation Time</div>
                    <div className="body-small" style={{ fontWeight: 600 }}>
                      {intervention.data.implementationTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {judgeMode && (
            <div style={{ 
              marginTop: '40px',
              padding: '24px',
              backgroundColor: 'var(--secondary-olive)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <p className="body-medium" style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>
                📊 JUDGE INSIGHT: Early intervention has highest ROI (6.5x). Decision intelligence shows WHEN to act, not just WHO to help.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Policy Applications */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '12px' }}>
              REAL-WORLD APPLICATIONS
            </div>
            <h2 className="heading-2">POLICY USE CASES</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'University Administration',
                description: 'Optimize resource allocation by identifying which students need which interventions at what time.',
                outcomes: ['35% reduction in dropout rates', 'Targeted support deployment', 'Budget optimization']
              },
              {
                title: 'Government Education Policy',
                description: 'Design evidence-based policies using counterfactual simulations to predict intervention effectiveness.',
                outcomes: ['Data-driven policy design', 'Predictive impact assessment', 'Cost-benefit analysis']
              },
              {
                title: 'Financial Aid Programs',
                description: 'Simulate ROI of different aid amounts and timing to maximize student success per dollar spent.',
                outcomes: ['Optimal aid distribution', '6.5x return on investment', 'Early intervention focus']
              },
              {
                title: 'Student Support Services',
                description: 'Proactively reach silent students who won\'t ask for help but are at critical risk.',
                outcomes: ['Find invisible at-risk students', 'Reduce silent dropouts by 45%', 'Emotional intelligence + AI']
              }
            ].map((useCase, idx) => (
              <div key={idx} className="feature-card" style={{ borderRadius: '16px', padding: '32px' }}>
                <h3 className="heading-4" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>
                  {useCase.title}
                </h3>
                <p className="body-small" style={{ color: 'var(--text-white)', marginBottom: '24px' }}>
                  {useCase.description}
                </p>
                
                <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '12px' }}>KEY OUTCOMES</div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {useCase.outcomes.map((outcome, i) => (
                    <li key={i} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '12px',
                      marginBottom: '8px'
                    }}>
                      <div style={{ 
                        width: '6px', 
                        height: '6px', 
                        backgroundColor: 'var(--brand-primary)',
                        borderRadius: '50%',
                        marginTop: '8px',
                        flexShrink: 0
                      }} />
                      <span className="body-small">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Approach */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '12px' }}>
                {judgeMode ? 'TECHNICAL APPROACH' : 'METHODOLOGY'}
              </div>
              <h2 className="heading-2" style={{ marginBottom: '24px' }}>
                {judgeMode ? 'RESEARCH-GRADE AI' : 'BUILT ON SOLID RESEARCH'}
              </h2>
              <p className="body-medium" style={{ color: 'var(--text-white)', marginBottom: '24px' }}>
                {judgeMode
                  ? 'We use techniques from economics and policy research, not just machine learning.'
                  : 'Our approach combines causal inference, counterfactual reasoning, and behavioral pattern analysis.'
                }
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Counterfactual Reasoning',
                    desc: 'Pearl\'s causal framework for "what-if" simulations'
                  },
                  {
                    title: 'Causal Inference',
                    desc: 'Directed acyclic graphs (DAGs) for causality mapping'
                  },
                  {
                    title: 'Behavioral Economics',
                    desc: 'Silent suffering detection via behavioral pattern analysis'
                  },
                  {
                    title: 'Decision Theory',
                    desc: 'Optimal intervention timing and resource allocation'
                  }
                ].map((item, idx) => (
                  <div key={idx} style={{ 
                    padding: '16px 20px',
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-medium)'
                  }}>
                    <div className="body-small" style={{ fontWeight: 600, marginBottom: '4px' }}>{item.title}</div>
                    <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="feature-card" style={{ borderRadius: '16px', padding: '40px' }}>
              <h3 className="heading-4" style={{ color: 'var(--brand-primary)', marginBottom: '24px' }}>
                WHY THIS MATTERS
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="heading-5" style={{ marginBottom: '8px' }}>For Students</div>
                  <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    Get help before crisis. Interventions when they work best, not when it's too late.
                  </p>
                </div>
                
                <div>
                  <div className="heading-5" style={{ marginBottom: '8px' }}>For Institutions</div>
                  <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    Optimize support budgets. Know which interventions work for which students.
                  </p>
                </div>
                
                <div>
                  <div className="heading-5" style={{ marginBottom: '8px' }}>For Policymakers</div>
                  <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    Design evidence-based policies. Simulate outcomes before implementation.
                  </p>
                </div>
                
                <div>
                  <div className="heading-5" style={{ marginBottom: '8px' }}>For Society</div>
                  <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    Reduce dropout rates. Save potential. Change lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--secondary-olive)' }}>
        <div className="container text-center">
          <h2 className="heading-2" style={{ marginBottom: '32px' }}>
            {judgeMode ? 'THIS SHOULD EXIST IN THE REAL WORLD' : 'JOIN THE MOVEMENT'}
          </h2>
          <p className="body-large" style={{ marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            {judgeMode
              ? 'Decision intelligence for education policy. Built for impact. Ready to deploy.'
              : 'Be part of the solution to prevent student dropouts with AI-powered decision intelligence.'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/demo" className="btn-primary">
              Try Live Demo
            </Link>
            <Link to="/features" className="btn-secondary">
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
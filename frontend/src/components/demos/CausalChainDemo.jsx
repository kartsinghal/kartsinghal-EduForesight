import React, { useState } from 'react';
import { studentProfiles, causalChains } from '../../data/mockData';
import { AlertCircle, ArrowDown, Target } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export const CausalChainDemo = ({ judgeMode }) => {
  const [selectedStudent, setSelectedStudent] = useState('STU001');
  const chain = causalChains[selectedStudent];
  const student = studentProfiles.find(s => s.id === selectedStudent);

  return (
    <div>
      {judgeMode && (
        <div style={{ 
          padding: '20px 24px', 
          backgroundColor: 'var(--bg-card)',
          border: '2px solid var(--brand-primary)',
          borderRadius: '12px',
          marginBottom: '32px'
        }}>
          <p className="body-small" style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>
            🧠 JUDGE MODE: Dropout is a PROCESS. We map the entire causal chain and identify the optimal break point. This demonstrates causal reasoning.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Student Selection */}
        <div className="feature-card" style={{ borderRadius: '16px', padding: '32px' }}>
          <h3 className="heading-4" style={{ color: 'var(--brand-primary)', marginBottom: '24px' }}>
            SELECT STUDENT
          </h3>
          
          <div className="space-y-4">
            {studentProfiles.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedStudent(s.id)}
                style={{
                  width: '100%',
                  padding: '20px',
                  backgroundColor: selectedStudent === s.id ? 'var(--brand-primary)' : 'var(--bg-page)',
                  color: selectedStudent === s.id ? 'var(--text-inverse)' : 'var(--text-white)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'left'
                }}
              >
                <div className="heading-5" style={{ 
                  marginBottom: '8px',
                  color: selectedStudent === s.id ? 'var(--text-inverse)' : 'var(--text-white)'
                }}>
                  {s.name}
                </div>
                <div className="body-small" style={{ 
                  marginBottom: '12px',
                  color: selectedStudent === s.id ? 'var(--text-inverse)' : 'var(--text-secondary)'
                }}>
                  {s.id}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="caption" style={{ 
                    color: selectedStudent === s.id ? 'var(--text-inverse)' : 'var(--text-secondary)'
                  }}>
                    Risk Score
                  </span>
                  <span className="heading-5" style={{ 
                    fontSize: '1.2rem',
                    color: selectedStudent === s.id ? 'var(--text-inverse)' : '#ff4444'
                  }}>
                    {s.dropoutRisk}%
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          {/* Student Stats */}
          <div style={{ 
            marginTop: '24px',
            padding: '20px',
            backgroundColor: 'var(--bg-page)',
            borderRadius: '12px'
          }}>
            <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>CURRENT STATE</div>
            <div className="space-y-3">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="body-small">Attendance</span>
                <span className="body-small" style={{ fontWeight: 600 }}>{student.attendance}%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="body-small">GPA</span>
                <span className="body-small" style={{ fontWeight: 600 }}>{student.gpa}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="body-small">Engagement</span>
                <span className="body-small" style={{ fontWeight: 600 }}>{student.engagementScore}%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="body-small">Family Income</span>
                <span className="body-small" style={{ fontWeight: 600 }}>${student.familyIncome.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Causal Chain Visualization */}
        <div className="lg:col-span-2">
          <div className="feature-card" style={{ borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
            <h3 className="heading-4" style={{ color: 'var(--brand-primary)', marginBottom: '24px' }}>
              CAUSAL CHAIN ANALYSIS
            </h3>
            
            <div style={{ position: 'relative' }}>
              {chain.chain.map((stage, idx) => (
                <div key={idx} style={{ marginBottom: idx < chain.chain.length - 1 ? '24px' : '0' }}>
                  <div style={{ 
                    padding: '24px',
                    backgroundColor: 'var(--bg-page)',
                    borderRadius: '12px',
                    border: `2px solid ${stage.stage === chain.breakPoint ? 'var(--brand-primary)' : 'var(--border-medium)'}`,
                    position: 'relative'
                  }}>
                    {stage.stage === chain.breakPoint && (
                      <div style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '20px',
                        padding: '4px 12px',
                        backgroundColor: 'var(--brand-primary)',
                        color: 'var(--text-inverse)',
                        borderRadius: '10rem',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        🎯 BREAK POINT
                      </div>
                    )}
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <div>
                        <div className="heading-5" style={{ marginBottom: '8px', color: stage.stage === chain.breakPoint ? 'var(--brand-primary)' : 'var(--text-white)' }}>
                          {stage.stage}
                        </div>
                        <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                          {stage.description}
                        </p>
                      </div>
                      <div style={{ 
                        minWidth: '60px',
                        textAlign: 'right'
                      }}>
                        <div className="heading-4" style={{ 
                          fontSize: '1.8rem',
                          lineHeight: 1,
                          color: stage.impact > 70 ? '#ff4444' : stage.impact > 50 ? '#ffaa44' : 'var(--brand-primary)'
                        }}>
                          {stage.impact}
                        </div>
                        <div className="caption" style={{ color: 'var(--text-secondary)' }}>IMPACT</div>
                      </div>
                    </div>
                    
                    {/* Impact Bar */}
                    <div style={{ 
                      width: '100%', 
                      height: '8px', 
                      backgroundColor: 'var(--bg-card)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      marginTop: '16px'
                    }}>
                      <div style={{ 
                        width: `${stage.impact}%`, 
                        height: '100%', 
                        backgroundColor: stage.impact > 70 ? '#ff4444' : stage.impact > 50 ? '#ffaa44' : 'var(--brand-primary)',
                        transition: 'width 0.3s ease'
                      }} />
                    </div>
                  </div>
                  
                  {idx < chain.chain.length - 1 && (
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'center',
                      margin: '12px 0'
                    }}>
                      <ArrowDown size={32} color="var(--brand-primary)" strokeWidth={3} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Intervention Recommendation */}
          <div className="feature-card" style={{ 
            borderRadius: '16px', 
            padding: '32px',
            backgroundColor: 'var(--secondary-olive)',
            border: '2px solid var(--brand-primary)'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                backgroundColor: 'var(--brand-primary)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Target size={32} color="var(--text-inverse)" />
              </div>
              
              <div style={{ flex: 1 }}>
                <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>RECOMMENDED INTERVENTION</div>
                <h4 className="heading-4" style={{ marginBottom: '12px' }}>Root Cause: {chain.rootCause}</h4>
                <p className="body-medium" style={{ color: 'var(--text-white)' }}>
                  {chain.intervention}
                </p>
                
                <div style={{ 
                  marginTop: '20px',
                  display: 'flex',
                  gap: '16px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ 
                    padding: '12px 20px',
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '8px'
                  }}>
                    <div className="caption" style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>BREAK POINT</div>
                    <div className="body-small" style={{ fontWeight: 600 }}>{chain.breakPoint}</div>
                  </div>
                  
                  <div style={{ 
                    padding: '12px 20px',
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '8px'
                  }}>
                    <div className="caption" style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>CHAIN LENGTH</div>
                    <div className="body-small" style={{ fontWeight: 600 }}>{chain.chain.length} stages</div>
                  </div>
                  
                  <div style={{ 
                    padding: '12px 20px',
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '8px'
                  }}>
                    <div className="caption" style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>EXPECTED IMPACT</div>
                    <div className="body-small" style={{ fontWeight: 600, color: '#4ade80' }}>-35% dropout risk</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
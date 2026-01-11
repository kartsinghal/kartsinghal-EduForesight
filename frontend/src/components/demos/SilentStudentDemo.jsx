import React, { useState } from 'react';
import { silentStudents } from '../../data/mockData';
import { AlertTriangle, Bell, TrendingDown } from 'lucide-react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const SilentStudentDemo = ({ judgeMode }) => {
  const [selectedStudent, setSelectedStudent] = useState(silentStudents[0]);

  const radarData = {
    labels: ['Complaints', 'Help-Seeking', 'Social Interaction', 'Participation', 'Visibility'],
    datasets: [
      {
        label: 'Normal Student',
        data: [65, 75, 80, 70, 85],
        backgroundColor: 'rgba(136, 134, 128, 0.2)',
        borderColor: '#888680',
        borderWidth: 2
      },
      {
        label: selectedStudent.name,
        data: [
          selectedStudent.indicators.find(i => i.metric === 'Complaints Filed').value,
          selectedStudent.indicators.find(i => i.metric === 'Help-Seeking').value,
          selectedStudent.indicators.find(i => i.metric === 'Social Interaction').value,
          selectedStudent.indicators.find(i => i.metric === 'Participation').value,
          20 // Visibility score
        ],
        backgroundColor: 'rgba(255, 68, 68, 0.2)',
        borderColor: '#ff4444',
        borderWidth: 2
      }
    ]
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff',
          font: { size: 12, weight: '600' },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: '#1a1c1b',
        titleColor: '#d9fb06',
        bodyColor: '#ffffff',
        borderColor: '#d9fb06',
        borderWidth: 1,
        padding: 12
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#888680',
          backdropColor: 'transparent'
        },
        grid: {
          color: 'rgba(63, 72, 22, 0.3)'
        },
        pointLabels: {
          color: '#ffffff',
          font: { size: 11, weight: '600' }
        }
      }
    }
  };

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
            🔇 JUDGE MODE: Low noise, high risk. The students who don't complain but are at critical danger. This solves the invisible problem.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Student Cards */}
        <div className="space-y-4">
          {silentStudents.map((student) => (
            <button
              key={student.id}
              onClick={() => setSelectedStudent(student)}
              style={{
                width: '100%',
                padding: '24px',
                backgroundColor: selectedStudent.id === student.id ? 'var(--brand-primary)' : 'var(--bg-card)',
                color: selectedStudent.id === student.id ? 'var(--text-inverse)' : 'var(--text-white)',
                border: `2px solid ${selectedStudent.id === student.id ? 'var(--brand-primary)' : 'var(--border-medium)'}`,
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div>
                  <div className="heading-5" style={{ 
                    marginBottom: '4px',
                    color: selectedStudent.id === student.id ? 'var(--text-inverse)' : 'var(--text-white)'
                  }}>
                    {student.name}
                  </div>
                  <div className="caption" style={{ 
                    color: selectedStudent.id === student.id ? 'var(--text-inverse)' : 'var(--text-secondary)'
                  }}>
                    {student.id}
                  </div>
                </div>
                <div style={{
                  padding: '6px 12px',
                  backgroundColor: selectedStudent.id === student.id ? 'var(--text-inverse)' : '#ff4444',
                  color: selectedStudent.id === student.id ? 'var(--brand-primary)' : 'white',
                  borderRadius: '10rem',
                  fontSize: '0.7rem',
                  fontWeight: 600
                }}>
                  {student.silenceScore > 85 ? 'CRITICAL' : student.silenceScore > 75 ? 'HIGH' : 'MEDIUM'}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="caption" style={{ 
                    marginBottom: '4px',
                    color: selectedStudent.id === student.id ? 'var(--text-inverse)' : 'var(--text-secondary)'
                  }}>
                    Silence Score
                  </div>
                  <div className="heading-4" style={{ 
                    fontSize: '1.8rem',
                    lineHeight: 1,
                    color: selectedStudent.id === student.id ? 'var(--text-inverse)' : '#ff4444'
                  }}>
                    {student.silenceScore}
                  </div>
                </div>
                <div>
                  <div className="caption" style={{ 
                    marginBottom: '4px',
                    color: selectedStudent.id === student.id ? 'var(--text-inverse)' : 'var(--text-secondary)'
                  }}>
                    Risk Score
                  </div>
                  <div className="heading-4" style={{ 
                    fontSize: '1.8rem',
                    lineHeight: 1,
                    color: selectedStudent.id === student.id ? 'var(--text-inverse)' : '#ff4444'
                  }}>
                    {student.riskScore}
                  </div>
                </div>
              </div>
            </button>
          ))}
          
          <div style={{ 
            padding: '20px',
            backgroundColor: 'var(--secondary-olive)',
            borderRadius: '12px',
            marginTop: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <AlertTriangle size={24} color="var(--brand-primary)" />
              <div className="caption" style={{ color: 'var(--brand-primary)' }}>ABOUT SILENCE SCORE</div>
            </div>
            <p className="body-small" style={{ color: 'var(--text-white)' }}>
              Measures how "invisible" a student is while facing high risk. Higher score = more silent suffering.
            </p>
          </div>
        </div>

        {/* Analysis Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Radar Chart */}
          <div className="feature-card" style={{ borderRadius: '16px', padding: '32px', height: '450px' }}>
            <h3 className="heading-4" style={{ color: 'var(--brand-primary)', marginBottom: '20px' }}>
              BEHAVIORAL PATTERN ANALYSIS
            </h3>
            <div style={{ height: 'calc(100% - 60px)' }}>
              <Radar data={radarData} options={radarOptions} />
            </div>
          </div>
          
          {/* Indicators Breakdown */}
          <div className="feature-card" style={{ borderRadius: '16px', padding: '32px' }}>
            <h3 className="heading-4" style={{ color: 'var(--brand-primary)', marginBottom: '24px' }}>
              SILENCE INDICATORS
            </h3>
            
            <div className="space-y-5">
              {selectedStudent.indicators.map((indicator, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span className="body-small" style={{ fontWeight: 600 }}>{indicator.metric}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="heading-5" style={{ fontSize: '1.2rem' }}>{indicator.value}</span>
                      <span style={{
                        padding: '4px 10px',
                        backgroundColor: 
                          indicator.severity === 'critical' ? '#ff4444' :
                          indicator.severity === 'high' ? '#ffaa44' :
                          indicator.severity === 'medium' ? '#ffdd44' : 'var(--brand-primary)',
                        color: 'var(--text-inverse)',
                        borderRadius: '10rem',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {indicator.severity}
                      </span>
                    </div>
                  </div>
                  <div style={{ 
                    width: '100%', 
                    height: '10px', 
                    backgroundColor: 'var(--bg-page)',
                    borderRadius: '5px',
                    overflow: 'hidden'
                  }}>
                    <div style={{ 
                      width: `${indicator.value}%`, 
                      height: '100%', 
                      backgroundColor: 
                        indicator.severity === 'critical' ? '#ff4444' :
                        indicator.severity === 'high' ? '#ffaa44' :
                        indicator.severity === 'medium' ? '#ffdd44' : 'var(--brand-primary)',
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recommendation */}
          <div className="feature-card" style={{ 
            borderRadius: '16px', 
            padding: '32px',
            backgroundColor: '#ff4444',
            border: 'none'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                backgroundColor: 'white',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Bell size={32} color="#ff4444" />
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ 
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'white',
                  marginBottom: '8px'
                }}>
                  URGENT ACTION REQUIRED
                </div>
                <h4 className="heading-4" style={{ marginBottom: '12px', color: 'white' }}>Recommended Intervention</h4>
                <p className="body-medium" style={{ color: 'white', marginBottom: '20px' }}>
                  {selectedStudent.recommendation}
                </p>
                
                <div style={{ 
                  padding: '16px 20px',
                  backgroundColor: 'white',
                  borderRadius: '10px'
                }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div>
                      <div className="caption" style={{ color: '#ff4444', marginBottom: '4px' }}>TIMELINE</div>
                      <div className="body-small" style={{ fontWeight: 600, color: '#1a1c1b' }}>Within 48 hours</div>
                    </div>
                    <div style={{ width: '1px', height: '40px', backgroundColor: '#ddd' }} />
                    <div>
                      <div className="caption" style={{ color: '#ff4444', marginBottom: '4px' }}>PRIORITY</div>
                      <div className="body-small" style={{ fontWeight: 600, color: '#1a1c1b' }}>Critical</div>
                    </div>
                    <div style={{ width: '1px', height: '40px', backgroundColor: '#ddd' }} />
                    <div>
                      <div className="caption" style={{ color: '#ff4444', marginBottom: '4px' }}>METHOD</div>
                      <div className="body-small" style={{ fontWeight: 600, color: '#1a1c1b' }}>Proactive Outreach</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Message */}
      <div style={{ 
        marginTop: '32px',
        padding: '32px',
        backgroundColor: 'var(--secondary-olive)',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <div className="heading-4" style={{ color: 'var(--brand-primary)', marginBottom: '16px' }}>
          THE INVISIBLE PROBLEM
        </div>
        <p className="body-large" style={{ color: 'var(--text-white)', maxWidth: '800px', margin: '0 auto' }}>
          Traditional systems wait for students to ask for help. We find the ones who suffer in silence.
        </p>
      </div>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { Slider } from '../ui/slider';
import { studentProfiles, calculateCounterfactual } from '../../data/mockData';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { TrendingDown, TrendingUp, Target } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const CounterfactualDemo = ({ judgeMode }) => {
  const baseStudent = studentProfiles[0];
  
  const [attendance, setAttendance] = useState(baseStudent.attendance);
  const [financialAid, setFinancialAid] = useState(baseStudent.financialAidReceived ? 100 : 0);
  const [mentorship, setMentorship] = useState(baseStudent.mentorshipReceived ? 100 : 0);
  const [interventionTiming, setInterventionTiming] = useState(1);
  
  const [results, setResults] = useState({
    baseline: {
      dropoutProbability: baseStudent.dropoutRisk,
      expectedGPA: baseStudent.gpa,
      engagementScore: baseStudent.engagementScore,
      completionProbability: 100 - baseStudent.dropoutRisk
    },
    alternate: {
      dropoutProbability: baseStudent.dropoutRisk,
      expectedGPA: baseStudent.gpa,
      engagementScore: baseStudent.engagementScore,
      completionProbability: 100 - baseStudent.dropoutRisk
    }
  });

  useEffect(() => {
    // Calculate alternate scenario
    const attendanceImpact = (attendance - baseStudent.attendance) * 0.5;
    const financialImpact = financialAid * 0.25;
    const mentorshipImpact = mentorship * 0.15;
    const timingMultiplier = interventionTiming === 1 ? 1.3 : interventionTiming === 2 ? 1.0 : 0.7;
    
    const totalImpact = (attendanceImpact + financialImpact + mentorshipImpact) * timingMultiplier;
    
    const newDropoutProb = Math.max(5, Math.min(95, baseStudent.dropoutRisk - totalImpact));
    const newGPA = Math.min(4.0, baseStudent.gpa + (totalImpact * 0.015));
    const newEngagement = Math.min(100, baseStudent.engagementScore + totalImpact * 0.8);
    
    setResults({
      baseline: {
        dropoutProbability: baseStudent.dropoutRisk,
        expectedGPA: baseStudent.gpa,
        engagementScore: baseStudent.engagementScore,
        completionProbability: 100 - baseStudent.dropoutRisk
      },
      alternate: {
        dropoutProbability: Math.round(newDropoutProb),
        expectedGPA: parseFloat(newGPA.toFixed(2)),
        engagementScore: Math.round(newEngagement),
        completionProbability: Math.round(100 - newDropoutProb)
      }
    });
  }, [attendance, financialAid, mentorship, interventionTiming]);

  const chartData = {
    labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Graduation'],
    datasets: [
      {
        label: 'Baseline (No Intervention)',
        data: [22, 35, 52, 68, 100 - results.baseline.dropoutProbability],
        borderColor: '#ff4444',
        backgroundColor: 'rgba(255, 68, 68, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Alternate Future (With Intervention)',
        data: [
          interventionTiming === 1 ? results.alternate.completionProbability * 0.3 : 22,
          interventionTiming <= 2 ? results.alternate.completionProbability * 0.5 : 35,
          interventionTiming <= 3 ? results.alternate.completionProbability * 0.7 : 52,
          results.alternate.completionProbability * 0.85,
          results.alternate.completionProbability
        ],
        borderColor: '#d9fb06',
        backgroundColor: 'rgba(217, 251, 6, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
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
      title: {
        display: true,
        text: 'Completion Probability Over Time',
        color: '#d9fb06',
        font: { size: 16, weight: '700' },
        padding: 20
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
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#888680',
          callback: function(value) {
            return value + '%';
          }
        },
        grid: {
          color: 'rgba(63, 72, 22, 0.3)'
        }
      },
      x: {
        ticks: {
          color: '#888680'
        },
        grid: {
          color: 'rgba(63, 72, 22, 0.3)'
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
            🔥 JUDGE MODE: Use sliders to change intervention parameters. Watch outcomes recalculate in real-time. This is WHAT-IF analysis.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls Panel */}
        <div className="feature-card" style={{ borderRadius: '16px', padding: '32px' }}>
          <h3 className="heading-4" style={{ color: 'var(--brand-primary)', marginBottom: '24px' }}>
            INTERVENTION PARAMETERS
          </h3>
          
          <div className="space-y-8">
            {/* Student Profile */}
            <div style={{ 
              padding: '20px', 
              backgroundColor: 'var(--bg-page)',
              borderRadius: '12px',
              marginBottom: '24px'
            }}>
              <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>STUDENT PROFILE</div>
              <div className="heading-5" style={{ marginBottom: '4px' }}>{baseStudent.name}</div>
              <div className="body-small" style={{ color: 'var(--text-secondary)' }}>ID: {baseStudent.id}</div>
            </div>
            
            {/* Attendance Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label className="body-small" style={{ fontWeight: 600 }}>Attendance Rate</label>
                <span className="heading-5" style={{ color: 'var(--brand-primary)', fontSize: '1.2rem' }}>{attendance}%</span>
              </div>
              <Slider
                value={[attendance]}
                onValueChange={(value) => setAttendance(value[0])}
                min={0}
                max={100}
                step={5}
                className="w-full"
              />
              <p className="caption" style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
                Baseline: {baseStudent.attendance}% → Modified: {attendance}%
              </p>
            </div>
            
            {/* Financial Aid */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label className="body-small" style={{ fontWeight: 600 }}>Financial Aid Amount</label>
                <span className="heading-5" style={{ color: 'var(--brand-primary)', fontSize: '1.2rem' }}>${(financialAid * 50).toLocaleString()}</span>
              </div>
              <Slider
                value={[financialAid]}
                onValueChange={(value) => setFinancialAid(value[0])}
                min={0}
                max={100}
                step={10}
                className="w-full"
              />
              <p className="caption" style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
                Range: $0 - $5,000 per semester
              </p>
            </div>
            
            {/* Mentorship */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label className="body-small" style={{ fontWeight: 600 }}>Mentorship Intensity</label>
                <span className="heading-5" style={{ color: 'var(--brand-primary)', fontSize: '1.2rem' }}>{mentorship}%</span>
              </div>
              <Slider
                value={[mentorship]}
                onValueChange={(value) => setMentorship(value[0])}
                min={0}
                max={100}
                step={10}
                className="w-full"
              />
              <p className="caption" style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
                0% = None, 100% = Weekly 1-on-1 sessions
              </p>
            </div>
            
            {/* Timing */}
            <div>
              <label className="body-small" style={{ fontWeight: 600, marginBottom: '12px', display: 'block' }}>Intervention Timing</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 1, label: 'Semester 1', desc: 'Early' },
                  { value: 2, label: 'Semester 2', desc: 'Mid' },
                  { value: 3, label: 'Semester 3', desc: 'Late' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setInterventionTiming(option.value)}
                    style={{
                      padding: '16px 12px',
                      backgroundColor: interventionTiming === option.value ? 'var(--brand-primary)' : 'var(--bg-page)',
                      color: interventionTiming === option.value ? 'var(--text-inverse)' : 'var(--text-white)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontWeight: 600,
                      fontSize: '0.85rem'
                    }}
                  >
                    <div>{option.label}</div>
                    <div style={{ fontSize: '0.7rem', marginTop: '4px', opacity: 0.8 }}>{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div>
          <div className="feature-card" style={{ borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
            <h3 className="heading-4" style={{ color: 'var(--brand-primary)', marginBottom: '24px' }}>
              OUTCOME COMPARISON
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {/* Baseline */}
              <div>
                <div className="caption" style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>BASELINE FUTURE</div>
                
                <div style={{ marginBottom: '20px' }}>
                  <div className="caption" style={{ marginBottom: '4px' }}>Dropout Probability</div>
                  <div className="heading-3" style={{ fontSize: '2.5rem', color: '#ff4444', lineHeight: 1 }}>
                    {results.baseline.dropoutProbability}%
                  </div>
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                  <div className="caption" style={{ marginBottom: '4px' }}>Expected GPA</div>
                  <div className="heading-5">{results.baseline.expectedGPA}</div>
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                  <div className="caption" style={{ marginBottom: '4px' }}>Engagement</div>
                  <div className="heading-5">{results.baseline.engagementScore}%</div>
                </div>
              </div>
              
              {/* Alternate */}
              <div>
                <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '12px' }}>ALTERNATE FUTURE</div>
                
                <div style={{ marginBottom: '20px' }}>
                  <div className="caption" style={{ marginBottom: '4px' }}>Dropout Probability</div>
                  <div className="heading-3" style={{ fontSize: '2.5rem', color: 'var(--brand-primary)', lineHeight: 1 }}>
                    {results.alternate.dropoutProbability}%
                  </div>
                  {results.alternate.dropoutProbability < results.baseline.dropoutProbability && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                      <TrendingDown size={16} color="#4ade80" />
                      <span className="caption" style={{ color: '#4ade80' }}>
                        {Math.round(results.baseline.dropoutProbability - results.alternate.dropoutProbability)}% reduction
                      </span>
                    </div>
                  )}
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                  <div className="caption" style={{ marginBottom: '4px' }}>Expected GPA</div>
                  <div className="heading-5">{results.alternate.expectedGPA}</div>
                  {results.alternate.expectedGPA > results.baseline.expectedGPA && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                      <TrendingUp size={14} color="#4ade80" />
                      <span className="caption" style={{ color: '#4ade80' }}>+{(results.alternate.expectedGPA - results.baseline.expectedGPA).toFixed(2)}</span>
                    </div>
                  )}
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                  <div className="caption" style={{ marginBottom: '4px' }}>Engagement</div>
                  <div className="heading-5">{results.alternate.engagementScore}%</div>
                  {results.alternate.engagementScore > results.baseline.engagementScore && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                      <TrendingUp size={14} color="#4ade80" />
                      <span className="caption" style={{ color: '#4ade80' }}>+{results.alternate.engagementScore - results.baseline.engagementScore}%</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Chart */}
          <div className="feature-card" style={{ borderRadius: '16px', padding: '32px', height: '400px' }}>
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
      
      {/* Key Insights */}
      <div style={{ 
        marginTop: '32px',
        padding: '24px',
        backgroundColor: 'var(--secondary-olive)',
        borderRadius: '12px'
      }}>
        <div className="caption" style={{ color: 'var(--brand-primary)', marginBottom: '12px' }}>KEY INSIGHT</div>
        <p className="body-medium" style={{ color: 'var(--text-white)' }}>
          {interventionTiming === 1 
            ? '🎯 Early intervention (Semester 1) shows maximum impact. Earlier = better outcomes.'
            : interventionTiming === 2
            ? '⚠️ Mid-term intervention still effective, but some opportunities already missed.'
            : '🚨 Late intervention (Semester 3) has reduced effectiveness. Early action is critical.'
          }
        </p>
      </div>
    </div>
  );
};
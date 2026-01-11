import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { CounterfactualDemo } from '../components/demos/CounterfactualDemo';
import { CausalChainDemo } from '../components/demos/CausalChainDemo';
import { SilentStudentDemo } from '../components/demos/SilentStudentDemo';
import { GitBranch, Brain, Bell } from 'lucide-react';

export const DemoPage = ({ judgeMode }) => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('feature') || 'counterfactual');

  useEffect(() => {
    const feature = searchParams.get('feature');
    if (feature) {
      setActiveTab(feature);
    }
  }, [searchParams]);

  return (
    <div className="animate-fade-in" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {judgeMode && (
              <div className="judge-mode-badge" style={{ marginBottom: '20px', display: 'inline-block' }}>
                🎯 INTERACTIVE DEMO
              </div>
            )}
            <h1 className="heading-1" style={{ marginBottom: '24px' }}>
              LIVE DEMO
            </h1>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              {judgeMode
                ? 'Fully interactive decision intelligence platform. All calculations run in real-time.'
                : 'Experience all three flagship features with interactive controls and real-time simulations.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Demo Tabs */}
      <section style={{ padding: '40px 0 120px' }}>
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 mb-12" style={{ 
              backgroundColor: 'transparent',
              height: 'auto',
              padding: 0
            }}>
              <TabsTrigger 
                value="counterfactual"
                className="data-[state=active]:bg-brand-primary"
                style={{
                  padding: '20px',
                  backgroundColor: activeTab === 'counterfactual' ? 'var(--brand-primary)' : 'var(--bg-card)',
                  color: activeTab === 'counterfactual' ? 'var(--text-inverse)' : 'var(--text-white)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                  <GitBranch size={20} />
                  <span>Counterfactual Analysis</span>
                </div>
              </TabsTrigger>
              
              <TabsTrigger 
                value="causal"
                style={{
                  padding: '20px',
                  backgroundColor: activeTab === 'causal' ? 'var(--brand-primary)' : 'var(--bg-card)',
                  color: activeTab === 'causal' ? 'var(--text-inverse)' : 'var(--text-white)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                  <Brain size={20} />
                  <span>Failure Chain Breaker</span>
                </div>
              </TabsTrigger>
              
              <TabsTrigger 
                value="silent"
                style={{
                  padding: '20px',
                  backgroundColor: activeTab === 'silent' ? 'var(--brand-primary)' : 'var(--bg-card)',
                  color: activeTab === 'silent' ? 'var(--text-inverse)' : 'var(--text-white)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                  <Bell size={20} />
                  <span>Silent Student Detector</span>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="counterfactual">
              <CounterfactualDemo judgeMode={judgeMode} />
            </TabsContent>

            <TabsContent value="causal">
              <CausalChainDemo judgeMode={judgeMode} />
            </TabsContent>

            <TabsContent value="silent">
              <SilentStudentDemo judgeMode={judgeMode} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

// Mock data for EduForesight AI Demo

export const studentProfiles = [
  {
    id: 'STU001',
    name: 'Priya Sharma',
    attendance: 65,
    gpa: 2.8,
    familyIncome: 25000,
    engagementScore: 45,
    complaintsCount: 1,
    mentorshipReceived: false,
    financialAidReceived: false,
    dropoutRisk: 78,
    silentStudentScore: 82
  },
  {
    id: 'STU002',
    name: 'Rahul Verma',
    attendance: 72,
    gpa: 3.1,
    familyIncome: 35000,
    engagementScore: 58,
    complaintsCount: 0,
    mentorshipReceived: false,
    financialAidReceived: true,
    dropoutRisk: 62,
    silentStudentScore: 75
  },
  {
    id: 'STU003',
    name: 'Ananya Patel',
    attendance: 55,
    gpa: 2.5,
    familyIncome: 18000,
    engagementScore: 32,
    complaintsCount: 0,
    mentorshipReceived: false,
    financialAidReceived: false,
    dropoutRisk: 85,
    silentStudentScore: 91
  }
];

export const causalChains = {
  STU001: {
    rootCause: 'Financial Stress',
    chain: [
      { stage: 'Financial Stress', impact: 90, description: 'Family income below poverty line' },
      { stage: 'Part-time Work', impact: 75, description: 'Working 20+ hours/week' },
      { stage: 'Low Attendance', impact: 65, description: 'Missing 35% of classes' },
      { stage: 'Academic Struggle', impact: 55, description: 'GPA declining steadily' },
      { stage: 'Disengagement', impact: 45, description: 'Low participation in activities' },
      { stage: 'Dropout Risk', impact: 78, description: 'High likelihood of dropout' }
    ],
    breakPoint: 'Financial Stress',
    intervention: 'Provide emergency financial aid + flexible class schedule'
  },
  STU002: {
    rootCause: 'Social Isolation',
    chain: [
      { stage: 'Social Isolation', impact: 70, description: 'No peer connections' },
      { stage: 'Low Engagement', impact: 58, description: 'Minimal participation' },
      { stage: 'Academic Anxiety', impact: 50, description: 'Fear of failure' },
      { stage: 'Attendance Drop', impact: 72, description: 'Irregular attendance' },
      { stage: 'Dropout Risk', impact: 62, description: 'Moderate risk level' }
    ],
    breakPoint: 'Social Isolation',
    intervention: 'Peer mentorship program + study groups'
  },
  STU003: {
    rootCause: 'Compound Stress',
    chain: [
      { stage: 'Financial + Academic Stress', impact: 95, description: 'Multiple stressors' },
      { stage: 'Mental Health Decline', impact: 85, description: 'Depression symptoms' },
      { stage: 'Complete Withdrawal', impact: 55, description: 'Very low attendance' },
      { stage: 'Silent Suffering', impact: 91, description: 'No help-seeking behavior' },
      { stage: 'Critical Dropout Risk', impact: 85, description: 'Urgent intervention needed' }
    ],
    breakPoint: 'Compound Stress',
    intervention: 'Comprehensive support: Financial aid + counseling + academic coaching'
  }
};

export const counterfactualScenarios = {
  baseline: {
    dropoutProbability: 78,
    expectedGPA: 2.8,
    engagementScore: 45,
    completionProbability: 22
  },
  interventions: {
    financialAid: {
      dropoutProbability: 52,
      expectedGPA: 3.2,
      engagementScore: 65,
      completionProbability: 48,
      description: 'Provide $5000 financial aid package'
    },
    mentorship: {
      dropoutProbability: 61,
      expectedGPA: 3.0,
      engagementScore: 58,
      completionProbability: 39,
      description: 'Assign dedicated mentor for 1 year'
    },
    combinedEarly: {
      dropoutProbability: 35,
      expectedGPA: 3.4,
      engagementScore: 75,
      completionProbability: 65,
      description: 'Financial aid + mentorship from semester 1'
    },
    combinedLate: {
      dropoutProbability: 48,
      expectedGPA: 3.1,
      engagementScore: 68,
      completionProbability: 52,
      description: 'Financial aid + mentorship from semester 3'
    },
    attendanceImprovement: {
      dropoutProbability: 58,
      expectedGPA: 3.1,
      engagementScore: 62,
      completionProbability: 42,
      description: 'Improve attendance by 15%'
    }
  }
};

export const silentStudents = [
  {
    id: 'STU003',
    name: 'Ananya Patel',
    silenceScore: 91,
    riskScore: 85,
    indicators: [
      { metric: 'Complaints Filed', value: 0, severity: 'high' },
      { metric: 'Help-Seeking', value: 5, severity: 'critical' },
      { metric: 'Social Interaction', value: 15, severity: 'high' },
      { metric: 'Participation', value: 32, severity: 'medium' }
    ],
    recommendation: 'Proactive outreach by counselor within 48 hours'
  },
  {
    id: 'STU001',
    name: 'Priya Sharma',
    silenceScore: 82,
    riskScore: 78,
    indicators: [
      { metric: 'Complaints Filed', value: 1, severity: 'medium' },
      { metric: 'Help-Seeking', value: 12, severity: 'high' },
      { metric: 'Social Interaction', value: 28, severity: 'medium' },
      { metric: 'Participation', value: 45, severity: 'low' }
    ],
    recommendation: 'Assign peer mentor + monitor weekly'
  },
  {
    id: 'STU002',
    name: 'Rahul Verma',
    silenceScore: 75,
    riskScore: 62,
    indicators: [
      { metric: 'Complaints Filed', value: 0, severity: 'high' },
      { metric: 'Help-Seeking', value: 18, severity: 'medium' },
      { metric: 'Social Interaction', value: 35, severity: 'low' },
      { metric: 'Participation', value: 58, severity: 'low' }
    ],
    recommendation: 'Include in study groups and social activities'
  }
];

export const interventionImpact = {
  financialAid: {
    costPerStudent: 5000,
    dropoutReduction: 26,
    roiMultiplier: 4.2,
    implementationTime: '2 weeks'
  },
  mentorship: {
    costPerStudent: 1200,
    dropoutReduction: 17,
    roiMultiplier: 3.8,
    implementationTime: '4 weeks'
  },
  earlyIntervention: {
    costPerStudent: 6200,
    dropoutReduction: 43,
    roiMultiplier: 6.5,
    implementationTime: '1 week'
  }
};

export const systemMetrics = {
  studentsAnalyzed: 12847,
  dropoutsDetected: 2156,
  interventionsDeployed: 1834,
  successRate: 73,
  avgCostSavings: 285000
};

// Calculation functions for interactive demos
export const calculateCounterfactual = (baselineStudent, interventionType, timing = 'early') => {
  const scenarios = counterfactualScenarios.interventions;
  const intervention = scenarios[interventionType] || scenarios.financialAid;
  
  // Adjust based on timing
  const timingMultiplier = timing === 'early' ? 1.2 : 0.9;
  
  return {
    dropoutProbability: Math.max(0, Math.min(100, 
      baselineStudent.dropoutRisk - (intervention.dropoutProbability * timingMultiplier / 10)
    )),
    expectedGPA: Math.min(4.0, 
      baselineStudent.gpa + ((intervention.expectedGPA - 2.8) * timingMultiplier)
    ),
    engagementScore: Math.min(100, 
      baselineStudent.engagementScore + ((intervention.engagementScore - 45) * timingMultiplier)
    ),
    completionProbability: Math.min(100, intervention.completionProbability * timingMultiplier)
  };
};

export const calculateRiskScore = (attendance, gpa, engagement, financialAid) => {
  const attendanceRisk = (100 - attendance) * 0.35;
  const gpaRisk = (4.0 - gpa) * 15;
  const engagementRisk = (100 - engagement) * 0.25;
  const financialRisk = financialAid ? 0 : 15;
  
  return Math.min(100, Math.round(attendanceRisk + gpaRisk + engagementRisk + financialRisk));
};

export const calculateSilenceScore = (complaints, helpSeeking, socialInteraction) => {
  const complaintFactor = (5 - complaints) * 15;
  const helpSeekingFactor = (50 - helpSeeking) * 0.8;
  const socialFactor = (100 - socialInteraction) * 0.4;
  
  return Math.min(100, Math.round(complaintFactor + helpSeekingFactor + socialFactor));
};

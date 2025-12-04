import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from 'shadcn';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'shadcn';
import { Badge } from 'shadcn';
import { CheckCircle2, Circle, AlertCircle, Calendar, Users, Target, TrendingUp, FileText } from 'lucide-react';

export default function NOWOperationalRoadmap() {
  const [selectedPhase, setSelectedPhase] = useState('phase1');

  // Team Structure Data
  const teamMembers = [
    {
      name: "Natalia",
      role: "CEO & Founder",
      responsibilities: ["Strategy & Vision", "Product Strategy", "Fundraising", "Legal/RGPD", "Budget Management", "Contractor Coordination", "Launch Operations"],
      avatar: "N"
    },
    {
      name: "Genia",
      role: "Fractional COO",
      responsibilities: ["Operations Management", "Process Optimization", "Team Coordination", "Execution Support", "Pilot Program Logistics"],
      avatar: "G"
    },
    {
      name: "Hitesh",
      role: "CTO",
      responsibilities: ["Tech Architecture", "Infrastructure", "Security", "Developer Management", "API Integrations"],
      avatar: "H"
    },
    {
      name: "Developers",
      role: "Development Team",
      responsibilities: ["MVP Development", "WA/Tel Integration", "Backend/Frontend", "Testing"],
      avatar: "DEV",
      reportsTo: "Hitesh"
    },
    {
      name: "Maria",
      role: "Medical and Scientific Director",
      responsibilities: ["5×5×5™ Validation", "Protocol Development", "AI Engine Allocation Testing", "Scientific Committee Management", "Scientific Partnerships", "White Paper / Publications", "Supervision Scientific Content"],
      avatar: "M"
    },
    {
      name: "Iva",
      role: "Marketing and Communication Director",
      responsibilities: ["Marketing Strategy", "Go-to-Market", "Brand Story Telling", "Product Marketing", "User Acquisition", "Team Management"],
      avatar: "I"
    },
    {
      name: "Polina",
      role: "Social Media Manager & UX/UI Designer",
      responsibilities: ["Social Media Content", "Instagram/LinkedIn", "UX/UI Design", "Brand Visual Identity"],
      avatar: "P",
      reportsTo: "Iva"
    }
  ];

  // Timeline Phases
  const phases = [
    {
      id: 'phase0',
      name: 'Phase 0: Foundation',
      dates: 'Dec 2-20, 2025 (Weeks 1-3)',
      goal: 'Set up infrastructure, Deploy AMU POC, Align Team, update Website and Com Plan',
      color: 'bg-blue-500',
      deliverables: [
        { text: 'Tech Architecture Document', owner: 'Hitesh', status: 'in-progress' },
        { text: 'MVP Technical Roadmap', owner: 'Hitesh', status: 'in-progress' },
        { text: 'Deploy AMU POC', owner: 'Hitesh', status: 'in-progress' },
        { text: 'Safety Guardrails Document', owner: 'Maria', status: 'in-progress' },
        { text: 'Marketing Strategy', owner: 'Iva', status: 'in-progress' },
        { text: 'Communication Plan', owner: 'Iva', status: 'in-progress' },
        { text: 'Website Update', owner: 'Iva/Polina', status: 'in-progress' },
        { text: 'Finalise Beta Testers Batch 2', owner: 'Natalia/Maria', status: 'in-progress' },
        { text: 'Contractor Agreements Finalized', owner: 'Natalia', status: 'in-progress' },
        { text: 'Budget Tracking Dashboard', owner: 'Natalia', status: 'in-progress' },
        { text: 'Strategic Round Table #1', owner: 'Natalia', status: 'in-progress' }
      ],
      metrics: [
        { label: 'Beta Testers (Batch 2)', target: '5 finalized', actual: 'TBD' },
        { label: 'Team Alignment', target: '100%', actual: 'TBD' },
        { label: 'Website Updated', target: 'Yes', actual: 'TBD' }
      ]
    },
    {
      id: 'phase1',
      name: 'Phase 1: MVP Build & Beta Testing',
      dates: 'Dec 21, 2025 - Feb 28, 2026 (Weeks 4-12)',
      goal: 'Build and test MVP with beta users, validate core features, clear path to IP patent',
      color: 'bg-purple-500',
      deliverables: [
        { text: 'Sprint 1: Assessment Bot + Payment', owner: 'Dev Team', status: 'not-started' },
        { text: 'Sprint 2: Daily Delivery + AI Q&A', owner: 'Dev Team', status: 'not-started' },
        { text: 'Sprint 3: Weekly Check-ins + Dashboard', owner: 'Dev Team', status: 'not-started' },
        { text: 'Recruit Beta Testers', owner: 'Natalia/Maria', status: 'not-started' },
        { text: 'AI Response Review (100% first 50 users)', owner: 'Maria', status: 'not-started' },
        { text: 'Instagram Content (60 posts)', owner: 'Polina', status: 'not-started' },
        { text: 'Manual Beta Delivery (10-15 users)', owner: 'Natalia/Maria', status: 'not-started' },
        { text: 'Beta Testing Logistics', owner: 'Genia/Maria', status: 'not-started' },
        { text: 'GDPR Privacy Policy + ToS', owner: 'Natalia', status: 'not-started' },
        { text: 'Grant Applications (relevant programs)', owner: 'Natalia', status: 'not-started' },
        { text: 'IP Lawyer Consultation', owner: 'Natalia', status: 'not-started' },
        { text: 'Scientific Advisor Agreements (IP Assignment)', owner: 'Natalia', status: 'not-started' },
        { text: 'MRS/MENQOL License Requests', owner: 'Natalia', status: 'not-started' },
        { text: 'Provisional Patent Filing (before March 5)', owner: 'Natalia', status: 'not-started' },
        { text: 'Seed Pitch Deck v1', owner: 'Natalia', status: 'not-started' },
        { text: 'Financial Model Draft', owner: 'Natalia', status: 'not-started' }
      ],
      metrics: [
        { label: 'Beta Testers', target: '10-15', actual: 'TBD' },
        { label: 'Week 8 Retention', target: '70%+', actual: 'TBD' },
        { label: 'Sprints Completed', target: '3/3', actual: 'TBD' },
        { label: 'Clear Path to IP Patent', target: 'Yes', actual: 'TBD' }
      ]
    },
    {
      id: 'phase2',
      name: 'Phase 2: Public Launch & Waiting List',
      dates: 'Mar 1-31, 2026 (Weeks 13-16)',
      goal: 'Public MVP launch (March 5), build waiting list of customers',
      color: 'bg-green-500',
      deliverables: [
        { text: 'MVP Public Launch (March 5, 2026)', owner: 'All Team', status: 'not-started' },
        { text: 'Admin Dashboard v2 (Retention Cohorts)', owner: 'Hitesh', status: 'not-started' },
        { text: 'Build Waiting List of Customers', owner: 'Iva/Polina', status: 'not-started' },
        { text: 'Scientific Pack for Investors (Draft)', owner: 'Maria', status: 'not-started' }
      ],
      metrics: [
        { label: 'Launch Date', target: 'March 5', actual: 'TBD' },
        { label: 'Waiting List', target: '50+ customers', actual: 'TBD' },
        { label: 'Month 3 Retention', target: '65%+', actual: 'TBD' }
      ]
    },
    {
      id: 'phase3',
      name: 'Phase 3: Scale to 50 & Seed Prep',
      dates: 'Apr-May 2026 (Weeks 17-24)',
      goal: 'Scale to 50 paying customers, finalize all docs for fundraising, demo ready',
      color: 'bg-orange-500',
      deliverables: [
        { text: 'Scientific Pack Finalized', owner: 'Maria', status: 'not-started' },
        { text: 'White Paper or Article Published', owner: 'Maria', status: 'not-started' },
        { text: 'Scientific Committee Fully Onboarded', owner: 'Maria', status: 'not-started' },
        { text: 'Demo Ready with Waiting List', owner: 'All Team', status: 'not-started' },
        { text: 'Full Patent Application (Post-Seed)', owner: 'Natalia', status: 'not-started' },
        { text: 'MRS/MENQOL Licenses Secured', owner: 'Natalia', status: 'not-started' },
        { text: 'Seed Pitch Deck Finalized', owner: 'Natalia', status: 'not-started' },
        { text: 'Data Room Complete (incl. IP docs)', owner: 'Genia', status: 'not-started' },
        { text: 'Financial Model Finalized', owner: 'Natalia', status: 'not-started' },
        { text: 'Grant Applications Follow-up', owner: 'Natalia', status: 'not-started' }
      ],
      metrics: [
        { label: 'Paying Customers', target: '50', actual: 'TBD' },
        { label: 'MRR', target: '€1,950', actual: 'TBD' },
        { label: 'Waiting List', target: '100+', actual: 'TBD' },
        { label: 'IP Patent Path', target: 'Clear & Filed', actual: 'TBD' },
        { label: 'Month 6 Retention', target: '60%+', actual: 'TBD' }
      ]
    },
    {
      id: 'phase4',
      name: 'Phase 4: Seed Fundraising',
      dates: 'April-June 2026 (Weeks 18-26)',
      goal: 'Close Seed round (€1-2M), secure 18-24 month runway',
      color: 'bg-pink-500',
      deliverables: [
        { text: 'VC Warm Intros (15-20 VCs)', owner: 'Natalia/Advisors', status: 'not-started' },
        { text: 'First-Round VC Meetings (10+)', owner: 'Natalia', status: 'not-started' },
        { text: 'Follow-Up Meetings & Due Diligence', owner: 'Natalia/Genia', status: 'not-started' },
        { text: 'Term Sheets Received', owner: 'Natalia', status: 'not-started' },
        { text: 'Seed Round Closed (€1-2M)', owner: 'Natalia', status: 'not-started' }
      ],
      metrics: [
        { label: 'Capital Raised', target: '€1-2M', actual: 'TBD' },
        { label: 'Runway Extended', target: '18-24 months', actual: 'TBD' },
        { label: 'Post-Money Valuation', target: '€8-12M', actual: 'TBD' }
      ]
    },
    {
      id: 'phase5',
      name: 'Phase 5: Series A Preparation',
      dates: 'Sept-Nov 2026 (Weeks 40-48)',
      goal: 'Build traction for Series A: 1,000 customers, B2B2C pilots',
      color: 'bg-indigo-500',
      deliverables: [
        { text: 'Scale to 1,000 Paying Customers', owner: 'Iva', status: 'not-started' },
        { text: 'B2B2C Pilot Program (5 Clinics)', owner: 'Maria/Natalia', status: 'not-started' },
        { text: 'Protocol Library v1 (Evidence-Based)', owner: 'Maria', status: 'not-started' },
        { text: 'Native Mobile App Launch', owner: 'Hitesh', status: 'not-started' },
        { text: 'Series A Pitch Materials', owner: 'Natalia', status: 'not-started' },
        { text: 'Series A VC Targeting', owner: 'Natalia/Advisors', status: 'not-started' }
      ],
      metrics: [
        { label: 'Paying Customers', target: '1,000', actual: 'TBD' },
        { label: 'MRR', target: '€39k', actual: 'TBD' },
        { label: 'ARR', target: '€468k', actual: 'TBD' },
        { label: 'B2B2C Revenue', target: '20%', actual: 'TBD' }
      ]
    }
  ];

  // Workstreams
  const workstreams = [
    {
      name: 'Product & Technology',
      owner: 'Hitesh',
      color: 'bg-blue-100 text-blue-800 border-blue-300',
      icon: '💻',
      team: ['Hitesh', 'Development Team', 'Maria (input)', 'Iva (input)', 'Polina (UX/UI)']
    },
    {
      name: 'Clinical & Scientific',
      owner: 'Maria',
      color: 'bg-green-100 text-green-800 border-green-300',
      icon: '🔬',
      team: ['Maria', 'Natalia', 'Scientific Committee', 'Scientific Partners']
    },
    {
      name: 'Go-to-Market & Growth',
      owner: 'Iva',
      color: 'bg-purple-100 text-purple-800 border-purple-300',
      icon: '📈',
      team: ['Iva', 'Polina', 'Natalia', 'Maria (content)', 'Hitesh (tech)']
    },
    {
      name: 'Operations & Launch Management',
      owner: 'Genia',
      color: 'bg-orange-100 text-orange-800 border-orange-300',
      icon: '⚙️',
      team: ['Genia', 'Natalia', 'Maria', 'All Team']
    },
    {
      name: 'Strategic Governance',
      owner: 'Natalia',
      color: 'bg-gray-100 text-gray-800 border-gray-300',
      icon: '🎯',
      team: ['Natalia', 'Genia', 'Jerome', 'Mehdi', 'Advisors']
    }
  ];

  // Success Metrics Timeline
  const metricsTimeline = [
    { phase: 'Phase 0 (Dec 20)', customers: '5 Beta (Batch 2)', mrr: 'Pre-revenue', retention: 'TBD', cac: 'Manual' },
    { phase: 'Phase 1 (Feb 28)', customers: '10-15 Beta', mrr: 'Pre-revenue', retention: '70%+ (W8)', cac: 'N/A' },
    { phase: 'Phase 2 (Mar 31)', customers: 'Waiting List', mrr: 'Post-Launch', retention: 'TBD', cac: 'TBD' },
    { phase: 'Phase 3 (May 31)', customers: '50 paying', mrr: '€1,950', retention: '60%+ (M6)', cac: '<€30' },
    { phase: 'Phase 4 (June 30)', customers: '50-75 paying', mrr: '€1,950-2,925', retention: '60%+ (M6)', cac: '<€30' }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'in-progress':
        return <Circle className="w-4 h-4 text-blue-600" />;
      case 'not-started':
        return <Circle className="w-4 h-4 text-gray-400" />;
      default:
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'not-started':
        return 'bg-gray-100 text-gray-600 border-gray-300';
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-gray-900">NOW for Women</h1>
          <h2 className="text-2xl font-semibold text-purple-600">Operational Roadmap & Team Workstreams</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            December 2025 - November 2026 | MVP Launch, Seed Fundraising & Series A Preparation
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="overview">
              <Target className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="team">
              <Users className="w-4 h-4 mr-2" />
              Team
            </TabsTrigger>
            <TabsTrigger value="timeline">
              <Calendar className="w-4 h-4 mr-2" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="workstreams">
              <FileText className="w-4 h-4 mr-2" />
              Workstreams
            </TabsTrigger>
            <TabsTrigger value="metrics">
              <TrendingUp className="w-4 h-4 mr-2" />
              Metrics
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mission Critical Goals (Dec 2025 - June 2026)</CardTitle>
                <CardDescription>Launch MVP, validate 3 core hypotheses, secure 24-month runway</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-600" />
                      Primary Objectives
                    </h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="font-semibold text-purple-900">1. Launch MVP (March 5)</div>
                        <div className="text-sm text-purple-700">Validated assessment engine, AI companion, 90-day programs</div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="font-semibold text-green-900">2. Validate 3 Hypotheses</div>
                        <div className="text-sm text-green-700">Technical (≥80% accuracy), Wellness (≥30% QoL improvement), Commercial (€39/month works)</div>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="font-semibold text-orange-900">3. Raise Seed Round</div>
                        <div className="text-sm text-orange-700">€1-2M by June 2026, secure 24-month runway</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      3 Core Validation Hypotheses
                    </h3>
                    <div className="space-y-3">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="font-semibold text-blue-900 text-sm mb-2">H1: Technical/Scientific Validation</div>
                        <div className="text-xs text-blue-700">AI assessment engine accurately maps perimenopause profiles with ≥80% confidence, validated by scientific committee</div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="font-semibold text-green-900 text-sm mb-2">H2: Wellness Impact Validation</div>
                        <div className="text-xs text-green-700">Women achieve ≥30% quality-of-life improvement following 90-day AI-guided programs</div>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="font-semibold text-purple-900 text-sm mb-2">H3: Commercial Thesis</div>
                        <div className="text-xs text-purple-700">Women pay €39/month and engage daily with AI companion (65%+ retention)</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      What We're Building (MVP Phase 1)
                    </h3>
                    <div className="space-y-2 mb-4">
                      {[
                        'Validated Assessment Engine (MRS + MENQOL + 5×5×5™)',
                        'Algorithm Testing Framework (AI vs. expert comparison)',
                        'Conversational AI Companion (WhatsApp/Telegram)',
                        '90-Day Personalized Programs (daily delivery)',
                        'Passive Data Capture (structured RWI)',
                        'Basic Engagement Loops (streaks, check-ins, progress)',
                        'Payment Integration (€39/month via Stripe)',
                        'Safety Protocols (screening, disclaimers, escalation)'
                      ].map((item, idx) => (
                        <div key={idx} className="text-xs bg-white p-2 rounded border border-gray-200 flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="font-semibold text-lg flex items-center gap-2 pt-4">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      Key Milestones
                    </h3>
                    <div className="space-y-3">
                      {phases.map((phase) => (
                        <div key={phase.id} className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-start justify-between mb-2">
                            <div className="font-semibold text-gray-900 text-sm">{phase.name}</div>
                            <div className={`w-3 h-3 rounded-full ${phase.color}`}></div>
                          </div>
                          <div className="text-xs text-gray-600 mb-2">{phase.dates}</div>
                          <div className="text-xs text-gray-700">{phase.goal}</div>
                        </div>
                      ))}
                      <div className="p-4 bg-amber-50 rounded-lg border-2 border-amber-300 shadow-sm">
                        <div className="flex items-start justify-between mb-2">
                          <div className="font-semibold text-gray-900 text-sm">Legal Review & IP Setup</div>
                          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">Dec 2025 - Feb 2026 (Ongoing)</div>
                        <div className="text-xs text-gray-700 mb-2">IP lawyer consultation, provisional patent filing (before March 5), Scientific Advisor Agreements, MRS/MENQOL licensing</div>
                        <div className="text-xs font-semibold text-amber-900 mt-2 pt-2 border-t border-amber-200">Key Actions:</div>
                        <div className="text-xs text-gray-700 space-y-1 mt-1">
                          <div>→ IP lawyer meeting (Dec 3-10)</div>
                          <div>→ Scientific Advisor Agreements signed (Dec 13)</div>
                          <div>→ MRS/MENQOL license quotes (Dec 20)</div>
                          <div>→ Provisional patent filed (before March 5, 2026)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-6 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">3</div>
                    <div className="text-sm text-gray-600 mt-1">Core Hypotheses</div>
                    <div className="text-xs text-gray-500 mt-1">Tech, Wellness, Commercial</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">8</div>
                    <div className="text-sm text-gray-600 mt-1">MVP Features</div>
                    <div className="text-xs text-gray-500 mt-1">Assessment, AI, Programs, Safety</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">Mar 5</div>
                    <div className="text-sm text-gray-600 mt-1">MVP Launch</div>
                    <div className="text-xs text-gray-500 mt-1">14 weeks from now</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">€1-2M</div>
                    <div className="text-sm text-gray-600 mt-1">Seed Target</div>
                    <div className="text-xs text-gray-500 mt-1">24-month runway</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600">✓</div>
                    <div className="text-sm text-gray-600 mt-1">IP Patent Path</div>
                    <div className="text-xs text-gray-500 mt-1">Clear strategy by Feb 2026</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600">50</div>
                    <div className="text-sm text-gray-600 mt-1">Customers by June</div>
                    <div className="text-xs text-gray-500 mt-1">€1,950 MRR</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Core Team Structure</CardTitle>
                <CardDescription>Roles, responsibilities, and collaboration matrix</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {teamMembers.map((member) => (
                    <Card key={member.name} className="border border-gray-200">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {member.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900">{member.name}</div>
                            <div className="text-sm text-purple-600 mb-1">{member.role}</div>
                            {member.reportsTo && (
                              <div className="text-xs text-gray-500 mb-2 italic">Reports to: {member.reportsTo}</div>
                            )}
                            <div className="space-y-1">
                              {member.responsibilities.map((resp, idx) => (
                                <div key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                                  <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>{resp}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Workstreams Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Workstream Ownership</CardTitle>
                <CardDescription>5 functional areas with clear accountability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workstreams.map((ws) => (
                    <div key={ws.name} className={`p-4 rounded-lg border ${ws.color}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{ws.icon}</span>
                          <div>
                            <div className="font-semibold">{ws.name}</div>
                            <div className="text-sm opacity-80">Owner: {ws.owner}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {ws.team.map((member, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {member}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Phase 1 Timeline Card */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-purple-200">
              <CardHeader>
                <CardTitle>Phase 1: 6-Month Journey (Dec 2025 - June 2026)</CardTitle>
                <CardDescription>From foundation to Seed round closure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Months 1-2 (Dec-Jan)</div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>• Foundation & beta testing</div>
                      <div>• Build MVP (3 sprints)</div>
                      <div>• 10-15 beta testers</div>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Months 3-4 (Feb-Mar)</div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>• Public launch (March 5)</div>
                      <div>• Scale to 50-75 customers</div>
                      <div>• Validate retention/CAC</div>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Months 5-6 (Apr-June)</div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>• Scale to 50 customers</div>
                      <div>• Close Seed (€1-2M)</div>
                      <div>• 18-24 month runway</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <div className="space-y-6">
              {phases.map((phase, idx) => (
                <Card key={phase.id} className="border-l-4" style={{ borderLeftColor: phase.color.replace('bg-', 'var(--') + ')' }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{phase.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {phase.dates}
                        </CardDescription>
                        <div className="mt-2 text-sm font-medium text-gray-700">
                          🎯 Goal: {phase.goal}
                        </div>
                      </div>
                      <div className={`w-8 h-8 rounded-full ${phase.color} text-white flex items-center justify-center font-bold flex-shrink-0`}>
                        {idx}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Deliverables */}
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-3">Key Deliverables</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <div key={idx} className={`p-3 rounded-lg border text-sm ${getStatusColor(deliverable.status)}`}>
                              <div className="flex items-start gap-2">
                                {getStatusIcon(deliverable.status)}
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium">{deliverable.text}</div>
                                  <div className="text-xs opacity-80 mt-1">Owner: {deliverable.owner}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div>
                        <h4 className="font-semibold text-sm text-gray-700 mb-3">Success Metrics</h4>
                        <div className="grid md:grid-cols-3 gap-3">
                          {phase.metrics.map((metric, idx) => (
                            <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                              <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
                              <div className="flex items-baseline gap-2">
                                <div className="font-bold text-lg text-gray-900">{metric.target}</div>
                                <div className="text-xs text-gray-500">target</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Workstreams Tab */}
          <TabsContent value="workstreams" className="space-y-6">
            {workstreams.map((ws) => (
              <Card key={ws.name}>
                <CardHeader className={`${ws.color} rounded-t-lg`}>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{ws.icon}</span>
                    <span>{ws.name}</span>
                  </CardTitle>
                  <CardDescription className="opacity-90">
                    Owner: <strong>{ws.owner}</strong> | Team: {ws.team.join(', ')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {/* Deliverables from all phases for this workstream */}
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-3">All Deliverables (Phase 1: Dec - June)</h4>
                      <div className="space-y-2">
                        {phases.flatMap(phase => 
                          phase.deliverables
                            .filter(d => d.owner.includes(ws.owner) || 
                                       (ws.owner === 'Natalia' && (d.owner.includes('Team') || d.owner.includes('Natalia'))) ||
                                       (ws.owner === 'Genia' && (d.owner.includes('Genia') || d.owner.includes('Team'))))
                            .map((deliverable, idx) => (
                              <div key={`${phase.id}-${idx}`} className={`p-3 rounded-lg border text-sm ${getStatusColor(deliverable.status)}`}>
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex items-start gap-2 flex-1">
                                    {getStatusIcon(deliverable.status)}
                                    <div>
                                      <div className="font-medium">{deliverable.text}</div>
                                      <div className="text-xs opacity-80 mt-1">{phase.name}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Metrics Tab */}
          <TabsContent value="metrics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Success Metrics Timeline</CardTitle>
                <CardDescription>Tracking progress from Phase 0 to Phase 4 (Dec 2025 - June 2026)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-3 font-semibold text-sm text-gray-700">Phase</th>
                        <th className="text-center p-3 font-semibold text-sm text-gray-700">Customers</th>
                        <th className="text-center p-3 font-semibold text-sm text-gray-700">MRR</th>
                        <th className="text-center p-3 font-semibold text-sm text-gray-700">Retention</th>
                        <th className="text-center p-3 font-semibold text-sm text-gray-700">CAC</th>
                      </tr>
                    </thead>
                    <tbody>
                      {metricsTimeline.map((milestone, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-3 font-medium text-sm">{milestone.phase}</td>
                          <td className="p-3 text-center">
                            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                              {milestone.customers}
                            </div>
                          </td>
                          <td className="p-3 text-center">
                            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                              {milestone.mrr}
                            </div>
                          </td>
                          <td className="p-3 text-center">
                            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                              {milestone.retention}
                            </div>
                          </td>
                          <td className="p-3 text-center">
                            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                              {milestone.cac}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* North Star KPIs */}
            <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl">North Star KPIs (Phase 1 Target: June 2026)</CardTitle>
                <CardDescription>Primary success metrics for Seed fundraising validation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Revenue Metrics */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-700 border-b pb-2">💰 Revenue Metrics</h3>
                    <div className="p-4 bg-green-50 rounded-lg border-2 border-green-300">
                      <div className="text-xs text-green-700 mb-1">Monthly Recurring Revenue</div>
                      <div className="text-3xl font-bold text-green-900">€1,950</div>
                      <div className="text-xs text-green-600 mt-1">Target: June 2026</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="text-xs text-purple-700 mb-1">Paying Customers (B2C)</div>
                      <div className="text-2xl font-bold text-purple-900">50</div>
                      <div className="text-xs text-purple-600 mt-1">€39/month subscription</div>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="text-xs text-orange-700 mb-1">ARR (Annual Run Rate)</div>
                      <div className="text-xl font-bold text-orange-900">€23.4k</div>
                      <div className="text-xs text-orange-600 mt-1">Based on €1,950 MRR</div>
                    </div>
                  </div>

                  {/* Engagement & Retention */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-700 border-b pb-2">📊 Engagement & Retention</h3>
                    <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
                      <div className="text-xs text-blue-700 mb-1">Month 6 Retention Rate</div>
                      <div className="text-3xl font-bold text-blue-900">≥60%</div>
                      <div className="text-xs text-blue-600 mt-1">Proves product stickiness</div>
                    </div>
                    <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                      <div className="text-xs text-pink-700 mb-1">Net Promoter Score (NPS)</div>
                      <div className="text-2xl font-bold text-pink-900">≥50</div>
                      <div className="text-xs text-pink-600 mt-1">World-class: >50 (Apple: 72)</div>
                    </div>
                    <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                      <div className="text-xs text-indigo-700 mb-1">Daily Active Usage Rate</div>
                      <div className="text-xl font-bold text-indigo-900">≥60%</div>
                      <div className="text-xs text-indigo-600 mt-1">Daily engagement with actions</div>
                    </div>
                  </div>

                  {/* Unit Economics & B2B2C */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-700 border-b pb-2">💼 Unit Economics & B2B2C</h3>
                    <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                      <div className="text-xs text-yellow-700 mb-1">Customer Acquisition Cost (CAC)</div>
                      <div className="text-3xl font-bold text-yellow-900">&lt;€30</div>
                      <div className="text-xs text-yellow-600 mt-1">HealthTech benchmark: €25-40</div>
                    </div>
                    <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                      <div className="text-xs text-teal-700 mb-1">LTV:CAC Ratio</div>
                      <div className="text-2xl font-bold text-teal-900">≥5:1</div>
                      <div className="text-xs text-teal-600 mt-1">€234 LTV / €30 CAC = 7.8:1</div>
                    </div>
                    <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                      <div className="text-xs text-cyan-700 mb-1">B2B2C Letters of Intent</div>
                      <div className="text-xl font-bold text-cyan-900">3 LOIs</div>
                      <div className="text-xs text-cyan-600 mt-1">2 fitness centers + 1 clinic</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* KPI Benchmarks Table */}
            <Card>
              <CardHeader>
                <CardTitle>Industry Benchmarks & Targets</CardTitle>
                <CardDescription>How NOW compares to HealthTech/FemTech standards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left p-3 font-semibold text-gray-700">KPI</th>
                        <th className="text-center p-3 font-semibold text-gray-700">NOW Target</th>
                        <th className="text-center p-3 font-semibold text-gray-700">Industry Benchmark</th>
                        <th className="text-center p-3 font-semibold text-gray-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-3 font-medium">CAC (Customer Acquisition Cost)</td>
                        <td className="p-3 text-center"><span className="px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full font-semibold">&lt;€30</span></td>
                        <td className="p-3 text-center text-gray-600">€25-40 (HealthTech apps)</td>
                        <td className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">On Target</span></td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-3 font-medium">Month 6 Retention Rate</td>
                        <td className="p-3 text-center"><span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full font-semibold">≥60%</span></td>
                        <td className="p-3 text-center text-gray-600">40-60% (HealthTech), 70%+ (best-in-class)</td>
                        <td className="p-3 text-center"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Ambitious</span></td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-3 font-medium">NPS (Net Promoter Score)</td>
                        <td className="p-3 text-center"><span className="px-3 py-1 bg-pink-100 text-pink-900 rounded-full font-semibold">≥50</span></td>
                        <td className="p-3 text-center text-gray-600">30-50 (HealthTech), 50+ (world-class)</td>
                        <td className="p-3 text-center"><span className="px-2 py-1 bg-pink-100 text-pink-800 rounded text-xs">World-Class</span></td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-3 font-medium">LTV:CAC Ratio</td>
                        <td className="p-3 text-center"><span className="px-3 py-1 bg-teal-100 text-teal-900 rounded-full font-semibold">≥5:1</span></td>
                        <td className="p-3 text-center text-gray-600">3:1 (viable), 5:1+ (excellent)</td>
                        <td className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Excellent</span></td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-3 font-medium">Daily Active Usage</td>
                        <td className="p-3 text-center"><span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full font-semibold">≥60%</span></td>
                        <td className="p-3 text-center text-gray-600">20-40% (wellness), 60%+ (habit-forming)</td>
                        <td className="p-3 text-center"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Best-in-Class</span></td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-3 font-medium">Free → Paid Conversion</td>
                        <td className="p-3 text-center"><span className="px-3 py-1 bg-green-100 text-green-900 rounded-full font-semibold">≥15%</span></td>
                        <td className="p-3 text-center text-gray-600">10-20% (freemium wellness)</td>
                        <td className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">On Target</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Additional Metrics */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic & Conversion Targets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Phase 1 Website Traffic</span>
                      <span className="font-bold text-blue-600">500 visitors</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Phase 3 Website Traffic</span>
                      <span className="font-bold text-blue-600">2,000 visitors</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Assessment Start Rate</span>
                      <span className="font-bold text-purple-600">&gt;25%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Assessment Completion</span>
                      <span className="font-bold text-purple-600">&gt;70%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Free → Paid Conversion</span>
                      <span className="font-bold text-green-600">&gt;15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Growth & Brand Targets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Instagram Followers (Phase 3)</span>
                      <span className="font-bold text-orange-600">1,500</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Press Hits (Phase 2-3)</span>
                      <span className="font-bold text-orange-600">3-5</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Influencer Partnerships</span>
                      <span className="font-bold text-orange-600">3-5</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">NPS Score (Phase 3)</span>
                      <span className="font-bold text-pink-600">&gt;50</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">VC Meetings (Phase 4)</span>
                      <span className="font-bold text-pink-600">15-20</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <div className="font-semibold text-gray-900">Weekly Rituals for Team Coordination</div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>📅 <strong>Monday 12pm CET:</strong> Week Kickoff (60 min) - Entire team</div>
                <div>📅 <strong>Daily 10am CET:</strong> Tech Standup (30 min) - Hitesh + Dev Team</div>
                <div>📅 <strong>Weekly 10am CET:</strong> Mkt & Com Standup (30 min) - Iva + Polina</div>
              </div>
              <div className="text-sm text-gray-600 space-y-1 mt-4 pt-3 border-t border-gray-300">
                <div className="font-medium text-gray-700 mb-2">1-on-1s:</div>
                <div>📅 <strong>Tuesday 12pm CET:</strong> Natalia / Maria</div>
                <div>📅 <strong>Wednesday 10am CET:</strong> Natalia / Hitesh</div>
                <div>📅 <strong>Every second Wednesday 12pm CET:</strong> Natalia / Genia</div>
                <div>📅 <strong>Thursday 12pm CET (60 min):</strong> Natalia, Iva, Polina</div>
              </div>
              <div className="text-sm text-gray-600 space-y-1 mt-4 pt-3 border-t border-gray-300">
                <div className="font-medium text-gray-700 mb-2">Strategic Reviews:</div>
                <div>📅 <strong>First Friday Monthly 10am CET:</strong> Strategic Round Table (60 min) - Natalia + Advisors, Mehdi</div>
                <div>📅 <strong>Quarterly:</strong> Strategic Round Tables</div>
                <div>📅 <strong>Quarterly:</strong> Scientific Committee Round Tables</div>
              </div>
              <div className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-300">
                Version 3.1 | Last Updated: December 3, 2025 | Phase 1: 6 months (Dec 2025 - June 2026) | MVP Launch: March 5, 2026
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
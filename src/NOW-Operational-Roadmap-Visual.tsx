// src/NOW-Operational-Roadmap-Visual.tsx
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { CheckCircle2, Circle, AlertCircle, Calendar, Users, Target, TrendingUp, FileText } from "lucide-react";

export default function NOWOperationalRoadmap() {
  // keep state but not used visibly; named with leading underscore to avoid warnings
  const [_selectedPhase, _setSelectedPhase] = useState("phase1");

  const colorMap: Record<string, string> = {
    "bg-blue-500": "#3b82f6",
    "bg-purple-500": "#8b5cf6",
    "bg-green-500": "#10b981",
    "bg-orange-500": "#fb923c",
    "bg-pink-500": "#ec4899",
    "bg-indigo-500": "#6366f1",
    "bg-blue-100": "#dbeafe",
    "bg-green-100": "#d1fae5",
    "bg-purple-100": "#f3e8ff",
    "bg-orange-100": "#fff7ed",
    "bg-gray-100": "#f3f4f6",
    "bg-amber-50": "#fffbeb",
  };

  const teamMembers = [
    { name: "Natalia", role: "CEO & Founder", responsibilities: ["Strategy & Vision", "Product Strategy", "Fundraising", "Legal/RGPD", "Budget Management", "Contractor Coordination", "Launch Operations"], avatar: "N" },
    { name: "Genia", role: "Fractional COO", responsibilities: ["Operations Management", "Process Optimization", "Team Coordination", "Execution Support", "Pilot Program Logistics"], avatar: "G" },
    { name: "Hitesh", role: "CTO", responsibilities: ["Tech Architecture", "Infrastructure", "Security", "Developer Management", "API Integrations"], avatar: "H" },
    { name: "Developers", role: "Development Team", responsibilities: ["MVP Development", "WA/Tel Integration", "Backend/Frontend", "Testing"], avatar: "DEV", reportsTo: "Hitesh" },
    { name: "Maria", role: "Medical and Scientific Director", responsibilities: ["5×5×5™ Validation", "Protocol Development", "AI Engine Allocation Testing", "Scientific Committee Management", "Scientific Partnerships", "White Paper / Publications", "Supervision Scientific Content"], avatar: "M" },
    { name: "Iva", role: "Marketing and Communication Director", responsibilities: ["Marketing Strategy", "Go-to-Market", "Brand Story Telling", "Product Marketing", "User Acquisition", "Team Management"], avatar: "I" },
    { name: "Polina", role: "Social Media Manager & UX/UI Designer", responsibilities: ["Social Media Content", "Instagram/LinkedIn", "UX/UI Design", "Brand Visual Identity"], avatar: "P", reportsTo: "Iva" }
  ];

  const phases = [
    { id: "phase0", name: "Phase 0: Foundation", dates: "Dec 2-20, 2025 (Weeks 1-3)", goal: "Set up infrastructure, Deploy AMU POC, Align Team, update Website and Com Plan", color: "bg-blue-500", deliverables: [ { text: "Tech Architecture Document", owner: "Hitesh", status: "in-progress" }, { text: "MVP Technical Roadmap", owner: "Hitesh", status: "in-progress" }, { text: "Deploy AMU POC", owner: "Hitesh", status: "in-progress" } ], metrics: [ { label: "Beta Testers (Batch 2)", target: "5 finalized", actual: "TBD" } ] },
    { id: "phase1", name: "Phase 1: MVP Build & Beta Testing", dates: "Dec 21, 2025 - Feb 28, 2026 (Weeks 4-12)", goal: "Build and test MVP with beta users, validate core features, clear path to IP patent", color: "bg-purple-500", deliverables: [ { text: "Sprint 1: Assessment Bot + Payment", owner: "Dev Team", status: "not-started" } ], metrics: [ { label: "Beta Testers", target: "10-15", actual: "TBD" } ] },
    { id: "phase2", name: "Phase 2: Public Launch & Waiting List", dates: "Mar 1-31, 2026 (Weeks 13-16)", goal: "Public MVP launch (March 5), build waiting list of customers", color: "bg-green-500", deliverables: [ { text: "MVP Public Launch (March 5, 2026)", owner: "All Team", status: "not-started" } ], metrics: [ { label: "Launch Date", target: "March 5", actual: "TBD" } ] }
  ];

  const metricsTimeline = [
    { phase: "Phase 0 (Dec 20)", customers: "5 Beta (Batch 2)", mrr: "Pre-revenue", retention: "TBD", cac: "Manual" },
    { phase: "Phase 1 (Feb 28)", customers: "10-15 Beta", mrr: "Pre-revenue", retention: "70%+ (W8)", cac: "N/A" },
    { phase: "Phase 2 (Mar 31)", customers: "Waiting List", mrr: "Post-Launch", retention: "TBD", cac: "TBD" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case "in-progress": return <Circle className="w-4 h-4 text-blue-600" />;
      case "not-started": return <Circle className="w-4 h-4 text-gray-400" />;
      default: return <AlertCircle className="w-4 h-4 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 border-green-300";
      case "in-progress": return "bg-blue-100 text-blue-800 border-blue-300";
      case "not-started": return "bg-gray-100 text-gray-600 border-gray-300";
      default: return "bg-yellow-100 text-yellow-800 border-yellow-300";
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-gray-900">NOW for Women</h1>
          <h2 className="text-2xl font-semibold text-purple-600">Operational Roadmap & Team Workstreams</h2>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="overview"><Target className="w-4 h-4 mr-2" />Overview</TabsTrigger>
            <TabsTrigger value="team"><Users className="w-4 h-4 mr-2" />Team</TabsTrigger>
            <TabsTrigger value="timeline"><Calendar className="w-4 h-4 mr-2" />Timeline</TabsTrigger>
            <TabsTrigger value="workstreams"><FileText className="w-4 h-4 mr-2" />Workstreams</TabsTrigger>
            <TabsTrigger value="metrics"><TrendingUp className="w-4 h-4 mr-2" />Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Mission Critical Goals</CardTitle>
                <CardDescription>Launch MVP, validate 3 core hypotheses, secure runway</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 font-semibold text-purple-900">1. Launch MVP (March 5)</div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 font-semibold text-blue-900">H1: Technical/Scientific Validation</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Core Team Structure</CardTitle>
                <CardDescription>Roles and responsibilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {teamMembers.map((member) => (
                    <Card key={member.name} className="border border-gray-200">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">{member.avatar}</div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">{member.name}</div>
                            <div className="text-sm text-purple-600 mb-1">{member.role}</div>
                            <div className="space-y-1">
                              {member.responsibilities.map((resp, idx) => (
                                <div key={idx} className="text-xs text-gray-600 flex gap-1">
                                  <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5" />
                                  {resp}
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
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            {phases.map((phase, idx) => (
              <Card key={phase.id} className="border-l-4" style={{ borderLeftColor: colorMap[phase.color] || "#e5e7eb" }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{phase.name}</CardTitle>
                      <CardDescription>{phase.dates}</CardDescription>
                      <div className="mt-2 text-sm font-medium text-gray-700">🎯 Goal: {phase.goal}</div>
                    </div>
                    <div className={`w-8 h-8 rounded-full ${phase.color} text-white flex items-center justify-center font-bold`}>{idx}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-3">Key Deliverables</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.deliverables.map((d, i) => (
                        <div key={i} className={`p-3 rounded-lg border text-sm ${getStatusColor(d.status)}`}>
                          <div className="flex items-start gap-2">
                            {getStatusIcon(d.status)}
                            <div>
                              <div className="font-medium">{d.text}</div>
                              <div className="text-xs opacity-80 mt-1">Owner: {d.owner}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="metrics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Success Metrics Timeline</CardTitle>
                <CardDescription>Tracking progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-3 font-semibold">Phase</th>
                        <th className="text-center p-3 font-semibold">Customers</th>
                        <th className="text-center p-3 font-semibold">MRR</th>
                        <th className="text-center p-3 font-semibold">Retention</th>
                        <th className="text-center p-3 font-semibold">CAC</th>
                      </tr>
                    </thead>
                    <tbody>
                      {metricsTimeline.map((m, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                          <td className="p-3 font-medium">{m.phase}</td>
                          <td className="p-3 text-center"><span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-semibold">{m.customers}</span></td>
                          <td className="p-3 text-center"><span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">{m.mrr}</span></td>
                          <td className="p-3 text-center"><span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">{m.retention}</span></td>
                          <td className="p-3 text-center"><span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full font-semibold">{m.cac}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

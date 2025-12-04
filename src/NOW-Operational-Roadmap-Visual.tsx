// src/NOW-Operational-Roadmap-Visual.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Badge } from "./components/ui/badge";
import { CheckCircle2, Circle, AlertCircle, Calendar, Users, Target, TrendingUp, FileText } from "lucide-react";

export default function NOWOperationalRoadmap() {
  // Data
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
    { id: "phase0", name: "Phase 0: Foundation", dates: "Dec 2-20, 2025", goal: "Set up infra, deploy POC, align team", color: "bg-blue-500", deliverables: [{ text: "Tech Architecture Document", owner: "Hitesh", status: "in-progress" }, { text: "MVP Technical Roadmap", owner: "Hitesh", status: "in-progress" }] , metrics: [{ label: "Beta Testers", target: "5", actual: "TBD" }] },
    { id: "phase1", name: "Phase 1: MVP Build & Beta Testing", dates: "Dec 21, 2025 - Feb 28, 2026", goal: "Build MVP, validate features", color: "bg-purple-500", deliverables: [{ text: "Sprint 1: Assessment Bot + Payment", owner: "Dev Team", status: "not-started" }], metrics: [{ label: "Beta Testers", target: "10-15", actual: "TBD" }] },
    { id: "phase2", name: "Phase 2: Public Launch & Waiting List", dates: "Mar 1-31, 2026", goal: "Launch MVP publicly and collect waiting list", color: "bg-green-500", deliverables: [{ text: "MVP Public Launch (March 5)", owner: "All Team", status: "not-started" }], metrics: [{ label: "Waiting List", target: "50+", actual: "TBD" }] }
  ];

  const workstreams = [
    { name: "Product & Technology", owner: "Hitesh", color: "bg-blue-100 text-blue-800 border-blue-300", icon: "💻", team: ["Hitesh", "Developers", "Maria (input)", "Iva (input)", "Polina (UX/UI)"] },
    { name: "Clinical & Scientific", owner: "Maria", color: "bg-green-100 text-green-800 border-green-300", icon: "🔬", team: ["Maria", "Natalia", "Scientific Committee"] },
    { name: "Go-to-Market & Growth", owner: "Iva", color: "bg-purple-100 text-purple-800 border-purple-300", icon: "📈", team: ["Iva", "Polina", "Natalia"] },
    { name: "Operations & Launch", owner: "Genia", color: "bg-orange-100 text-orange-800 border-orange-300", icon: "⚙️", team: ["Genia", "Natalia", "All Team"] },
    { name: "Strategic Governance", owner: "Natalia", color: "bg-gray-100 text-gray-800 border-gray-300", icon: "🎯", team: ["Natalia", "Genia", "Advisors"] }
  ];

  const metricsTimeline = [
    { phase: "Phase 0 (Dec 20)", customers: "5 Beta", mrr: "Pre-revenue", retention: "TBD", cac: "Manual" },
    { phase: "Phase 1 (Feb 28)", customers: "10-15 Beta", mrr: "Pre-revenue", retention: "70%+ (W8)", cac: "N/A" },
    { phase: "Phase 2 (Mar 31)", customers: "Waiting List", mrr: "Post-Launch", retention: "TBD", cac: "TBD" }
  ];

  // Helpers
  const getStatusIcon = (status: string) => {
    if (status === "completed") return <CheckCircle2 className="w-4 h-4 text-green-600" />;
    if (status === "in-progress") return <Circle className="w-4 h-4 text-blue-600" />;
    if (status === "not-started") return <Circle className="w-4 h-4 text-gray-400" />;
    return <AlertCircle className="w-4 h-4 text-yellow-600" />;
  };

  const getStatusColor = (status: string) => {
    if (status === "completed") return "bg-green-100 text-green-800 border-green-300";
    if (status === "in-progress") return "bg-blue-100 text-blue-800 border-blue-300";
    if (status === "not-started") return "bg-gray-100 text-gray-600 border-gray-300";
    return "bg-yellow-100 text-yellow-800 border-yellow-300";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">NOW for Women</h1>
          <p className="mt-2 text-lg text-purple-600 font-semibold">Operational Roadmap & Team Workstreams</p>
          <p className="text-sm text-gray-600 mt-1">December 2025 - November 2026 | MVP Launch, Seed Fundraising & Series A Prep</p>
        </header>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-5 gap-2 bg-white shadow-sm rounded-lg p-2">
            <TabsTrigger value="overview" className="flex items-center gap-2 justify-center py-2 rounded">
              <Target className="w-4 h-4" /> Overview
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2 justify-center py-2 rounded">
              <Users className="w-4 h-4" /> Team
            </TabsTrigger>
            <TabsTrigger value="timeline" className="flex items-center gap-2 justify-center py-2 rounded">
              <Calendar className="w-4 h-4" /> Timeline
            </TabsTrigger>
            <TabsTrigger value="workstreams" className="flex items-center gap-2 justify-center py-2 rounded">
              <FileText className="w-4 h-4" /> Workstreams
            </TabsTrigger>
            <TabsTrigger value="metrics" className="flex items-center gap-2 justify-center py-2 rounded">
              <TrendingUp className="w-4 h-4" /> Metrics
            </TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview">
            <Card className="mt-4">
              <CardHeader className="flex items-center justify-between">
                <div>
                  <CardTitle>Mission Critical Goals (Dec 2025 - June 2026)</CardTitle>
                  <CardDescription>Launch MVP, validate core hypotheses, secure runway</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">MVP Launch</div>
                  <div className="text-2xl font-bold text-green-600">Mar 5</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-white to-purple-50 rounded-lg border border-purple-100">
                    <div className="font-semibold text-purple-900">Primary Objectives</div>
                    <ul className="mt-2 text-sm text-gray-700 space-y-2">
                      <li>• Launch MVP (Mar 5)</li>
                      <li>• Validate technical & wellness hypotheses</li>
                      <li>• Prepare seed fundraising</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-gray-100">
                    <div className="font-semibold text-gray-900 mb-2">What We're Building</div>
                    <div className="space-y-2 text-sm text-gray-700">
                      {[
                        "Validated Assessment Engine (MRS + MENQOL + 5×5×5™)",
                        "Conversational AI Companion (WhatsApp/Telegram)",
                        "90-Day Personalized Programs (daily delivery)",
                        "Payment Integration (€39/month via Stripe)",
                        "Safety Protocols & Escalation"
                      ].map((t, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1" />
                          <div>{t}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-gray-100">
                    <div className="font-semibold text-gray-900 mb-2">Key Milestones</div>
                    <div className="space-y-2 text-sm text-gray-700">
                      {phases.map((p) => (
                        <div key={p.id} className="p-2 rounded border border-gray-100 bg-gray-50">
                          <div className="font-medium text-sm">{p.name}</div>
                          <div className="text-xs text-gray-500">{p.dates}</div>
                          <div className="text-xs text-gray-700 mt-1">{p.goal}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-4">
              <Card>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-purple-600">3</div>
                  <div className="text-sm text-gray-600 mt-1">Core Hypotheses</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-blue-600">8</div>
                  <div className="text-sm text-gray-600 mt-1">MVP Features</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-green-600">Mar 5</div>
                  <div className="text-sm text-gray-600 mt-1">MVP Launch</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-orange-600">€1-2M</div>
                  <div className="text-sm text-gray-600 mt-1">Seed Target</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-amber-600">✓</div>
                  <div className="text-sm text-gray-600 mt-1">IP Path</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-pink-600">50</div>
                  <div className="text-sm text-gray-600 mt-1">Customers by June</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Team */}
          <TabsContent value="team">
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {teamMembers.map((m) => (
                <Card key={m.name} className="border">
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">{m.avatar}</div>
                      <div>
                        <div className="font-semibold text-gray-900">{m.name}</div>
                        <div className="text-sm text-purple-600">{m.role}</div>
                        <div className="mt-2 text-xs text-gray-600 space-y-1">
                          {m.responsibilities.map((r, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 text-green-600 mt-1" />
                              <span>{r}</span>
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

          {/* Timeline */}
          <TabsContent value="timeline">
            <div className="space-y-4 mt-4">
              {phases.map((phase, idx) => (
                <Card key={phase.id} className="border-l-4" style={{ borderLeftColor: idx === 0 ? "#3b82f6" : idx === 1 ? "#8b5cf6" : "#10b981" }}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{phase.name}</CardTitle>
                        <CardDescription>{phase.dates}</CardDescription>
                        <div className="text-sm text-gray-700 mt-2">{phase.goal}</div>
                      </div>
                      <div className="text-sm font-bold text-white rounded-full w-8 h-8 flex items-center justify-center" style={{ backgroundColor: idx === 0 ? "#3b82f6" : idx === 1 ? "#8b5cf6" : "#10b981" }}>{idx + 1}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Deliverables</h4>
                        <div className="space-y-2">
                          {phase.deliverables.map((d, i) => (
                            <div key={i} className={`p-3 rounded-lg border ${getStatusColor(d.status)}`}>
                              <div className="flex items-start gap-3">
                                {getStatusIcon(d.status)}
                                <div>
                                  <div className="font-medium">{d.text}</div>
                                  <div className="text-xs text-gray-500 mt-1">Owner: {d.owner}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Metrics</h4>
                        <div className="space-y-2">
                          {phase.metrics.map((m, i) => (
                            <div key={i} className="p-3 bg-gray-50 rounded border">
                              <div className="text-xs text-gray-600">{m.label}</div>
                              <div className="font-bold">{m.target}</div>
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

          {/* Workstreams */}
          <TabsContent value="workstreams">
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {workstreams.map((ws) => (
                <Card key={ws.name}>
                  <CardHeader className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{ws.icon}</div>
                      <div>
                        <CardTitle className="text-base">{ws.name}</CardTitle>
                        <CardDescription className="text-xs">Owner: <strong>{ws.owner}</strong></CardDescription>
                      </div>
                    </div>
                    <div className="text-sm">{ws.team.length} members</div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {ws.team.map((t, i) => <Badge key={i} className="bg-gray-100">{t}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Metrics */}
          <TabsContent value="metrics">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Success Metrics Timeline</CardTitle>
                <CardDescription>Key targets for MVP and Seed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full table-auto text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3">Phase</th>
                        <th className="text-center p-3">Customers</th>
                        <th className="text-center p-3">MRR</th>
                        <th className="text-center p-3">Retention</th>
                        <th className="text-center p-3">CAC</th>
                      </tr>
                    </thead>
                    <tbody>
                      {metricsTimeline.map((m, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50">
                          <td className="p-3">{m.phase}</td>
                          <td className="p-3 text-center"><span className="px-3 py-1 bg-purple-100 rounded-full">{m.customers}</span></td>
                          <td className="p-3 text-center"><span className="px-3 py-1 bg-green-100 rounded-full">{m.mrr}</span></td>
                          <td className="p-3 text-center"><span className="px-3 py-1 bg-blue-100 rounded-full">{m.retention}</span></td>
                          <td className="p-3 text-center"><span className="px-3 py-1 bg-orange-100 rounded-full">{m.cac}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-6">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent>
              <div className="text-center">
                <div className="font-semibold">Weekly Rituals for Team Coordination</div>
                <div className="text-sm text-gray-600 mt-2">Mon 12pm CET - Week Kickoff | Daily 10am CET - Tech Standup | Weekly 10am - Mkt & Com</div>
                <div className="text-xs text-gray-500 mt-4">Version 3.1 | Last Updated: Dec 3, 2025</div>
              </div>
            </CardContent>
          </Card>
        </footer>
      </div>
    </div>
  );
}

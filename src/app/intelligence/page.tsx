"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function IntelligencePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDocument, setSelectedDocument] = useState(null)

  const documents = [
    {
      id: 1,
      title: "Corporate-Government Collusion Evidence",
      category: "Corruption",
      status: "verified",
      sensitivity: "high",
      date: "2024-01-15",
      source: "Whistleblower_Alpha",
      verificationScore: 95,
      description: "Internal communications revealing coordinated policy manipulation between major corporations and government officials.",
      tags: ["corporate-influence", "policy-manipulation", "verified"],
      downloads: 1247
    },
    {
      id: 2,
      title: "Disinformation Network Analysis",
      category: "Propaganda",
      status: "verified",
      sensitivity: "medium",
      date: "2024-01-10",
      source: "Research_Team_Beta",
      verificationScore: 88,
      description: "Comprehensive mapping of coordinated disinformation campaigns across social media platforms.",
      tags: ["disinformation", "social-media", "network-analysis"],
      downloads: 892
    },
    {
      id: 3,
      title: "Surveillance Program Leak",
      category: "Privacy",
      status: "pending",
      sensitivity: "high",
      date: "2024-01-12",
      source: "Anonymous_Source",
      verificationScore: 72,
      description: "Classified documents detailing unauthorized citizen surveillance programs.",
      tags: ["surveillance", "privacy", "classified", "pending-review"],
      downloads: 0
    },
    {
      id: 4,
      title: "Financial Crime Network Map",
      category: "Financial",
      status: "verified",
      sensitivity: "high",
      date: "2024-01-08",
      source: "Financial_Investigator",
      verificationScore: 91,
      description: "Detailed analysis of offshore financial networks used for tax evasion and money laundering.",
      tags: ["financial-crime", "offshore", "money-laundering"],
      downloads: 634
    }
  ]

  const networkNodes = [
    { id: 1, name: "MegaCorp Industries", type: "corporation", connections: 12, influence: 95 },
    { id: 2, name: "Senator James Wilson", type: "politician", connections: 8, influence: 78 },
    { id: 3, name: "Central Bank Official", type: "financial", connections: 15, influence: 85 },
    { id: 4, name: "Media Conglomerate X", type: "media", connections: 22, influence: 82 },
    { id: 5, name: "Defense Contractor Alpha", type: "military", connections: 9, influence: 77 }
  ]

  const submissionQueue = [
    {
      id: 1,
      title: "New Environmental Cover-up",
      submitter: "GreenWatch_42",
      status: "review",
      priority: "high",
      submitted: "2 hours ago"
    },
    {
      id: 2,
      title: "Pharmaceutical Price Fixing",
      submitter: "MedWhistle",
      status: "verification",
      priority: "medium",
      submitted: "6 hours ago"
    },
    {
      id: 3,
      title: "Tech Giant Data Breach",
      submitter: "TechInsider_99",
      status: "pending",
      priority: "low",
      submitted: "1 day ago"
    }
  ]

  const filteredDocuments = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="flex-1 space-y-6 p-6 overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Intelligence Hub</h1>
          <p className="text-muted-foreground">
            Verified documents, evidence, and network analysis center
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-green-400 border-green-400">
            {documents.filter(d => d.status === 'verified').length} VERIFIED
          </Badge>
          <Button>
            📤 Submit Evidence
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <span className="text-2xl">📊</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documents.length}</div>
            <p className="text-xs text-muted-foreground">
              {documents.filter(d => d.status === 'verified').length} verified
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network Nodes</CardTitle>
            <span className="text-2xl">🕸️</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{networkNodes.length}</div>
            <p className="text-xs text-muted-foreground">
              Power structure entities
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <span className="text-2xl">⏳</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{submissionQueue.length}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting verification
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
            <span className="text-2xl">⬇️</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {documents.reduce((sum, doc) => sum + doc.downloads, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Total access count
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="documents" className="space-y-4">
        <TabsList>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="network">Network Map</TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="documents" className="space-y-4">
          {/* Search and Filters */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input 
                placeholder="Search documents, categories, or tags..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="corruption">Corruption</SelectItem>
                <SelectItem value="propaganda">Propaganda</SelectItem>
                <SelectItem value="privacy">Privacy</SelectItem>
                <SelectItem value="financial">Financial</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="review">Under Review</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Documents List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredDocuments.map((doc) => (
              <Card key={doc.id} className="cursor-pointer hover:bg-secondary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant={doc.status === 'verified' ? 'default' : 'secondary'}
                      className={doc.status === 'verified' ? 'bg-green-600' : ''}
                    >
                      {doc.status.toUpperCase()}
                    </Badge>
                    <Badge 
                      variant={doc.sensitivity === 'high' ? 'destructive' : 'outline'}
                    >
                      {doc.sensitivity.toUpperCase()}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Category:</span>
                      <span>{doc.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Source:</span>
                      <span>{doc.source}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Verification:</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={doc.verificationScore} className="w-20 h-2" />
                        <span>{doc.verificationScore}%</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {doc.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-muted-foreground">{doc.date}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">
                          {doc.downloads} downloads
                        </span>
                        <Button size="sm" variant="outline">
                          🔍 View
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="network" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Power Structure Network</CardTitle>
              <CardDescription>
                Interactive visualization of connections between key entities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Network Visualization Placeholder */}
                <div className="h-96 bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center space-y-2">
                    <span className="text-4xl">🕸️</span>
                    <p className="text-muted-foreground">Interactive Network Map</p>
                    <p className="text-sm text-muted-foreground">
                      Visualizing {networkNodes.length} entities and their interconnections
                    </p>
                  </div>
                </div>

                {/* Network Nodes List */}
                <div className="space-y-2">
                  <h4 className="font-medium">Key Network Entities</h4>
                  {networkNodes.map((node) => (
                    <div key={node.id} className="flex items-center justify-between p-3 rounded-lg border border-border/40">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          node.type === 'corporation' ? 'bg-blue-500' :
                          node.type === 'politician' ? 'bg-red-500' :
                          node.type === 'financial' ? 'bg-green-500' :
                          node.type === 'media' ? 'bg-purple-500' : 'bg-orange-500'
                        }`} />
                        <div>
                          <span className="font-medium">{node.name}</span>
                          <p className="text-xs text-muted-foreground capitalize">{node.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-muted-foreground">
                          {node.connections} connections
                        </span>
                        <div className="flex items-center space-x-1">
                          <Progress value={node.influence} className="w-16 h-2" />
                          <span>{node.influence}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="submissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Whistleblower Submissions</CardTitle>
              <CardDescription>
                Documents and evidence awaiting verification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {submissionQueue.map((submission) => (
                  <div key={submission.id} className="flex items-center justify-between p-4 rounded-lg border border-border/40">
                    <div className="space-y-1">
                      <h4 className="font-medium">{submission.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Submitted by: {submission.submitter} • {submission.submitted}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge 
                        variant={
                          submission.priority === 'high' ? 'destructive' :
                          submission.priority === 'medium' ? 'default' : 'outline'
                        }
                      >
                        {submission.priority.toUpperCase()}
                      </Badge>
                      <Badge variant="secondary">
                        {submission.status.toUpperCase()}
                      </Badge>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Document Categories</CardTitle>
                <CardDescription>Distribution by topic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['Corruption', 'Propaganda', 'Privacy', 'Financial'].map((category) => {
                    const count = documents.filter(d => d.category === category).length
                    const percentage = Math.round((count / documents.length) * 100)
                    return (
                      <div key={category} className="flex items-center justify-between">
                        <span className="text-sm">{category}</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={percentage} className="w-20 h-2" />
                          <span className="text-xs w-8">{count}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Verification Status</CardTitle>
                <CardDescription>Document processing pipeline</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['Verified', 'Pending', 'Review'].map((status) => {
                    const count = documents.filter(d => d.status.toLowerCase() === status.toLowerCase()).length
                    const percentage = Math.round((count / documents.length) * 100)
                    return (
                      <div key={status} className="flex items-center justify-between">
                        <span className="text-sm">{status}</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={percentage} className="w-20 h-2" />
                          <span className="text-xs w-8">{count}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
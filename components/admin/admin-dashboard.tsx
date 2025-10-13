"use client"

import { useState } from "react"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Users, ShoppingCart, DollarSign, TrendingUp, Calendar, FileText, Settings, BarChart3 } from "lucide-react"

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = {
    totalUsers: 12847,
    activeSubscriptions: 3421,
    monthlyRevenue: 45230,
    pendingOrders: 89,
    totalBookings: 234,
    blogPosts: 156,
  }

  const recentOrders = [
    { id: "ORD-001", customer: "Sarah Johnson", amount: 99, status: "completed", date: "2024-01-15" },
    { id: "ORD-002", customer: "Michael Chen", amount: 149, status: "pending", date: "2024-01-15" },
    { id: "ORD-003", customer: "Emma Davis", amount: 249, status: "completed", date: "2024-01-14" },
    { id: "ORD-004", customer: "James Wilson", amount: 89, status: "processing", date: "2024-01-14" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">Manage your AstroKalki platform</p>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {[
          { id: "overview", label: "Overview", icon: BarChart3 },
          { id: "users", label: "Users", icon: Users },
          { id: "orders", label: "Orders", icon: ShoppingCart },
          { id: "bookings", label: "Bookings", icon: Calendar },
          { id: "content", label: "Content", icon: FileText },
          { id: "settings", label: "Settings", icon: Settings },
        ].map((tab) => {
          const Icon = tab.icon
          return (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className="flex-shrink-0"
            >
              <Icon className="mr-2 h-4 w-4" />
              {tab.label}
            </Button>
          )
        })}
      </div>

      {activeTab === "overview" && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <span className="text-sm text-green-500 font-medium">+12.5%</span>
              </div>
              <h3 className="text-sm text-muted-foreground mb-1">Total Users</h3>
              <p className="text-3xl font-bold">{stats.totalUsers.toLocaleString()}</p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-500" />
                </div>
                <span className="text-sm text-green-500 font-medium">+8.2%</span>
              </div>
              <h3 className="text-sm text-muted-foreground mb-1">Active Subscriptions</h3>
              <p className="text-3xl font-bold">{stats.activeSubscriptions.toLocaleString()}</p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-500" />
                </div>
                <span className="text-sm text-green-500 font-medium">+15.3%</span>
              </div>
              <h3 className="text-sm text-muted-foreground mb-1">Monthly Revenue</h3>
              <p className="text-3xl font-bold">${stats.monthlyRevenue.toLocaleString()}</p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <ShoppingCart className="h-6 w-6 text-orange-500" />
                </div>
                <span className="text-sm text-yellow-500 font-medium">Pending</span>
              </div>
              <h3 className="text-sm text-muted-foreground mb-1">Pending Orders</h3>
              <p className="text-3xl font-bold">{stats.pendingOrders}</p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-cyan-500" />
                </div>
                <span className="text-sm text-green-500 font-medium">+5.7%</span>
              </div>
              <h3 className="text-sm text-muted-foreground mb-1">Total Bookings</h3>
              <p className="text-3xl font-bold">{stats.totalBookings}</p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-pink-500/10 rounded-lg">
                  <FileText className="h-6 w-6 text-pink-500" />
                </div>
                <span className="text-sm text-green-500 font-medium">+3.1%</span>
              </div>
              <h3 className="text-sm text-muted-foreground mb-1">Blog Posts</h3>
              <p className="text-3xl font-bold">{stats.blogPosts}</p>
            </GlassCard>
          </div>

          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Order ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customer</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-border/30 hover:bg-accent/50 transition-colors">
                      <td className="py-3 px-4 font-medium">{order.id}</td>
                      <td className="py-3 px-4">{order.customer}</td>
                      <td className="py-3 px-4">${order.amount}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === "completed"
                              ? "bg-green-500/10 text-green-500"
                              : order.status === "pending"
                                ? "bg-yellow-500/10 text-yellow-500"
                                : "bg-blue-500/10 text-blue-500"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{order.date}</td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      )}

      {activeTab === "users" && (
        <GlassCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4">User Management</h2>
          <p className="text-muted-foreground">User management interface coming soon...</p>
        </GlassCard>
      )}

      {activeTab === "orders" && (
        <GlassCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
          <p className="text-muted-foreground">Order management interface coming soon...</p>
        </GlassCard>
      )}

      {activeTab === "bookings" && (
        <GlassCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Booking Management</h2>
          <p className="text-muted-foreground">Booking management interface coming soon...</p>
        </GlassCard>
      )}

      {activeTab === "content" && (
        <GlassCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Content Management</h2>
          <p className="text-muted-foreground">Content management interface coming soon...</p>
        </GlassCard>
      )}

      {activeTab === "settings" && (
        <GlassCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Platform Settings</h2>
          <p className="text-muted-foreground">Settings interface coming soon...</p>
        </GlassCard>
      )}
    </div>
  )
}

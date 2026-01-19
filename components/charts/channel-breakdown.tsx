"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const data = [
  { channel: "Organic", revenue: 42000 },
  { channel: "Paid", revenue: 31000 },
  { channel: "Email", revenue: 22000 },
  { channel: "Referral", revenue: 18000 },
  { channel: "Affiliate", revenue: 15000 }
];

export function ChannelBreakdown({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Channel Performance</CardTitle>
        <CardDescription>Revenue contribution by acquisition source</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="channel" axisLine={false} tickLine={false} />
              <YAxis
                width={60}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                cursor={{ fill: "hsl(var(--accent))", opacity: 0.4 }}
                contentStyle={{
                  borderRadius: "0.5rem",
                  borderColor: "hsl(var(--border))",
                  backgroundColor: "hsl(var(--card))"
                }}
                labelStyle={{ color: "hsl(var(--muted-foreground))" }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
              />
              <Bar dataKey="revenue" radius={[8, 8, 0, 0]} fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

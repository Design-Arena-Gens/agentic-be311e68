"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const data = [
  { month: "Jan", current: 42000, previous: 36000 },
  { month: "Feb", current: 48000, previous: 39000 },
  { month: "Mar", current: 51000, previous: 42000 },
  { month: "Apr", current: 57000, previous: 46000 },
  { month: "May", current: 61000, previous: 49000 },
  { month: "Jun", current: 66000, previous: 52000 }
];

export function RevenueChart({ className }: { className?: string }) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
        <CardDescription>Trailing 6 months with year-over-year comparison</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="current" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="previous" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis
                tickLine={false}
                axisLine={false}
                width={60}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                cursor={{ stroke: "hsl(var(--border))" }}
                contentStyle={{
                  borderRadius: "0.5rem",
                  borderColor: "hsl(var(--border))",
                  backgroundColor: "hsl(var(--card))"
                }}
                labelStyle={{ color: "hsl(var(--muted-foreground))" }}
              />
              <Area
                type="monotone"
                dataKey="current"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fill="url(#current)"
                name="Current Year"
              />
              <Area
                type="monotone"
                dataKey="previous"
                stroke="hsl(var(--secondary-foreground))"
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="url(#previous)"
                name="Previous Year"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

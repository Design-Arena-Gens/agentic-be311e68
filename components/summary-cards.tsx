import { ArrowDownRight, ArrowUpRight, CircleDollarSign, Users, ShoppingBag, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Metric = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ElementType;
  description: string;
};

const metrics: Metric[] = [
  {
    title: "Monthly Recurring Revenue",
    value: "$212,800",
    change: "+14.6%",
    trend: "up",
    icon: CircleDollarSign,
    description: "vs last month"
  },
  {
    title: "Active Customers",
    value: "3,482",
    change: "+6.2%",
    trend: "up",
    icon: Users,
    description: "net new 204"
  },
  {
    title: "New Deals Won",
    value: "58",
    change: "-3.4%",
    trend: "down",
    icon: ShoppingBag,
    description: "pipeline conversion"
  },
  {
    title: "NPS Score",
    value: "62",
    change: "+8 pts",
    trend: "up",
    icon: Activity,
    description: "survey completion 72%"
  }
];

export function SummaryCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const TrendIcon = metric.trend === "up" ? ArrowUpRight : ArrowDownRight;
        return (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold text-muted-foreground">{metric.title}</CardTitle>
              <div className="rounded-full border border-border p-2 text-muted-foreground">
                <Icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{metric.value}</div>
              <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-medium",
                    metric.trend === "up" ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
                  )}
                >
                  <TrendIcon className="h-3 w-3" />
                  {metric.change}
                </span>
                <span>{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

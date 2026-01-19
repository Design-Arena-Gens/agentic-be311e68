import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

type Activity = {
  id: string;
  type: "deal" | "feedback" | "campaign" | "retention";
  title: string;
  description: string;
  occurredAt: Date;
};

const activities: Activity[] = [
  {
    id: "a_1",
    type: "deal",
    title: "Closed $42K expansion with Acme Corp",
    description: "Product analytics add-on for enterprise seats",
    occurredAt: new Date(Date.now() - 1000 * 60 * 45)
  },
  {
    id: "a_2",
    type: "feedback",
    title: "NPS survey trending up",
    description: "Overall score hit 62 (+8 pt) from 420 responses",
    occurredAt: new Date(Date.now() - 1000 * 60 * 90)
  },
  {
    id: "a_3",
    type: "campaign",
    title: "Lifecycle email campaign launched",
    description: "Mid-market nurture flow targeting dormant leads",
    occurredAt: new Date(Date.now() - 1000 * 60 * 60 * 3)
  },
  {
    id: "a_4",
    type: "retention",
    title: "Churn risk alert: Globex",
    description: "Usage down 28% week-over-week, flagged for CSM follow-up",
    occurredAt: new Date(Date.now() - 1000 * 60 * 60 * 8)
  }
];

const typeCopy: Record<Activity["type"], string> = {
  deal: "Deal",
  feedback: "Feedback",
  campaign: "Campaign",
  retention: "Retention"
};

export function ActivityFeed({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Key events across revenue, product, and customer health</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">{activity.title}</h3>
              <Badge variant="secondary">{typeCopy[activity.type]}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(activity.occurredAt, { addSuffix: true })}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

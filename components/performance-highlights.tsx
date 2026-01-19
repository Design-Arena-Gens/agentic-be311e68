import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const initiatives = [
  {
    id: "i_1",
    title: "Lifecycle automation rollout",
    description: "Mid-market onboarding journeys",
    progress: 76,
    owner: "Marketing"
  },
  {
    id: "i_2",
    title: "Usage analytics instrumentation",
    description: "Event coverage for top 50 accounts",
    progress: 62,
    owner: "Product"
  },
  {
    id: "i_3",
    title: "Renewal playbook refresh",
    description: "Playbook for >$50K ARR accounts",
    progress: 44,
    owner: "Success"
  }
];

export function PerformanceHighlights({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Strategic Initiatives</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {initiatives.map((initiative) => (
          <div key={initiative.id} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div>
                <p className="font-medium">{initiative.title}</p>
                <p className="text-muted-foreground">{initiative.description}</p>
              </div>
              <span className="text-xs text-muted-foreground">{initiative.owner}</span>
            </div>
            <Progress value={initiative.progress} />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Goal completion</span>
              <span>{initiative.progress}%</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

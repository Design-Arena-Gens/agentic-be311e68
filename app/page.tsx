import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { SummaryCards } from "@/components/summary-cards";
import { RevenueChart } from "@/components/charts/revenue-chart";
import { ChannelBreakdown } from "@/components/charts/channel-breakdown";
import { TopCustomersTable } from "@/components/tables/top-customers-table";
import { ActivityFeed } from "@/components/activity-feed";
import { PerformanceHighlights } from "@/components/performance-highlights";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 space-y-6 bg-muted/20 px-4 py-6 lg:px-8">
          <section className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Performance Overview</h1>
              <p className="text-sm text-muted-foreground">
                Track revenue, customer health, and strategic initiatives in real time.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Select aria-label="Timeframe">
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="12m">Last 12 months</option>
              </Select>
              <Button variant="outline">Download report</Button>
              <Button>Share executive view</Button>
            </div>
          </section>

          <SummaryCards />

          <section className="grid gap-4 lg:grid-cols-2">
            <RevenueChart />
            <ChannelBreakdown />
          </section>

          <section className="grid gap-4 xl:grid-cols-3">
            <TopCustomersTable className="xl:col-span-2" />
            <ActivityFeed />
          </section>

          <PerformanceHighlights />
        </main>
      </div>
    </div>
  );
}

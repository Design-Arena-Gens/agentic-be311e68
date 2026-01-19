"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState
} from "@tanstack/react-table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Customer = {
  id: string;
  name: string;
  logo: string;
  revenue: number;
  growth: number;
  status: "Active" | "Churn Risk" | "Onboarding";
};

const customers: Customer[] = [
  {
    id: "c_1",
    name: "Acme Corp",
    logo: "https://logo.clearbit.com/slack.com",
    revenue: 125000,
    growth: 18.2,
    status: "Active"
  },
  {
    id: "c_2",
    name: "Northwind",
    logo: "https://logo.clearbit.com/figma.com",
    revenue: 98000,
    growth: 12.4,
    status: "Active"
  },
  {
    id: "c_3",
    name: "Globex",
    logo: "https://logo.clearbit.com/notion.so",
    revenue: 83000,
    growth: -4.1,
    status: "Churn Risk"
  },
  {
    id: "c_4",
    name: "Initech",
    logo: "https://logo.clearbit.com/linear.app",
    revenue: 69000,
    growth: 8.9,
    status: "Active"
  },
  {
    id: "c_5",
    name: "Soylent",
    logo: "https://logo.clearbit.com/segment.com",
    revenue: 54000,
    growth: 25.6,
    status: "Onboarding"
  }
];

const statusVariant: Record<Customer["status"], "default" | "secondary" | "outline"> = {
  Active: "secondary",
  "Churn Risk": "outline",
  Onboarding: "default"
};

const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: "Customer",
    cell: ({ row }) => {
      const customer = row.original;
      return (
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={customer.logo} alt={customer.name} className="h-8 w-8 rounded-full border border-border" />
          <span className="font-medium">{customer.name}</span>
        </div>
      );
    }
  },
  {
    accessorKey: "revenue",
    header: ({ column }) => (
      <button
        className="flex items-center gap-2 text-left text-sm font-semibold"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Revenue
        <span className="text-xs text-muted-foreground">sort</span>
      </button>
    ),
    cell: ({ row }) => <span className="font-medium">${row.original.revenue.toLocaleString()}</span>
  },
  {
    accessorKey: "growth",
    header: "Growth",
    cell: ({ row }) => {
      const growth = row.original.growth;
      const isPositive = growth >= 0;
      return (
        <span className={cn("font-medium", isPositive ? "text-emerald-500" : "text-rose-500")}>
          {isPositive ? "+" : ""}
          {growth.toFixed(1)}%
        </span>
      );
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <Badge variant={statusVariant[row.original.status]}>{row.original.status}</Badge>
  }
];

export function TopCustomersTable({ className }: { className?: string }) {
  const [sorting, setSorting] = React.useState<SortingState>([{ id: "revenue", desc: true }]);
  const table = useReactTable({
    data: customers,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Top Customers</CardTitle>
        <CardDescription>Largest customers by trailing 12-month revenue</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[600px] text-sm">
            <thead className="text-xs uppercase text-muted-foreground">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="border-b border-border">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="px-4 py-3 text-left font-semibold">
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b border-border last:border-b-0">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-3">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

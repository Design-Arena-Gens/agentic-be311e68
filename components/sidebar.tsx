"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BarChart3, Home, Layers, Users, Settings } from "lucide-react";

const navItems = [
  { href: "/", label: "Overview", icon: Home },
  { href: "/sales", label: "Sales", icon: BarChart3 },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/products", label: "Products", icon: Layers },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-64 border-r border-border bg-card lg:flex lg:flex-col">
      <div className="flex h-16 items-center px-6">
        <span className="text-lg font-semibold tracking-tight">InsightBoard</span>
      </div>
      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

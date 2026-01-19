"use client";

import { Search, Bell } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-4 lg:px-8">
      <div className="flex w-full max-w-md items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search reports, insights, and more..." className="border-none focus-visible:ring-0" />
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="hidden text-right text-sm leading-tight md:block">
            <p className="font-semibold">Jordan Lee</p>
            <p className="text-muted-foreground">Director</p>
          </div>
          <Image
            src="https://i.pravatar.cc/40?img=12"
            alt="User avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

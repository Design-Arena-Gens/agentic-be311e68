"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, icon, children, ...props }, ref) => {
  return (
    <div className={cn("relative flex items-center", className)}>
      <select
        ref={ref}
        className="h-10 w-full appearance-none rounded-md border border-input bg-background px-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        {...props}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute right-3 text-muted-foreground">
        {icon ?? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.25 9L12 12.75 15.75 9" />
          </svg>
        )}
      </div>
    </div>
  );
});
Select.displayName = "Select";

export { Select };

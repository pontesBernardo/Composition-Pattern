import type { ReactNode } from "react";

interface NotificationRootProps {
    children: ReactNode
}

export function NotificationRoot({ children }: NotificationRootProps) {
  return (
    <div className="w-full h-22 bg-zinc-900 flex items-center justify-between gap-4 p-6">
      <div className="flex items-center gap-4">
        {children}
      </div>
    </div>
  );
}
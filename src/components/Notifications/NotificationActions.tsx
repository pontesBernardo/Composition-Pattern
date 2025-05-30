import { LucideX, LucideCheck } from "lucide-react";

// interface NotificationActionsProps{
//     onSubmitAction: () => void,
//     onCancelAction: () => void,
// }

export function NotificationActions( ){
    return(
       <div className="flex gap-2">
          <button className="w-8 h-8 p-1 rounded bg-zinc-800 transition-colors duration-200 hover:bg-zinc-700 flex items-center justify-center">
            <LucideX className="w-4 h-4 text-slate-50" />
          </button>
          <button className="w-8 h-8 p-1 rounded bg-violet-500 transition-colors duration-200 hover:bg-violet-600 flex items-center justify-center">
            <LucideCheck className="w-4 h-4 text-slate-50" />
          </button>
        </div> 
    )
}
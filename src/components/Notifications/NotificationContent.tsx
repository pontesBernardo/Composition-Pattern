interface NotificationContentProps {
    text: string,
}

export function NotificationContent({ text }: NotificationContentProps){
    return(
        <div className="flex flex-col">
          <h2 className="text-slate-50/80 text-sm">
            {text}
          </h2>
          <div className="flex gap-3 text-xs mt-2">
            <p className="text-zinc-400">Convite</p>
            <p className="text-zinc-400">Há 3 min</p>
          </div>
        </div>
    )
}
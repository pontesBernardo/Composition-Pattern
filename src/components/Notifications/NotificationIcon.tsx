import type { ElementType } from "react";

interface NotificationIconProps {
    icon: ElementType,
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps){
    return(
        <Icon className="text-violet-500 w-8 h-8"/>
    )
}
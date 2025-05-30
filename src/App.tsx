import { Rocket } from "lucide-react";
import { Notification } from "./components/Notifications/index";


export function App() {
  return (
    <div className="bg-neutral-950 h-screen w-screen flex justify-center items-center">
      <div className="w-110 h-120 bg-zinc-950">
        <div className="w-full h-15 bg-neutral-800">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-slate-50 font-bold">Notificações</h1>
            <a href="#" className="text-violet-500 font-medium text-sm hover:underline">MARCAR TODAS COMO VISTAS</a>
          </div>
        </div>
        <div className="w-full h-8 bg-[#141414] flex justify-start pl-3 pt-1">
          <h1 className="font-medium text-slate-50/50">Recentes</h1>
        </div>

        <div className="flex flex-col space-y-0.5">
          <Notification.Root>
            <Notification.Icon icon={Rocket}/>
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa RocketSeat."/>
            <Notification.Actions  />
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={Rocket}/>
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa RocketSeat."/>
            <Notification.Actions  />
          </Notification.Root>

        </div>

        <div className="w-full h-8 bg-[#141414] flex justify-start pl-3 pt-1">
          <h1 className="font-medium text-slate-50/50">Antigas</h1>
        </div>

        <div className="flex flex-col space-y-0.5">
          <div className="flex flex-col space-y-0.5">
            <Notification.Root>
              <Notification.Icon icon={Rocket}/>
              <Notification.Content text="Você recebeu um convite para fazer parte da empresa RocketSeat."/>
              <Notification.Actions  />
            </Notification.Root>

            <Notification.Root>
              <Notification.Icon icon={Rocket}/>
              <Notification.Content text="Você recebeu um convite para fazer parte da empresa RocketSeat."/>
              <Notification.Actions  />
            </Notification.Root>
            
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  } from '@fortawesome/free-regular-svg-icons';

export function HeaderProfile({ name }: Readonly<{ name: string }>) {
  const [notifications, setNotifications] = useState([]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center gap-2">
          <Button variant={'secondary'} size={'icon'}>
            <FontAwesomeIcon icon={faUser} className="text-primary" />
          </Button>
          <div className="flex items-end gap-2">
            <div>
              <p className="text-xs leading-none text-neutral-400">Hola</p>
              <p className="text-sm leading-none font-bold">{ name }</p>
            </div>
            {notifications.length > 0 && <Badge variant="error" size="sm">1</Badge>}
          </div>
        </div>
      </PopoverTrigger>
      {notifications.length > 0 &&
      <PopoverContent side="bottom" sideOffset={-40} className="w-auto border-none rounded-lg p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Button variant={'secondary'} size={'icon'}>
              <FontAwesomeIcon icon={faUser} className="text-primary" />
            </Button>
            <div className="flex items-end gap-2">
              <div>
                <p className="text-xs leading-none text-neutral-400">Hola</p>
                <p className="text-sm leading-none font-bold">{ name }</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500">Notificaciones</p>
          <hr />
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="text-sm m-0">Recomendación finalizada! &nbsp; &nbsp;</p>
              <Badge variant="error" size="sm" />
            </div>
            <p className="text-sm text-gray-900 font-semibold underline">hacé click para verla!</p>
          </div>
        </div>
      </PopoverContent>
      }
    </Popover>
  );
}

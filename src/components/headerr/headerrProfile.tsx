"use client"
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  } from '@fortawesome/free-regular-svg-icons';

export function HeaderProfile({ name }: Readonly<{ name: string }>) {
  return (
    <div className="flex items-center gap-2">
      <Button variant={'outline'} size={'icon'}>
        <FontAwesomeIcon icon={faUser} className="text-primary-foreground" />
      </Button>
      <div>
        <p className="text-xs leading-none text-neutral-400">Hola</p>
        <p className="text-sm leading-none font-bold">{ name }</p>
      </div>
    </div>
  );
}

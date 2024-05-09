import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faEdit  } from '@fortawesome/free-solid-svg-icons';

export default function AmbientacionGeneral(props: any) {
  return (
    <div className={cn(props.className, 'rounded-xl border shadow-md flex flex-col relative bg-green-700')}>
      <Button variant={'ghost'} className="flex gap-2 absolute right-8 bottom-8">
        <FontAwesomeIcon icon={faEdit} />
        Editar Ambientación
      </Button>
    </div>
  )
}
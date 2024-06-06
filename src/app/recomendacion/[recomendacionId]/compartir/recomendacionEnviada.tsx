import {
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCopy } from '@fortawesome/free-regular-svg-icons';

export default function RecomendacionEnviada(props: any) {

  function copyLink(value: string) {
    toast({
      title: "El link ha sido copiado!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{value}</code>
        </pre>
      ),
    })
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Copiá el link si querés reenviarlo por otro medio</DialogTitle>
      </DialogHeader>
      <div className="mx-20 rounded p-4 bg-green-300 flex items-center justify-center leading-none">
        <FontAwesomeIcon icon={faCheckCircle} className="text-black mr-2" />
        Recomendación enviada con éxito
      </div>
      <div className="flex flex-col gap-4 px-20 py-2">
        <div className="flex flex-1 gap-2">
          <Input value="https://www.nidera.com/recomenda=2?..." />
          <Button variant={'secondary'} onClick={() => copyLink('https://www.nidera.com/recomenda=2?...')}><FontAwesomeIcon icon={faCopy} className="text-primary mr-2" />Copiar link</Button>
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant={'default'} onClick={() => props.setStage('elegir-contacto')}>Cancelar</Button>
        </DialogClose>
      </DialogFooter>
    </>
  )
}
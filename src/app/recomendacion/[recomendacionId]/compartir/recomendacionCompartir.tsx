import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt  } from '@fortawesome/free-solid-svg-icons';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ElegirContacto from '@/app/recomendacion/[recomendacionId]/compartir/elegirContacto';
import EditarContacto from '@/app/recomendacion/[recomendacionId]/compartir/editarContacto';
import RecomendacionEnviada from '@/app/recomendacion/[recomendacionId]/compartir/recomendacionEnviada';

export default function RecomendacionCompartir(props: any) {
  const [stage, setStage] = useState<'elegir-contacto' | 'editar-contacto' | 'enviada'>('elegir-contacto');
  const [form, setForm] = useState<{contacto?: string, mensaje?: string }>({});

  const isInvalid = () => {
    return !form.contacto || !form.contacto.length;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'} className="flex justify-between" >
          <FontAwesomeIcon icon={faShareAlt} className="text-primary mr-2" />
          Compartir Recomendacion
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[590px] max-w-[50vw]">
        {stage === 'elegir-contacto' ? <ElegirContacto isInvalid={isInvalid()} form={form} setForm={setForm} setStage={setStage} /> :
        stage === 'editar-contacto' ?  <EditarContacto isInvalid={isInvalid()} form={form} setForm={setForm} setStage={setStage} /> :
        stage === 'enviada' ? <RecomendacionEnviada setStage={setStage} /> : false }
      </DialogContent>
    </Dialog>
  )
}

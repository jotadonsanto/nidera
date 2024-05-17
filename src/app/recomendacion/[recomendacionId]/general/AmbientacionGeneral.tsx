import { cn } from "@/lib/utils";
import EditarAmbientacion from "@/app/recomendacion/[recomendacionId]/general/editarAmbientacion";

export default function AmbientacionGeneral(props: any) {
  return (
    <div className={cn(props.className, 'rounded-xl border shadow-md flex flex-col relative bg-green-700')}>
      <EditarAmbientacion />
    </div>
  )
}
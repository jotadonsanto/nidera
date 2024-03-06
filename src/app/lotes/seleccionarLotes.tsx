import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem} from '@/components/ui/dropdown-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical  } from '@fortawesome/free-solid-svg-icons';
import { Loading } from '@/components/ui/loading';
import CrearLotes from '@/app/lotes/crearLotes';
import ConfirmDialog from '@/components/confirmDialog'

export default function SeleccionarLotes(props: any) {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [lotes, setLotes] = useState<any>([]);

  useEffect(()=>{
    // faking API delay
    setTimeout(() => {
      setLotes([{ id: '1234' }, { id: '2345' }, { id: '3456' }, { id: '4567' }, { id: '5678' },{ id: '12234' }, { id: '23445' }, { id: '34556' }, { id: '45667' }, { id: '567823' },{ id: '1234234' }, { id: '2345435' }, { id: '3464556' }, { id: '4576567' }, { id: '5687678' }]);
      setLoading(false);
    }, 1230);
  },[])

  const LotesCard = (props: { lote: { id: string} }) => (
    <div
      key={props.lote.id}
      className="rounded-lg shadow-sm hover:bg-gray-50/50 border p-4">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex gap-2">
            <p className="text-sm font-bold">
              Nombre del lote
            </p>
          </div>
          <p className="text-sm text-gray-500">129,7 ha</p>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size={'icon'}>
                <FontAwesomeIcon icon={faEllipsisVertical} className="text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500" onSelect={() => setShowDeleteModal(true)}>
                  Borrar
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )

  return (
    <div className="border-b flex flex-col min-h-0" style={{ flex: '2 1 0' }}>
      <div className="flex justify-between items-center mb-4">
        <Label>Seleccionar Lote {lotes.length > 0 && `[${lotes.length}]`}</Label>
        <CrearLotes />
      </div>
      { loading ? <Loading  className="self-center"/> :
        <div className="flex flex-col gap-2 overflow-scroll min-h-0">
          {
            lotes.map((lote: { id: string }) => (
              <LotesCard lote={lote} key={lote.id} />
            ))
          }
        </div>
      }
      {
        showDeleteModal ? (
          <ConfirmDialog
            open={true}
            title="Borrar {nombre del lote}?"
            message="Está seguro que queres borrar {nombre del lote}? Esta acción es permanente."
            handleCancel={() => setShowDeleteModal(false)}
            handleConfirm={() => true} />
        ) : null
      }
    </div>
  )
}
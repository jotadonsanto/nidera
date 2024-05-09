import { useState } from "react";
import Fenologia from "@/app/recomendacion/[recomendacionId]/fenologia/fenologia";
import Climograma from "@/app/recomendacion/[recomendacionId]/fenologia/climograma";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp  } from '@fortawesome/free-solid-svg-icons';

export default function RecomendacionFenologia(props: any) {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  }

  return (
    <div className="flex flex-col">
      <div className="p-10">
        <Fenologia />
      </div>
      <div className="flex flex-col items-center relative">
        <hr className="w-full" />
        <div className="p-6 shadow font-semibold rounded-3xl flex items-center gap-2 bg-white -mt-9 hover:bg-gray-50 cursor-pointer" onClick={toggleVisible}>
          { visible ?
          <>
          Ocultar Climograma
          <FontAwesomeIcon icon={faChevronUp} size="sm" className="" />
          </> :
          <>
          Mostrar Climograma
          <FontAwesomeIcon icon={faChevronDown} size="sm" className="" />
          </>
          }
        </div>
        { visible && 
          <div className="p-10">
            <Climograma className="flex-1" />
          </div>
        }
      </div>
    </div>
  )
}
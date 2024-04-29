'use client';

import { useState } from 'react';
import Image from "next/image";
import Container from '@/components/layouts/Container';
import LeftBar from '@/components/layouts/LeftBar';
import RightBar from '@/components/layouts/RightBar';
import LotesTabs from '@/app/recomendacion/[recomendacionId]/lotesTabs';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import RecomendacionSidenav from '@/app/recomendacion/[recomendacionId]/recomendacionSidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListDots, faThLarge  } from '@fortawesome/free-solid-svg-icons';

export default function RecomendacionLotes({ params }: {
  params: { recomendacionId: string };
}) {

  const [view, setView] = useState('list');
  const changeContent = (value: any) => { console.log(value) };

  const CultivoCard = (props: { cultivo: string }) => (
    <div
      className={"flex items-center justify-between flex-1 rounded-xl shadow-gray-200 shadow-2xl"}>
      <div className="flex-1 w-full h-full p-6" style={{ backgroundImage: `url(/${props.cultivo}_back.jpg)` }}>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex gap-4">
          {props.cultivo === 'maíz' &&
          <Image
            src={`/${props.cultivo}.svg`}
            width={20}
            height={32}
            alt="Picture of the author" />
          }
          {props.cultivo === 'girasol' &&
            <Image
              src={`/${props.cultivo}.svg`}
              width={22}
              height={21}
              alt="Picture of the author" />
          }
          <span className="text-4xl font-semibold">{props.cultivo.charAt(0).toUpperCase() + props.cultivo.slice(1)}</span>
        </div>
        <span className="font-medium">Mira vos lo que son las cosas que el perro pierda la maña pero no el coso.</span>
      </div>
    </div>
  )

  return (
    <Container
      top={
        <LotesTabs lote={{id: params.recomendacionId}} />
      }

      left={
        <LeftBar>
          <RecomendacionSidenav handleChange={changeContent} />
        </LeftBar>
      }

      right={
        <RightBar className="p-10">
          <div className="flex flex-col gap-10">
            <CultivoCard cultivo="girasol" />

            <div className="flex items-end gap-4">
              <Button variant={view === 'list' ? 'default' : 'link'} size={'icon'} onClick={() => setView('list')}>
                <FontAwesomeIcon icon={faListDots} />
              </Button>
              <Button variant={view !== 'list' ? 'default' : 'link'} size={'icon'} onClick={() => setView('grid')}>
                <FontAwesomeIcon icon={faThLarge} />
              </Button>
            </div>
            {view === 'list' &&
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex bg-gray-100 p-3 rounded-lg">
                <div className="w-[10%]"></div>
                <div className="w-[18%]">Lote</div>
                <div className="w-[18%]">Fecha de Siembra<br/>Optima</div>
                <div className="w-[18%]">Indice Ambiental<br/>(kg/ha)</div>
                <div className="w-[18%]">Hibrido</div>
                <div className="w-[18%]">Bolsas Totales - Fija<br/>(180.000 sem/bolsa)</div>
              </div>
              <div className="flex border p-4 rounded-lg">
                <div className="w-[10%]"></div>
                <div className="w-[18%]">Lote 1</div>
                <div className="w-[18%]">21/10/2028</div>
                <div className="w-[18%]">10.459</div>
                <div className="w-[18%]">NT7YHA54RUI0</div>
                <div className="w-[18%]">87</div>
              </div>
              <div className="flex border p-4 rounded-lg">
                <div className="w-[10%]"></div>
                <div className="w-[18%]">Lote 1</div>
                <div className="w-[18%]">21/10/2028</div>
                <div className="w-[18%]">10.459</div>
                <div className="w-[18%]">NT7YHA54RUI0</div>
                <div className="w-[18%]">87</div>
              </div>
            </div>
            }
            {view === 'grid' && <h1>Gridelsa</h1>}
          </div>
        </RightBar>
      }
    />
  );
}

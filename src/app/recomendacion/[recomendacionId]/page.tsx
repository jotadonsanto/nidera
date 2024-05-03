'use client';

import { useState } from 'react';
import Image from "next/image";
import Container from '@/components/layouts/Container';
import LeftBar from '@/components/layouts/LeftBar';
import RightBar from '@/components/layouts/RightBar';
import LotesTabs from '@/app/recomendacion/[recomendacionId]/lotesTabs';
import { Button } from '@/components/ui/button';
import RecomendacionSidenav from '@/app/recomendacion/[recomendacionId]/recomendacionSidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListDots, faThLarge  } from '@fortawesome/free-solid-svg-icons';

import type { Lote, Recomendacion } from '@/app/recomendacion/recomendacion';

import { recomendacionSummary } from '@/app/mockFile';

export default function RecomendacionLotes({ params }: {
  params: { recomendacionId: number };
}) {

  const [view, setView] = useState('list');
  const changeContent = (value: any) => { console.log(value) };

  const CultivoCard = (props: { cultivo: string }) => (
    <div
      className={"flex items-center justify-between flex-1 h-full rounded-xl overflow-hidden shadow-gray-200 shadow-2xl"}>
      <div
        className="flex-1 w-full h-full p-6"
        style={{backgroundPosition: 'center',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(/${props.cultivo}_back.jpg)` }}>
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
        <RightBar>
          <div className="flex flex-col">
            <div className="p-10">
              <CultivoCard cultivo={params.recomendacionId > 12 ? "girasol" : "maíz"} />
            </div>

            <hr />

            {/* Cards and List view of Lotes */}
            <div className="p-10">
              <div className="flex justify-end gap-4 mb-4">
                <Button variant={view === 'list' ? 'default' : 'link'} size={'icon'} onClick={() => setView('list')}>
                  <FontAwesomeIcon icon={faListDots} />
                </Button>
                <Button variant={view !== 'list' ? 'default' : 'link'} size={'icon'} onClick={() => setView('grid')}>
                  <FontAwesomeIcon icon={faThLarge} />
                </Button>
              </div>

              {/* List view of Lotes */}
              {view === 'list' &&
              <div className="flex flex-col text-sm">
                {/* Header of list */}
                <div className="flex bg-gray-50 p-3 rounded-lg">
                  <div className="w-[10%] italic"></div>
                  <div className="w-[18%] italic">Lote</div>
                  <div className="w-[18%] italic">Fecha de Siembra<br/>Optima</div>
                  <div className="w-[18%] italic">Indice Ambiental<br/>(kg/ha)</div>
                  <div className="w-[23%] italic">Hibrido</div>
                  <div className="w-[13%] italic">Bolsas Totales - Fija<br/>(180.000 sem/bolsa)</div>
                </div>
                {recomendacionSummary.lotes && recomendacionSummary.lotes.map((lote: Lote, id) => (
                  <div key={id} className="flex border p-4 mt-2 rounded-lg shadow-md">
                    <div className="w-[10%]">
                      <Image
                        src={`/girasol.svg`}
                        width={33}
                        height={31}
                        alt="Picture of the author" />
                    </div>
                    <div className="w-[18%] flex items-center">{lote.nombre}</div>
                    <div className="w-[18%] flex items-center">{lote.fecha}</div>
                    <div className="w-[18%] flex items-center">{lote.indice}</div>
                    <div className="w-[23%] flex items-center">{lote.hibrido}</div>
                    <div className="w-[13%] flex items-center">{lote.bolsas_totales}</div>
                  </div>
                ))}
              </div>
              }

              {/* Card view of Lotes */}
              {view === 'grid' &&
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {recomendacionSummary.lotes && recomendacionSummary.lotes.map((lote: Lote, id) => (
                  <div key={id} className="flex gap-4 border rounded-xl shadow-md px-5 py-7">
                    <Image
                      src={`/map.jpg`}
                      width={150}
                      height={150}
                      alt="Picture of the author" />
                    <div>
                      <h4 className="font-bold text-lg">{lote.nombre}</h4>
                      <div>Fecha de siembra optima: <span className="font-bold">{lote.fecha}</span></div>
                      <div>Indice Ambiental (kg/ha): <span className="font-bold">{lote.indice}</span></div>
                      <div>Híbrido: <span className="font-bold">{lote.hibrido}</span></div>
                      <div>Bolsas Totales: <span className="font-bold">{lote.bolsas_totales}</span></div>
                    </div>
                  </div>
                ))}
              </div>
              }
            </div>
          </div>
        </RightBar>
      }
    />
  );
}

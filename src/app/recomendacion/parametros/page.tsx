"use client"

import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/layouts/Container';
import MainSide from '@/components/layouts/MainSide';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup, faLocationDot  } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import type { Lote } from '@/app/recomendacion/recomendacion';
import SeleccionarCultivo from '@/app/recomendacion/parametros/seleccionarCultivo';
import SeleccionarHibrido from '@/app/recomendacion/parametros/seleccionarHibrido';

export default function RecomendacionParametros() {
  const [cultivo, setCultivo] = useState<string>('');
  const [hibrido, setHibrido] = useState<Lote[]>([])

  const handleState = (field: string, value: string | []) => {
    // having the field and value, dynamically run the set
    eval('set' + field.charAt(0).toUpperCase() + field.slice(1) + "(value)");
  }

  const isInvalid = () => {
    return !cultivo.length || !hibrido.length;
  }

  return (
    <Container
      top={
        <div className='flex items-end justify-center pt-5 border-b'>
          <Tabs value={'parametros'}>
            <TabsList withoutSeparation>
              <TabsTrigger value="parametros">
                <FontAwesomeIcon icon={faLocationDot} size={'lg'} className="mr-3" />
                Clientes/Lotes
              </TabsTrigger>
              <TabsTrigger value="parametros">
                <FontAwesomeIcon icon={faLayerGroup} size={'lg'} className="mr-3" />
                Parámetros
              </TabsTrigger>
              <TabsTrigger value=''>
                <FontAwesomeIcon icon={faFileLines} size={'lg'} className="mr-3" />
                Recomendación
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      }
      main={
        <MainSide>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/recomendacion/lotes">Fortezza SA</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/recomendacion/lotes">Propiedad</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/recomendacion/lotes">Lote 1, 2 y 3</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>
                Maíz
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <SeleccionarCultivo handleChange={handleState} />
          <SeleccionarHibrido handleChange={handleState} />
          <div className="flex justify-end">
            <Link href="/tablero">
              <Button className="w-72 flex justify-between" disabled={isInvalid()} >
                CREAR RECOMENDACIÓN
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Link>
          </div>
        </MainSide>
      }
    />
  );
}

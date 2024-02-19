"use client"

import Container from '@/components/layouts/Container';
import MainSide from '@/components/layouts/MainSide';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faLocationDot  } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';

import SeleccionarCultivo from '@/app/recomendacion/nueva/parametros/seleccionarCultivo';
import SeleccionarHibrido from '@/app/recomendacion/nueva/parametros/seleccionarHibrido';
import { useState } from 'react';

export default function Parametros() {
  const [cultivo, setCultivo] = useState<string>('');
  const [lotes, setLotes] = useState<[]>([])

  const handleState = (field: string, value: string | []) => {
    // having the field and value, dynamically run the set
    eval('set' + field.charAt(0).toUpperCase() + field.slice(1) + "(value)");
  }

  return (
    <Container
      top={
        <div className='flex items-end justify-center pt-5 border-b'>
          <Tabs value={'parametros'} className="w-[400px]">
            <TabsList>
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
              <BreadcrumbLink href="/recomendacion/nueva">Fortezza SA</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/recomendacion/nueva">Propiedad</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/recomendacion/nueva">Lote 1, 2 y 3</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>
                Maíz
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <SeleccionarCultivo handleChange={handleState} />
          <SeleccionarHibrido />
        </MainSide>
      }
    />
  );
}

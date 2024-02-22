"use client"

import { useState } from 'react';
import Container from '@/components/layouts/Container';
import LeftBar from '@/components/layouts/LeftBar';
import RightBar from '@/components/layouts/RightBar';

import SeleccionarCliente from '@/app/recomendacion/lotes/seleccionarCliente';
import SeleccionarPropiedad from '@/app/recomendacion/lotes/seleccionarPropiedad';
import SeleccionarLotes from '@/app/recomendacion/lotes/seleccionarLotes';


import Link from "next/link";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup, faLocationDot  } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';

export default function Nueva() {
  const [cliente, setCliente] = useState<string>("");
  const [propiedad, setPropiedad] = useState<string>("");
  const [lotes, setLotes] = useState<string[] | []>([]);
  const handleState = (field: string, value: string | []) => {
    // having the field and value, dynamically run the set
    eval('set' + field.charAt(0).toUpperCase() + field.slice(1) + "(value)");
  }

  const isInvalid = () => {
    return !cliente.length || !propiedad.length || !lotes.length;
  }

  return (
    <Container
      top={
        <div className='flex items-end justify-center pt-5 border-b'>
          <Tabs value={'cliente/lotes'} className="w-[400px]">
            <TabsList>
              <TabsTrigger value="cliente/lotes">
                <FontAwesomeIcon icon={faLocationDot} size={'lg'} className="mr-3" />
                Clientes/Lotes
              </TabsTrigger>
              <TabsTrigger value=''>
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

      left={
        <LeftBar>
          <SeleccionarCliente handleChange={handleState} />
          { cliente &&
            <SeleccionarPropiedad handleChange={handleState} />
          }
          { propiedad &&
            <SeleccionarLotes handleChange={handleState} />
          }
          <div className="mt-auto">
            <Link href="/recomendacion/parametros">
              <Button className="w-full flex justify-between" disabled={isInvalid()} >
                CONTINUAR
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Link>
          </div>
        </LeftBar>
      }
      right={
        <RightBar className="bg-green-200">
        </RightBar>
      }
    />
  );
}

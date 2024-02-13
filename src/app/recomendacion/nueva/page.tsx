"use client"

import { useState } from 'react';
import Container from '@/components/layouts/Container';
import LeftBar from '@/components/layouts/LeftBar';
import RightBar from '@/components/layouts/RightBar';

import SeleccionarCliente from '@/app/recomendacion/nueva/seleccionarCliente';
import SeleccionarPropiedad from '@/app/recomendacion/nueva/seleccionarPropiedad';
import SeleccionarLotes from '@/app/recomendacion/nueva/seleccionarLotes';

import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';

export default function Nueva() {
  const [cliente, setCliente] = useState<string>("");
  const [propiedad, setPropiedad] = useState<string>("");
  const [lotes, setLotes] = useState<string[] | []>([]);
  const handleState = (field: string, value: string | []) => {
    // cliente, valor
    eval('set' + field.charAt(0).toUpperCase() + field.slice(1) + "(value)");
  }

  const isInvalid = () => {
    return !cliente.length || !propiedad.length || !lotes.length;
  }

  return (
    <Container
      right={
        <RightBar className="bg-green-200">
        </RightBar>
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
            <Button className="w-full flex justify-between" disabled={isInvalid()} >
              CONTINUAR
              <FontAwesomeIcon icon={faArrowRight} className="text-primary-foreground" />
            </Button>
          </div>
        </LeftBar>
      }
    />
  );
}

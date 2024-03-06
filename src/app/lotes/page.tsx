"use client"

import { useState } from 'react';
import Container from '@/components/layouts/Container';
import LeftBar from '@/components/layouts/LeftBar';
import RightBar from '@/components/layouts/RightBar';

import SeleccionarCliente from '@/app/lotes/seleccionarCliente';
import SeleccionarPropiedad from '@/app/lotes/seleccionarPropiedad';
import SeleccionarLotes from '@/app/lotes/seleccionarLotes';


import Link from "next/link";
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';

export default function Lotes() {
  const [cliente, setCliente] = useState<string>("");
  const [propiedad, setPropiedad] = useState<string>("");
  const [lotes, setLotes] = useState<string[] | []>([]);
  const handleState = (field: string, value: string | []) => {
    // having the field and value, dynamically run the set
    eval('set' + field.charAt(0).toUpperCase() + field.slice(1) + "(value)");
  }

  return (
    <Container
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
            <Link href="/recomendacion/lotes">
              <div className="text-sm text-center">¿Quéres realizar una recomendación? <span className="font-bold">COMENZAR</span></div>
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

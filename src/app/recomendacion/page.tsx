"use client"

import Container from '@/components/layouts/Container';
import TopBar from '@/components/layouts/TopBar';
import LeftBar from '@/components/layouts/LeftBar';
import RightBar from '@/components/layouts/RightBar';
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faLocationDot  } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';

export default function Recomendaciones() {
  return (
    <Container
      top={
        <TopBar>
          <div className="flex justify-center">
            <Tabs value={'/'} className="w-[400px]">
              <TabsList>
                <TabsTrigger value="/">
                  <FontAwesomeIcon icon={faLocationDot} size={'lg'} className="mr-3" />
                  <Link href="/">Clientes/Lotes</Link>
                </TabsTrigger>
                <TabsTrigger value="/recomendacion">
                  <FontAwesomeIcon icon={faLayerGroup} size={'lg'} className="mr-3" />
                  <Link href="/recomendacion">Parámetros</Link>
                </TabsTrigger>
                <TabsTrigger value="/lotes">
                  <FontAwesomeIcon icon={faFileLines} size={'lg'} className="mr-3" />
                  Recomendación
                </TabsTrigger>
              </TabsList>
            </Tabs>

          </div>
        </TopBar>
      }
      left={
        <LeftBar>
          LEFT SIDE
        </LeftBar>
      }
      right={
        <RightBar>
          <div className="w-full h-full bg-lime-800">
            RIGHT SIDEEEE
          </div>
        </RightBar>
      }
    />
  );
}

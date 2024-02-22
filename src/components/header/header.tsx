"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";

import { HeaderProfile } from "@/components/header/headerProfile";

export default function Header() {

  const url = `/${usePathname().split('/')[1]}`;

  return (
    <header className="bg-neutral-050 w-full flex flex-row justify-between items-center shrink-0 px-10 h-14">
      <div className="flex gap-10">
        <Image
          src="/logo.svg"
          width={71}
          height={40}
          alt="Picture of the author" />
        {url.includes('/recomendacion') &&
          <Button variant="link">
            <Link href="/tablero">&#60; Volver a Experiencia Nidera</Link>
          </Button>
        }
      </div>
      {!url.includes('/recomendacion') &&
        <div className="self-end">
          <Tabs value={url} className="w-[400px]">
            <TabsList>
              <TabsTrigger value="/">
                <Link href="/">Dashboard</Link>
              </TabsTrigger>
              <TabsTrigger value="/tablero">
                <Link href="/tablero">Mis Recomendaciones</Link>
              </TabsTrigger>
              <TabsTrigger value="/lotes">Mis Lotes</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      }
      <HeaderProfile name="Edgardo Gonzalez" />
    </header>
  );
}

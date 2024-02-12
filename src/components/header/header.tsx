"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";

import { HeaderProfile } from "@/components/header/headerProfile";

export default function Header() {
  return (
    <header className="bg-neutral-050 w-full flex flex-row justify-between items-center px-10 h-14">
      <div className="flex gap-10">
        <Image
          src="/logo.svg"
          width={71}
          height={40}
          alt="Picture of the author" />
        <Button variant="link">
          <Link href="/">&#60; Volver a Experiencia Nidera</Link>
        </Button>
      </div>
      <div className="self-end">
        <Tabs value={usePathname()} className="w-[400px]">
          <TabsList>
            <TabsTrigger value="/">
              <Link href="/">Dashboard</Link>
            </TabsTrigger>
            <TabsTrigger value="/recomendacion">
              <Link href="/recomendacion">Mis Recomendaciones</Link>
            </TabsTrigger>
            <TabsTrigger value="/lotes">Mis Lotes</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <HeaderProfile name="Edgardo Gonzalez" />
    </header>
  );
}

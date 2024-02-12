"use client"

import Container from '@/components/layouts/Container';
import MainSide from '@/components/layouts/MainSide';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';

export default function Lotes() {
  return (
    <Container
      main={
        <MainSide>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">UI</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/components/breadcrumb">
                Breadcrumb
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </MainSide>
      }
    />
  );
}

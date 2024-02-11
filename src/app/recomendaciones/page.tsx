"use client"

import DataTable from '@/components/recomendaciones/recomendacionesDataTable';
import { tableData } from '@/app/mockFile';

export default function Recomendaciones() {
  return (
    <div className="px-10">
      <DataTable
       list={tableData} />
    </div>
  );
}

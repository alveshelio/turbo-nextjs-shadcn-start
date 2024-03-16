'use client';

import { columns } from '@/app/[lng]/countries/columns';
import { DataTable } from '@/components/data-table/data-table';
import { useGetAllCountries } from '@/hooks/useGetAllCountries';
import { Heading } from '@/ui/heading';

export default function Countries() {
  const { data: countries, error } = useGetAllCountries();

  if (countries) {
    return (
      <div className="container mx-auto py-10">
        <Heading level={1}>Countries</Heading>
        <DataTable columns={columns} data={countries} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Loading...</div>;
}

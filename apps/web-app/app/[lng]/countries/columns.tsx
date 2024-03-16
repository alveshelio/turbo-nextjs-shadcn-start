'use client';

import { ActionsButton } from '@/components/actions-button/actions-button';
import { Country } from '@/types/countries';
import { Button } from '@/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';
import { Heading } from '@/ui/heading';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Country>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'flag',
    header: 'Flag',
  },
  {
    accessorKey: 'capital',
    header: 'Capital',
  },
  {
    accessorKey: 'region',
    header: 'Region',
  },
  {
    accessorKey: 'subregion',
    header: 'Subregion',
  },
  {
    accessorKey: 'population',
    header: 'Population',
  },
  {
    accessorKey: 'area',
    header: 'Area',
  },
  {
    header: () => <Heading level={4}>Actions</Heading>,
    id: 'actions',
    cell: ({ row }) => {
      return (
        <ActionsButton>
          <DropdownMenuItem>Copy payment ID {row.id}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>View customer</DropdownMenuItem>
          <DropdownMenuItem>View payment details</DropdownMenuItem>
        </ActionsButton>
      );
    },
  },
];

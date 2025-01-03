import React, { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { type LightingInstrument, dummyInstruments } from './sheet_data';

const Example = () => {
  const [data, setData] = useState<LightingInstrument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const loadData = async () => {
      try {
        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData(dummyInstruments);
      } catch (error) {
        console.error('Failed to load instruments:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const columns = useMemo<MRT_ColumnDef<LightingInstrument>[]>(
    () => [
      {
        accessorKey: 'Absolute_Address', // Access nested data with dot notation
        header: 'Absolute Address',
        size: 150,
      },
      {
        accessorKey: 'Inst_Type',
        header: 'Instrument Type',
        size: 200,
      },
      {
        accessorKey: 'Position',
        header: 'Position',
        size: 150,
      },
      {
        accessorKey: 'Unit_Number',
        header: 'Unit Number',
        size: 100,
      },
      {
        accessorKey: 'Accessories',
        header: 'Accessories',
        size: 200,
      },
      {
        accessorKey: 'Action',
        header: 'Action',
        size: 100,
      },
      {
        accessorKey: 'AppStamp',
        header: 'App Stamp',
        size: 150,
      },
      {
        accessorKey: 'Use_Legend',
        header: 'Use Legend',
        size: 150,
      },
      {
        accessorKey: 'Wattage',
        header: 'Wattage',
        size: 100,
      },
      {
        accessorKey: 'X_Location_mm',
        header: 'X Location (mm)',
        size: 150,
      },
      {
        accessorKey: 'Y_Location_mm',
        header: 'Y Location (mm)',
        size: 150,
      },
      {
        accessorKey: 'Z_Location_mm',
        header: 'Z Location (mm)',
        size: 150,
      },
    ],
    []
  );

  const handleAddRow = () => {
    const newRow: LightingInstrument = {
      Absolute_Address: 3,
      Inst_Type: "Martin MAC Encore Performance",
      Position: "3RD ELECTRIC",
      Unit_Number: 3,
      Accessories: "Barn Doors",
      Action: "Remove",
      AppStamp: "Lightwright",
      Channel: 103,
      Circuit_Name: "A1",
      Circuit_Number: "1",
      Class: "01.Lighting-Instruments",
      Color: "",
      Device_Type: "Light",
      Dimmer: "Dimmer 10",
      Focus: "Stage Left",
      Mode: "string",
      Layer: "OVERSTAGE- LED BAX",
      Lightwright_ID: "54321:098:76:54:Vecto",
      Purpose: "Key Light",
      Rotation: 45,
      Symbol_Name: "Light Instr Martin MAC Encore Performance",
      Template: "Gobo 1",
      Template2: "",
      TimeStamp: 20241205190300,
      UID: "12903.1.1.3.0",
      Use_Legend: "Encore",
      Wattage: "300 W",
      X_Location_mm: 17000,
      Y_Location_mm: 55000,
      Z_Location_mm: 7700,
    };
    setData([...data, newRow]);
  };

  return (
    <div>
      <button onClick={handleAddRow}>Add Row</button>
      <MaterialReactTable columns={columns} data={data} state={{ isLoading: loading }} />
    </div>
  );
};

export default Example;
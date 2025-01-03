export type LightingInstrument = {
    Absolute_Address: number;
    Accessories: string;
    Action: string;
    AppStamp: string;
    Channel: number;
    Circuit_Name: string;
    Circuit_Number: string;
    Class: string;
    Color: string;
    Device_Type: string;
    Dimmer: string;
    Focus: string;
    Mode: string; // Added Mode property
    Inst_Type: string;
    Layer: string;
    Lightwright_ID: string;
    Position: string;
    Purpose: string;
    Rotation: number;
    Symbol_Name: string;
    Template: string;
    Template2: string;
    TimeStamp: number;
    UID: string;
    Unit_Number: number;
    Use_Legend: string;
    Wattage: string;
    X_Location_mm: number;
    Y_Location_mm: number;
    Z_Location_mm: number;
};


export const dummyInstruments: LightingInstrument[] = [
    {
        Absolute_Address: 1,
        Inst_Type: "Chauvet Ovation F-915 FC",
        Position: "1ST ELECTRIC",
        Unit_Number: 1,
        Accessories: "eeeeeeee",
        Action: "Update",
        AppStamp: "Vectorworks",
        Channel: 101,
        Circuit_Name: "",
        Circuit_Number: "",
        Class: "01.Lighting-Instruments",
        Color: "",
        Device_Type: "Light",
        Dimmer: "",
        Focus: "",
        Layer: "OVERSTAGE- LED BAX",
        Lightwright_ID: "12345:678:90:12:Vecto",
        Purpose: "Wash",
        Rotation: 0,
        Symbol_Name: "Light Instr Chauvet Ovation F915 FC",
        Template: "",
        Mode: "New Mode", // Added Mode property
        Template2: "",
        TimeStamp: 20241205190105,
        UID: "12903.1.1.1.0",
        Use_Legend: "Ovation",
        Wattage: "260 W",
        X_Location_mm: 16000,
        Y_Location_mm: 56000,
        Z_Location_mm: 7800,
    },
    {
        Absolute_Address: 2,
        Inst_Type: "ETC Source Four LED",
        Position: "2ND ELECTRIC",
        Unit_Number: 2,
        Accessories: "",
        Action: "Add",
        AppStamp: "Vectorworks",
        Channel: 102,
        Circuit_Name: "",
        Circuit_Number: "",
        Class: "01.Lighting-Instruments",
        Color: "R80",
        Device_Type: "Light",
        Mode: "string",
        Dimmer: "",
        Focus: "Center",
        Layer: "OVERSTAGE- LED BAX",
        Lightwright_ID: "67890:123:45:67:Vecto",
        Purpose: "Spot",
        Rotation: 90,
        Symbol_Name: "Light Instr ETC Source Four LED",
        Template: "",
        Template2: "",
        TimeStamp: 20241205190200,
        UID: "12903.1.1.2.0",
        Use_Legend: "Source Four",
        Wattage: "200 W",
        X_Location_mm: 15000,
        Y_Location_mm: 57000,
        Z_Location_mm: 7900,
    },
    {
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
    },
];



export const columnDefinitions = [
    {
        accessorKey: 'Absolute_Address', // Access nested data with dot notation
        header: 'Absolute Address',
        size: 150,
    },
    {
        accessorKey: 'Accessories',
        header: 'Accessories',
        size: 200,
    },
    {
        accessorKey: 'Action',
        header: 'Action',
        size: 150,
    },
    {
        accessorKey: 'AppStamp',
        header: 'App Stamp',
        size: 200,
    },
    {
        accessorKey: 'Channel',
        header: 'Channel',
        size: 100,
    },
    {
        accessorKey: 'Circuit_Name',
        header: 'Circuit Name',
        size: 200,
    },
    {
        accessorKey: 'Circuit_Number',
        header: 'Circuit Number',
        size: 200,
    },
    {
        accessorKey: 'Class',
        header: 'Class',
        size: 250,
    },
    {
        accessorKey: 'Color',
        header: 'Color',
        size: 150,
    },
    {
        accessorKey: 'Device_Type',
        header: 'Device Type',
        size: 200,
    },
    {
        accessorKey: 'Dimmer',
        header: 'Dimmer',
        size: 150,
    },
    {
        accessorKey: 'Focus',
        header: 'Focus',
        size: 200,
    },
    {
        accessorKey: 'Inst_Type',
        header: 'Instrument Type',
        size: 300,
    },
    {
        accessorKey: 'Layer',
        header: 'Layer',
        size: 200,
    },
    {
        accessorKey: 'Lightwright_ID',
        header: 'Lightwright ID',
        size: 300,
    },
    {
        accessorKey: 'Position',
        header: 'Position',
        size: 200,
    },
    {
        accessorKey: 'Purpose',
        header: 'Purpose',
        size: 200,
    },
    {
        accessorKey: 'Rotation',
        header: 'Rotation',
        size: 150,
    },
    {
        accessorKey: 'Symbol_Name',
        header: 'Symbol Name',
        size: 300,
    },
    {
        accessorKey: 'Template',
        header: 'Template',
        size: 200,
    },
    {
        accessorKey: 'Template2',
        header: 'Template 2',
        size: 200,
    },
    {
        accessorKey: 'TimeStamp',
        header: 'Time Stamp',
        size: 200,
    },
    {
        accessorKey: 'UID',
        header: 'UID',
        size: 300,
    },
    {
        accessorKey: 'Unit_Number',
        header: 'Unit Number',
        size: 150,
    },
    {
        accessorKey: 'Use_Legend',
        header: 'Use Legend',
        size: 200,
    },
    {
        accessorKey: 'Wattage',
        header: 'Wattage',
        size: 150,
    },
    {
        accessorKey: 'X_Location_mm',
        header: 'X Location (mm)',
        size: 200,
    },
    {
        accessorKey: 'Y_Location_mm',
        header: 'Y Location (mm)',
        size: 200,
    },
    {
        accessorKey: 'Z_Location_mm',
        header: 'Z Location (mm)',
        size: 200,
    },
];

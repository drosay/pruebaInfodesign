export const tramoTableColumns = [
  { field: "Linea", headerName: "Linea", width: 150 },
  { field: "consumo", headerName: "Consumo", width: 150 },
  { field: "perdidas", headerName: "Perdidas", width: 150 },
  { field: "costo", headerName: "Costo", width: 150 },
];

export const clientTableColumns = [
  { field: "Linea", headerName: "Línea", width: 150 },
  { field: "consumo_residencial",headerName: "Consumo Residencial",width: 180,},
  { field: "consumo_comercial", headerName: "Consumo Comercial", width: 180 },
  { field: "consumo_industrial",headerName: "Consumo Industrial",width: 180,},
  { field: "perdidas_residencial",headerName: "Pérdidas Residencial",width: 180,},
  { field: "perdidas_comercial",headerName: "Pérdidas Comercial",width: 180,},
  { field: "perdidas_industrial",headerName: "Pérdidas Industrial",width: 180,},
  { field: "costo_residencial", headerName: "Costo Residencial", width: 180 },
  { field: "costo_comercial", headerName: "Costo Comercial", width: 180 },
  { field: "costo_industrial", headerName: "Costo Industrial", width: 180 },
];

export const tramoClientTableColumns = [
    { field: "Linea", headerName: "Línea", width: 100 },
    { field: "TipoConsumo", headerName: "Tipo de Consumo", width: 180 },
    { field: "Perdidas", headerName: "Pérdidas", width: 130 },
];
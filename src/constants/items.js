import { COLORS } from "./constants";

const [consumos, perdidas, costos] = ["Consumos", "Perdidas", "Costos"];

export const chartsItems = [
  { title: consumos, colors: [COLORS.cian, COLORS.tertiary] },
  { title: perdidas, colors: [COLORS.secondary, COLORS.text_primary] },
  { title: costos, colors: [COLORS.orange, COLORS.primary] },
];

export const checkItems = [
  { label: consumos, name: "consumption" },
  { label: perdidas, name: "losses" },
  { label: costos, name: "charge" },
];

export const menuItems = [
  { text: "Tramos", to: "/tramos" },
  { text: "Cliente", to: "/clientes" },
  { text: "Tramos-Cliente", to: "/tramos_clientes" },
];

export const radioItems = [
  { label: "Gráficas", value: "graph" },
  { label: "Tabla", value: "table" },
  { label: "Ambos", value: "both" },
];

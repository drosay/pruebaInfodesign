import toast from "react-hot-toast";

export default async function fetch_api({
  endpoint,
  fechainicial,
  fechafinal,
  body = {},
}) {
  if (!fechainicial || !fechafinal || !endpoint || fechainicial > fechafinal)
    return;

  try {
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fechainicial: fechainicial.format("YYYY-MM-DD"),
        fechafinal: fechafinal.format("YYYY-MM-DD"),
        ...body,
      }),
    };

    toast.loading("Obteniendo datos", { id: "one" });

    const response = await fetch(`http://localhost:4000/${endpoint}`, options);

    if (response.status !== 200)
      // eslint-disable-next-line no-throw-literal
      throw {
        status: response.status,
        message: response.statusText,
        fetch_error: true,
      };

    toast.success("Datos obtenidos", { id: "one" });

    return response.json();
  } catch (err) {
    toast.error(`No se han podido obtener datos`, {
      id: "one",
    });
  }
}

export default async function fetch_api({
  endpoint,
  fechainicial,
  fechafinal,
  body = {},
}) {
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

  try {
    const response = await fetch(`http://localhost:4000/${endpoint}`, options);
    if (response.status !== 200)
      // eslint-disable-next-line no-throw-literal
      throw {
        status: response.status,
        message: response.statusText,
        fetch_error: true,
      };
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

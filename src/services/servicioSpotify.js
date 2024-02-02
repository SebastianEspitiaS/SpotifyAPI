export async function pedirCanciones(id) {
  const url = "https://accounts.spotify.com/api/token";
  const urlCanciones = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=us`;
  const grant_type = "client_credentials";
  const client_id = "93cb930099214a7fa3ca93128a0402c6";
  const client_secret = "fb47db6b346c4d948e8ce8f99160689a";

  const datos = `grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`;

  const peticion = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: datos,
  };

  try {
    let respuesta = await fetch(url, peticion);
    let respuestaJSON = await respuesta.json();
    let token = respuestaJSON.token_type + " " + respuestaJSON.access_token;

    // Ya tengo token, debo ir por las canciones
    const peticionCanciones = {
      method: "GET",
      headers: { Authorization: token },
    };
    let canciones = await fetch(urlCanciones, peticionCanciones);
    let cancionesJSON = await canciones.json();
    return cancionesJSON;
  } catch (error) {
    console.log(error);
  }

  //https://api.spotify.com/v1/artists/2DaxqgrOhkeH0fpeiQq2f4
}

export async function pedirDatosArtistas(id) {
  const url = "https://accounts.spotify.com/api/token";
  const urlDatos = `https://api.spotify.com/v1/artists/${id}`;
  const grant_type = "client_credentials";
  const client_id = "179a0c8c73e2420abb7327af96814fd6";
  const client_secret = "9a1383b9d3834042a5dc466ab5362f82";

  const datos = `grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`;

  const peticion = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: datos,
  };

  try {
    let respuesta = await fetch(url, peticion);
    let respuestaJson = await respuesta.json();
    let token = respuestaJson.token_type + " " + respuestaJson.access_token;

    //ya tengo un token debo ir por la canciones

    const peticionDatos = {
      method: "GET",
      headers: { Authorization: token },
    };
    let canciones = await fetch(urlDatos, peticionDatos);
    let cancionesJSON = await canciones.json();
    return cancionesJSON;
  } catch (error) {
    console.log(error);
  }
}

// datos de cada artista

export async function pedirNombreArtista() {
  // kasabian: 11wRdbnoYqRddKBrpHt4Ue
  // rolling stones: 22bE4uQ6baNwSHPVcDxLCe
  // beatles: 3WrFJ7ztbogyGnTHbHJFl2
  // the cure: 7bu3H8JO7d0UbMoVzbo70s
  // depeche mode: 762310PdDnwsDxAQxzQkfX

  //let ids = '11wRdbnoYqRddKBrpHt4Ue%22bE4uQ6baNwSHPVcDxLCe%3WrFJ7ztbogyGnTHbHJFl2%7bu3H8JO7d0UbMoVzbo70s%762310PdDnwsDxAQxzQkfX'
  const url = "https://accounts.spotify.com/api/token";
  const urlDatos =
    "https://api.spotify.com/v1/artists?ids=3tAICgiSR5PfYY4B8qsoAU,4uqzzJg3ww5eH7IgGV7DMT,60nua3AsVSfADZtg5Hdz3W,7An4yvF7hDYDolN4m5zKBp,4TK1gDgb7QKoPFlzRrBRgR";
  const grant_type = "client_credentials";
  const client_id = "179a0c8c73e2420abb7327af96814fd6";
  const client_secret = "9a1383b9d3834042a5dc466ab5362f82";

  const datos = `grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`;

  const peticion = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: datos,
  };

  try {
    let respuesta = await fetch(url, peticion);
    let respuestaJson = await respuesta.json();
    let token = respuestaJson.token_type + " " + respuestaJson.access_token;

    //ya tengo un token debo ir por la canciones

    const peticionDatos = {
      method: "GET",
      headers: { Authorization: token },
    };
    let nombres = await fetch(urlDatos, peticionDatos);
    let nombresJSON = await nombres.json();
    return nombresJSON;
  } catch (error) {
    console.log(error);
  }
}

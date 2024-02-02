import { useEffect, useState } from "react";
import { Menu } from "../Menu/Menu";
import { Music } from "../Music/Music";
import { pedirDatosArtistas } from "../services/servicioSpotify";
import "./Artist.css";
import { useParams } from "react-router-dom";

export function Artist() {
  const { id } = useParams();

  // crear un fetch para llamar la api con el nombre del artista
  const [datos, setDatos] = useState(null);
  const [carga, setCarga] = useState(true);

  useEffect(
    function () {
      pedirDatosArtistas(id)
        .then(function (respuesta) {
          console.log(respuesta);
          setDatos(respuesta);
          setCarga(false);
        })
        .catch(function (respuestaError) {
          console.log(respuestaError);
        });
    },
    [id]
  );

  console.log(carga);

  if (carga) {
    return (
      <>
        <h3>cargando...</h3>
      </>
    );
  } else {
    return (
      <>
        <header className="header">
          <Menu />
          <div className="banner text-white">
            <img className="banner-img" src={`${datos.images[0].url}`} alt="" />
            {console.log("hola" + datos.url)}
            <h3 className="fuente">{datos.name}</h3>
          </div>
        </header>
        <main>
          <section className="container-music">
            <Music />
          </section>
        </main>
      </>
    );
  }
}

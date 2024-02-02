import "./Music.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { pedirCanciones } from "../services/servicioSpotify";
export function Music() {
  const { id } = useParams();
  const [canciones, setCanciones] = useState(null);
  const [carga, setCarga] = useState(true);

  useEffect(
    function () {
      pedirCanciones(id)
        .then(function (respuesta) {
          setCanciones(respuesta);
          setCarga(false);
          console.log("res: " + respuesta);
        })
        .catch(function (respuestaError) {
          console.log(respuestaError);
        });
    },
    [id]
  );

  if (carga) {
    return (
      <>
        <h3>Cargando...</h3>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="row row-col-1 row-cols-md-3">
            {canciones.tracks.map(function (cancion) {
              return (
                <div key={cancion} className="col">
                  <div className="card h-100 shadow">
                    <h3 className="title-music">{cancion.name}</h3>
                    <img
                      src={cancion.album.images[0].url}
                      alt=""
                      className="img-fluid w-100"
                    />
                    {cancion.preview_url ? (
                      <audio
                        src={cancion.preview_url}
                        controls
                        className="px-2"
                      ></audio>
                    ) : (
                      <h3>Preview no disponible</h3>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

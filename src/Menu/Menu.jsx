import "./Menu.css";
import { pedirNombreArtista } from "../services/servicioSpotify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Menu() {
  const [nombres, setNombres] = useState([]);
  useEffect(function () {
    pedirNombreArtista()
      .then(function (respuesta) {
        console.log(respuesta);
        setNombres(respuesta.artists);
      })
      .catch(function (respuestaError) {
        console.log(respuestaError + " hola error");
      });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg colormenu navbar-dark fixed-top">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Spotifake
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Artistas
                </a>
                <ul className="dropdown-menu">
                  {nombres.length > 0 ? (
                    nombres.map(function (nombre) {
                      return (
                        <li key={nombre.id}>
                          <Link
                            className="dropdown-item"
                            to={`/Artist/${nombre.id}`}
                          >
                            {nombre.name}
                          </Link>
                        </li>
                      );
                    })
                  ) : (
                    <p>Cargando artistas...</p>
                  )}
                </ul>
              </li>
            </ul>
            <button className="btn btn-outline" type="">
              Registrarte
            </button>
            <button className="btn btn-outline-success" type="submit">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

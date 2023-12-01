import './Menu.css'
import { pedirNombreArtista } from '../services/servicioSpotify'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Menu() {
    const [nombres, setNombres] = useState([])
    useEffect(function () {
        pedirNombreArtista()
            .then(function (respuesta) {
                console.log(respuesta)
                setNombres(respuesta.artists)

            })
            .catch(function (respuestaError) {
                console.log(respuestaError + ' hola error');
            })
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg colormenu navbar-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Spotifake
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Inicio
                                </a>
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
                                    {
                                        nombres.length > 0 ? (
                                            nombres.map(function (nombre) {
                                                return (
                                                    <li key={nombre.id}>
                                                        <Link className="dropdown-item" to={`/Artist/${nombre.id}`}>
                                                            {nombre.name}
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        ) : (
                                            <p>Cargando artistas...</p>
                                        )
                                    }

                                   
                        
                                </ul>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}
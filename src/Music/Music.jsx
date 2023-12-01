import './Music.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { pedirCanciones} from '../services/servicioSpotify'
export function Music() {
    //const parametros = useParams()
    const [canciones, setCanciones]=useState(null)
    const [carga,setCarga]=useState(true)

    

    useEffect(function(){
        pedirCanciones()
        .then( function(respuesta){
            setCanciones(respuesta)
            setCarga(false)
            console.log('res: '+respuesta)
        })
        .catch( function(respuestaError){
            console.log(respuestaError)
        })
    },[])

    if(carga) {
        return(
            <>
                <h3>Cargando...</h3>
            </>
        )
    } else{
        return(
            <>
                <div className="container" >
                    <div className="row row-col-1 row-cols-md-3">
                        {
                            canciones.tracks.map(function(cancion){
                                return  (
                                    <div key={cancion} className="col">
                                        <div className="card h-100 shadow">
                                            <h3>{cancion.name}</h3>
                                            <img src={cancion.album.images[0].url} alt="" className='img-fluid w-100' />
                                            <audio src={cancion.preview_url} controls className='w-100 px-2'></audio>
                                        </div>
                                    </div>
                                )
                            })}

                    </div>
                </div>
            </>
        )

    }
}
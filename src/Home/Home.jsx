// import React from 'react'
import { Menu } from "../Menu/Menu";
import "./Home.css";

import art1 from "../assets/Art1.jpg";
import art2 from "../assets/Art2.jpg";
import art3 from "../assets/Art3.avif";
import art4 from "../assets/Art4.jpg";
import art5 from "../assets/Art5.jpeg";

const Home = () => {
  const musicData = [
    {
      id: 1,
      title: "La parte de adelante",
      artist: "Andrés Calamaro",
      image: art1,
    },
    {
      id: 2,
      title: "Lady Blue",
      artist: "Enrique Bunbury",
      image: art2,
    },
    {
      id: 3,
      title: "Para no verte más",
      artist: "La Mosca Tsé-Tsé",
      image: art3,
    },
    {
      id: 3,
      title: "De música ligera",
      artist: "Soda Stereo",
      image: art4,
    },
    {
      id: 3,
      title: "Tu cárcel",
      artist: "Enanitos Verdes",
      image: art5,
    },
    {
      id: 3,
      title: "Flaca",
      artist: "Andrés Calamaro",
      image: art1,
    },
    {
      id: 3,
      title: "Y al final",
      artist: "Enrique Bunbury",
      image: art2,
    },
    {
      id: 3,
      title: "Todos tenemos un amor",
      artist: "La Mosca Tsé-Tsé",
      image: art3,
    },
    {
      id: 3,
      title: "Cuando pase el temblor",
      artist: "Soda Stereo",
      image: art4,
    },
    {
      id: 3,
      title: "Lamento boliviano",
      artist: "Enanitos Verdes",
      image: art5,
    },
  ];

  return (
    <div className="home">
      <Menu />
      <h1 id="title-main">Bienvenido a Spotifake</h1>

      <div className="music-cards">
        {musicData.map((music) => (
          <div key={music.id} className="music-card">
            <img src={music.image} alt={`Portada de ${music.title}`} />
            <div className="music-info">
              <h3>{music.title}</h3>
              <p>{music.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

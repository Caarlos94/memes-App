import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  let names = [
    "bugs",
    "cheems",
    "bugs2",
    "cheems2",
    "futurama",
    "homero",
    "leonardo",
    "llamas",
    "patricio",
    "perrito",
    "perrito2",
    "smart",
    "yoda",
  ];

  const [meme, setMeme] = useState({
    textoArriba: "",
    textoAbajo: "",
    imagen: "",
  });

  function handlerChange(e) {
    setMeme({ ...meme, [e.target.name]: e.target.value });
  }

  function handlerClick() {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("imagen/png");
      var link = document.createElement('a');
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
    setMeme({
      textoArriba: "",
      textoAbajo: "",
      imagen: "",
    });
  }

  return (
    <div className="App">
      <h1>Genera tu meme personal</h1>
      <select name="imagen" onChange={handlerChange} value={meme.imagen}>
        <option hidden>Selecciona el meme</option>
        {names.map((name, i) => {
          return (
            <option key={i} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <br />
      <input
        type="text"
        name="textoArriba"
        onChange={handlerChange}
        placeholder="Escribe tu texto"
        value={meme.textoArriba}
      />
      <br />
      <input
        type="text"
        name="textoAbajo"
        onChange={handlerChange}
        placeholder="Escribe tu texto"
        value={meme.textoAbajo}
      />
      <br />
      <div id="meme" className="imageContain">
        <p className="arriba">{meme.textoArriba}</p>
        <p className="abajo">{meme.textoAbajo}</p>
        {meme.imagen ? (
          <img alt="imagen" src={`./img/${meme.imagen}.jpg`} />
        ) : (
          ""
        )}
        <br />
      </div>
      <button onClick={handlerClick}>DESCARGAR</button>
    </div>
  );
}

export default App;

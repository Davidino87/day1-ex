import React from "react";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <ButtonComponent buttonText="Cliccami!" />
      <ImageComponent
        src="https://img.freepik.com/free-photo/explosion-colored-powder-white-background_1112-1555.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702771200&semt=sph"
        altText="BOOOM"
      />
    </div>
  );
}

export default App;

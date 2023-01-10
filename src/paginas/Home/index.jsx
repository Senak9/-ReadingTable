import { useState } from "react";
import "./styles.css";
import Header from "../../componentes/Header";
import RandomItens from "../../componentes/RandomItens";

function Home() {
  return (
    <div className="container-home">
      <Header />
      <section>
        <div container-box>
          <RandomItens />
          <div>MDJKDKKM</div>
        </div>
        <div>ssss</div>
      </section>
    </div>
  );
}

export default Home;

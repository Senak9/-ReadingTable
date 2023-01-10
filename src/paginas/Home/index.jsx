import { useState } from "react";
import "./styles.css";
import Header from "../../componentes/Header";
import RandomItens from "../../componentes/RandomItens";
import GroupsItens from "../../componentes/GroupsItens";
import UpdatedItens from "../../componentes/UpdatedItens";

function Home() {
  return (
    <div className="container-home">
      <Header />
      <section>
        <div className="container-box">
          <RandomItens />
          <GroupsItens />
        </div>
        <UpdatedItens />
      </section>
    </div>
  );
}

export default Home;

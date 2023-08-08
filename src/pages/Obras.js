import React, { useState } from "react";

import Obra from "../assets/img/house-banner.png";
import "../assets/styles/tabs.css";
import GabiCasa from "../components/GabiCasa";
const Obras = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className="tabs h-full max-h-[1840px] mb-8 xl:mb-24">
        <ul>
          <li
            title="Gabi's house"
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabChange(1)}
          >
            <label>Gabi's house</label>
          </li>
          <li
            title="second Contents"
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabChange(2)}
          >
            <label>second Contents</label>
          </li>
          <li
            title="third content"
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabChange(3)}
          >
            <label>third content</label>
          </li>
          <li
            title="4th content"
            className={activeTab === 4 ? "active" : ""}
            onClick={() => handleTabChange(4)}
          >
            <label>4th content</label>
          </li>
        </ul>

        <div className="slider">
          <div
            className="indicator"
            style={{ left: `calc(${(activeTab - 1) * 100}%)` }}
          ></div>
        </div>
        <div className="content ">
          <GabiCasa activeTab={activeTab} />
          <section style={{ display: activeTab === 2 ? "block" : "none" }}>
            <h2>second Contents</h2>
            second Contents
          </section>
          <section style={{ display: activeTab === 3 ? "block" : "none" }}>
            <h2>third content</h2>
            third content
          </section>
          <section style={{ display: activeTab === 4 ? "block" : "none" }}>
            <h2>4th content</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dicta
            vero rerum? Eaque repudiandae architecto libero reprehenderit
            aliquam magnam ratione quidem? Nobis doloribus molestiae enim
            deserunt necessitatibus eaque quidem incidunt.
          </section>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="hidden flex-1 lg:flex justify-end items-end">
            <img src={Obra} className="rounded-lg" alt="" />
          </div>
          <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-end flex-1 px-4 lg:px-0">
            <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
              <span className="text-orangers">Construa</span> Sua Casa Dos
              Sonhos Conosco.
            </h1>
            <p className="max-w-[580px] mb-8">
              Com a Roberto Silveira o sonho de ter um lugar para chamar de seu
              está muito perto de se realizar! Temos diversas plantas
              disponíveis para você escolher o lugar onde você irá criar as
              memórias mais felizes com sua família. Mas se você deseja ir além,
              criamos um projeto do zero com base nas suas necessidades ou
              avaliamos o projeto que você já tem, para fazer do seu sonho
              realidade.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-4">
              <button className="bg-orangers hover:bg-orange-400 text-white rounded p-4 text-sm w-full transition">
                <a
                  href="https://api.whatsapp.com/send/?phone=+553499860-7766&text=Olá!"
                  target="_blank"
                >
                  Entre em contato agora
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Obras;

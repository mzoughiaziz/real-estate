import React from "react";

const CongratsPage = () => {
  return (
    <div>
      <div className=" text-center">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-center text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h4 className="text-4xl lg:text-[48px] font-semibold leading-none mb-6">
            <span className="text-orangers">Informações</span> enviadas
          </h4>
          <p className="max-w-[70%] mb-8">
            Você acaba de dar um grande passo para a realização do seu sonho,
            entraremos em contato em breve!
          </p>

          <div className="mb-4">
            <button className="bg-orangers hover:bg-orange-400 text-white rounded p-4 text-sm w-full transition">
              <a
                href="https://api.whatsapp.com/send/?phone=+553499860-7766&text=Olá!"
                target="_blank"
              >
                Falar agora com um especialista
              </a>
            </button>
          </div>
          <p className="text-orangers pb-2">
            {" "}
            Equipe de Vendas da Roberto Silveira{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CongratsPage;

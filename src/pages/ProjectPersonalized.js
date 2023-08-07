import React, { useState, useEffect } from "react";

const ProjectPersonalized = () => {
  const [formData, setFormData] = useState({
    step1: { input1_1: "", input1_2: "" },
    step2: { input2_1: "", input2_2: "" },
    step3: { input3_1: "", input3_2: "" },
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  useEffect(() => {
    // Enable or disable Next button based on input validity whenever formData or currentStep changes
    setNextButtonDisabled(!validateInputs(currentStep));
  }, [formData, currentStep]);

  const handleNextStep = () => {
    // if (validateInputs(currentStep)) {
    setCurrentStep((prevStep) => prevStep + 1);
    // }
    console.log({ formData });
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    console.log({ formData });
  };

  const validateInputs = (step) => {
    const currentStepData = formData[`step${step}`];
    // You can add your validation logic for each step's inputs here
    switch (step) {
      case 1:
        return (
          currentStepData.input1_1.trim() !== "" &&
          currentStepData.input1_2.trim() !== ""
        );
      case 2:
        return true;
      case 3:
        return (
          currentStepData.input3_1.trim() !== "" &&
          currentStepData.input3_2.trim() !== ""
        );
      default:
        return true;
    }
  };

  const handleNextButtonStatus = () => {
    setNextButtonDisabled(!validateInputs(currentStep));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [`step${currentStep}`]: {
        ...prevFormData[`step${currentStep}`],
        [name]: value,
      },
    }));
  };

  const renderStepInputs = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h3 className="font-semibold">Seus Dados</h3>
            <p>Nome</p>
            <input
              className="border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              name="input1_1"
              placeholder="Roberto Silveira"
              required
              value={formData.step1.input1_1}
              onChange={handleInputChange}
            />
            <p>Telefone</p>
            <input
              className="border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              name="input1_2"
              placeholder="+55 34 91234 5678"
              required
              value={formData.step1.input1_2}
              onChange={handleInputChange}
            />
            <p>E-mail</p>
            <input
              className="border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              name="input1_3"
              placeholder="email@email.com"
              required
              value={formData.step1.input1_3}
              onChange={handleInputChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <h3 className="font-semibold">Tipo de imóvel desejado</h3>
            <p>Casa térrea</p>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Casa térrea</option>
                <option>Sobrado</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="font-semibold">Sobre os quartos</h3>
            <p>Quantidade sem banheiro</p>
            <input
              className="border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none"
              type="number"
              min={1}
              name="input1_1"
              // placeholder="Roberto Silveira"
              required
              value={formData.step1.input1_1}
              onChange={handleInputChange}
            />
            <p>Quantidade de suítes</p>
            <input
              className="border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none"
              type="number"
              min={1}
              name="input1_1"
              // placeholder="Roberto Silveira"
              required
              value={formData.step1.input1_1}
              onChange={handleInputChange}
            />
          </>
        );
      case 4:
        return (
          <>
            <h3 className="font-semibold">Sobre banheiros sociais</h3>
            <p>Quantidade de banheiros completos (sanitário e ducha)</p>
            <input
              className="border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none"
              type="number"
              min={1}
              name="input1_1"
              // placeholder="Roberto Silveira"
              required
              value={formData.step1.input1_1}
              onChange={handleInputChange}
            />
            <p>Quantidade de lavabos</p>
            <input
              className="border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none"
              type="number"
              min={1}
              name="input1_1"
              // placeholder="Roberto Silveira"
              required
              value={formData.step1.input1_1}
              onChange={handleInputChange}
            />
          </>
        );
      case 5:
        return (
          <>
            <h3 className="font-semibold">Sobre área de lazer e garagem</h3>
            <p>Garagem coberta?</p>
            <div>
              <input
                className="border form-radio mr-2"
                type="radio"
                name="Garagem coberta"
                // placeholder="Roberto Silveira"
                required
                value="sim"
                onChange={handleInputChange}
                style={{ "accent-color": "#F27427" }}
              />
              <span>sim</span>
            </div>
            <div>
              <input
                className=" form-radio border mr-2"
                style={{ "accent-color": "#F27427" }}
                type="radio"
                name="Garagem coberta"
                // placeholder="Roberto Silveira"
                required
                value="no"
                onChange={handleInputChange}
              />
              <span>no</span>
            </div>

            <p>Quantos carros na garagem?</p>
            <input
              className="border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none"
              type="number"
              min={1}
              // placeholder="Roberto Silveira"
              required
              onChange={handleInputChange}
            />
            <p>Área de lazer com espaço gourmet e churrasqueira?</p>
            <input
              className="border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none"
              type="number"
              min={1}
              // placeholder="Roberto Silveira"
              required
              onChange={handleInputChange}
            />
            <p>Piscina na área de lazer?</p>
            <input
              className="border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none"
              type="number"
              min={1}
              // placeholder="Roberto Silveira"
              required
              onChange={handleInputChange}
            />
          </>
        );

      case 6:
        return (
          <>
            <h3 className="font-semibold">Sobre cozinha e sala de jantar</h3>
            <p>Ambientes separados ou modelo americano?</p>
            <div>
              <input
                className=" form-radio border mr-2"
                style={{ "accent-color": "#F27427" }}
                type="radio"
                name="Garagem coberta"
                // placeholder="Roberto Silveira"
                required
                value="separados"
                // onChange={handleInputChange}
              />
              <label>separados</label>
            </div>

            <div>
              <input
                className=" form-radio border mr-2"
                style={{ "accent-color": "#F27427" }}
                type="radio"
                name="Garagem coberta"
                // placeholder="Roberto Silveira"
                required
                value="modelo americano"
                // onChange={handleInputChange}
              />
              <label>modelo americano</label>
            </div>

            <p>Cozinha e sala de jantar e TV integrados ou separados?</p>
            <div>
              <input
                className=" form-radio border mr-2"
                style={{ "accent-color": "#F27427" }}
                type="radio"
                name="Garagem coberta"
                // placeholder="Roberto Silveira"
                required
                value="integrados"
                onChange={handleInputChange}
              />
              <label>integrados</label>
            </div>

            <div>
              <input
                className=" form-radio border mr-2"
                style={{ "accent-color": "#F27427" }}
                type="radio"
                name="Garagem coberta"
                // placeholder="Roberto Silveira"
                required
                value="separados"
                onChange={handleInputChange}
              />
              <label>separados</label>
            </div>
          </>
        );
      case 7:
        return (
          <>
            <h3 className="font-semibold">
              Sobre a aquisição de terreno e imóvel
            </h3>
            <p>Já possui o terreno, pretende comprar à vista ou financiar?</p>
            <div>
              <input
                className=" form-radio border mr-2"
                style={{ "accent-color": "#F27427" }}
                type="radio"
                name="Garagem coberta"
                // placeholder="Roberto Silveira"
                required
                value="sim"
                onChange={handleInputChange}
              />
              <label></label>
            </div>
            <div>
              <input
                className=" form-radio border mr-2"
                style={{ "accent-color": "#F27427" }}
                type="radio"
                name="Garagem coberta"
                // placeholder="Roberto Silveira"
                required
                value="não"
                onChange={handleInputChange}
              />
              <label>não</label>
            </div>

            <p>A obra será financiada?</p>
            <div>
              <input
                className=" form-radio border mr-2"
                style={{ "accent-color": "#F27427" }}
                type="radio"
                name="Garagem coberta"
                // placeholder="Roberto Silveira"
                required
                value="sim"
                // onChange={handleInputChange}
              />
              <label>sim</label>
            </div>
            <div>
              <input
                className=" form-radio border mr-2"
                style={{ "accent-color": "#F27427" }}
                type="radio"
                name="Garagem coberta"
                // placeholder="Roberto Silveira"
                required
                value="não"
                // onChange={handleInputChange}
              />
              <label>não</label>
            </div>
          </>
        );

      case 8:
        return (
          <>
            <h3 className="font-semibold">
              Insira aqui observações adicionais que considere importante.
            </h3>
            {/* <p>Já possui o terreno, pretende comprar à vista ou financiar?</p> */}
            <textarea
              className="border border-gray-300 focus:border-orangers rounded w-full px-4 text-sm outline-none"
              name="Garagem coberta"
              // placeholder="Roberto Silveira"
              required
              onChange={handleInputChange}
              rows={8}
            ></textarea>
          </>
        );

      default:
        return null;
    }
  };
  return (
    <div className={``}>
      <div
        className={`lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0`}
      >
        <h4
          className={`text-4xl lg:text-[48px] font-semibold leading-none mb-6`}
        >
          <span className={`text-orangers`}>Bem-vindo</span> ao nosso criador de
          projetos personalizados!
        </h4>
        <p className={`max-w-[70%] mb-8`}>
          Aqui, você tem a liberdade de escolher cada detalhe do seu projeto,
          tornando-o verdadeiramente único e especial. Seja um design elegante,
          uma funcionalidade específica ou cores que combinem com sua
          personalidade , nós garantimos que cada escolha seja cuidadosamente
          incorporada.
        </p>
        {/* {renderStep()} */}
        <div className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
          {/* <ol
            className={`flex items-center w-full p-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base`}
          >
            <li
              className={`flex md:w-full items-center ${
                currentStep >= 1 ? "text-orange-600 dark:text-orange-500" : ""
              }`}
            >
              {currentStep >= 1 && (
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F16E25"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
              )}
              <span
                className={`flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 orange`}
              >
                Personal{" "}
                <span className={`hidden sm:inline-flex sm:ml-2`}>Info</span>
              </span>
            </li>
            <li
              className={`flex md:w-full items-center ${
                currentStep >= 2 ? "text-orange-600 dark:text-orange-500" : ""
              }`}
            >
              {currentStep >= 2 && (
                <svg
                  class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F16E25"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
              )}
              <span
                className={`flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500`}
              >
                <span className={`mr-2`}>2</span>
                Account{" "}
                <span className={`hidden sm:inline-flex sm:ml-2`}>Info</span>
              </span>
            </li>
            <li
              className={`flex items-center ${
                currentStep >= 3 ? "text-orange-600 dark:text-orange-500" : ""
              }`}
            >
              {currentStep >= 3 && (
                <svg
                  class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F16E25"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
              )}
              <span className={`mr-2 `}>3</span>
              Confirmation
            </li>
          </ol> */}
          <form className="flex flex-col gap-y-4">
            {renderStepInputs()}

            <div className="flex gap-x-2 relative">
              {currentStep >= 2 && (
                <button
                  className="bg-orangers hover:bg-orange-400 text-white rounded p-4 text-sm absolute left-0 transition"
                  onClick={handlePrevStep}
                  type="button"
                >
                  Previous
                </button>
              )}
              {currentStep <= 7 ? (
                <button
                  className="bg-orangers hover:bg-orange-400 text-white rounded p-4 text-sm absolute right-0 transition"
                  onClick={handleNextStep}
                  // disabled={nextButtonDisabled}
                  type="button"
                >
                  Next
                </button>
              ) : (
                <button
                  className="bg-orangers hover:bg-orange-400 text-white rounded p-4 text-sm absolute right-0 transition"
                  // onClick={handleNextStep}
                  // disabled={nextButtonDisabled}
                  type="button"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
        {/* <h4 className={`text-4xl lg:text-[48px] font-semibold leading-none mb-6`}>
          <span className={`text-orangers`}>Bem-vindo</span> ao nosso criador de projetos personalizados!
        </h4>
        <p className={`max-w-[70%] mb-8`}>
          Aqui, você tem a liberdade de escolher cada detalhe do seu projeto, tornando-o verdadeiramente único e especial.
          Seja um design elegante, uma funcionalidade específica ou cores que combinem com sua personalidade
          , nós garantimos que cada escolha seja cuidadosamente incorporada.
        </p> */}
        {/* Contact component */}
      </div>
    </div>
  );
};

export default ProjectPersonalized;

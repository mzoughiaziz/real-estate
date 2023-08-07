import React, { useState } from "react";

const StepInput = ({ label, type, name, value, onChange }) => (
  <>
    <p>{label}</p>
    <input
      className="border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none"
      type={type}
      name={name}
      placeholder={label}
      value={value}
      onChange={onChange}
      min={1}
    />
  </>
);

const SelectInput = ({ label, options, name, value, onChange }) => (
  <>
    <p>{label}</p>
    <select
      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      name={name}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </>
);

const RadioInput = ({ label, options, name, value, onChange }) => (
  <>
    <p>{label}</p>
    {options.map((option) => (
      <div key={option}>
        <input
          className="form-radio border mr-2"
          style={{ "accent-color": "#F27427" }}
          type="radio"
          name={name}
          value={option}
          checked={value === option}
          onChange={onChange}
        />
        <span>{option}</span>
      </div>
    ))}
  </>
);

const ProjectPersonalized = () => {
  const [formData, setFormData] = useState({
    step1: { input1_1: "", input1_2: "", input1_3: "" },
    step2: { input2_1: "" },
    step3: { input3_1: "", input3_2: "" },
    step4: { input4_1: "", input4_2: "" },
    step5: { input5_1: "", input5_2: "", input5_3: "", input5_4: "" },
    step6: { input6_1: "", input6_2: "", input6_3: "" },
    step7: { input7_1: "", input7_2: "" },
    step8: { input8_1: "" },
  });

  const [currentStep, setCurrentStep] = useState(1);

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

  const handleSubmit = () => {
    // Send formData to server using a POST request
    // Implement your POST request logic here
    console.log(formData);
  };

  const renderStepInputs = () => {
    const stepData = formData[`step${currentStep}`];
    switch (currentStep) {
      case 1:
        return (
          <>
            <h3 className="font-semibold">Seus Dados</h3>
            <StepInput
              label="Nome"
              type="text"
              name="input1_1"
              value={stepData.input1_1}
              onChange={handleInputChange}
            />
            <StepInput
              label="Telefone"
              type="text"
              name="input1_2"
              value={stepData.input1_2}
              onChange={handleInputChange}
            />
            <StepInput
              label="E-mail"
              type="text"
              name="input1_3"
              value={stepData.input1_3}
              onChange={handleInputChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <h3 className="font-semibold">Tipo de imóvel desejado</h3>
            <SelectInput
              label="Tipo de imóvel"
              options={["Casa térrea", "Sobrado"]}
              name="input2_1"
              value={stepData.input2_1}
              onChange={handleInputChange}
            />
          </>
        );
      case 3:
        return (
          <>
            <h3 className="font-semibold">Sobre os quartos</h3>
            <StepInput
              label="Quantidade sem banheiro"
              type="number"
              min={1}
              name="input3_1"
              value={stepData.input3_1}
              onChange={handleInputChange}
            />
            <StepInput
              label="Quantidade de suítes"
              type="number"
              min={1}
              name="input3_2"
              value={stepData.input3_2}
              onChange={handleInputChange}
            />
          </>
        );

      case 4:
        return (
          <>
            <h3 className="font-semibold">Sobre banheiros sociais</h3>
            <StepInput
              label="Quantidade de banheiros completos (sanitário e ducha)"
              type="number"
              min={1}
              name="input4_1"
              value={stepData.input4_1}
              onChange={handleInputChange}
            />
            <StepInput
              label="Quantidade de lavabos"
              type="number"
              min={1}
              name="input4_2"
              value={stepData.input4_2}
              onChange={handleInputChange}
            />
          </>
        );
      case 5:
        return (
          <>
            <h3 className="font-semibold">Sobre área de lazer e garagem</h3>
            <RadioInput
              label="Garagem coberta?"
              options={["sim", "não"]}
              name="input5_1"
              value={stepData.input5_1}
              onChange={handleInputChange}
            />
            <StepInput
              label="Quantos carros na garagem?"
              type="number"
              min={1}
              name="input5_2"
              value={stepData.input5_2}
              onChange={handleInputChange}
            />
            <RadioInput
              label="Área de lazer com espaço gourmet e churrasqueira?"
              options={["sim", "não"]}
              name="input5_3"
              value={stepData.input5_3}
              onChange={handleInputChange}
            />
            <RadioInput
              label="Piscina na área de lazer?"
              options={["sim", "não"]}
              name="input5_4"
              value={stepData.input5_4}
              onChange={handleInputChange}
            />
          </>
        );
      case 6:
        return (
          <>
            <h3 className="font-semibold">Sobre cozinha e sala de jantar</h3>
            <RadioInput
              label="Ambientes separados ou modelo americano?"
              options={["separados", "modelo americano"]}
              name="input6_1"
              value={stepData.input6_1}
              onChange={handleInputChange}
            />
            <RadioInput
              label="Cozinha e sala de jantar e TV integrados ou separados?"
              options={["integrados", "separados"]}
              name="input6_2"
              value={stepData.input6_2}
              onChange={handleInputChange}
            />
            <RadioInput
              label="Cozinha e sala de jantar e TV integrados ou separados?"
              options={["integrados", "separados"]}
              name="input6_3"
              value={stepData.input6_3}
              onChange={handleInputChange}
            />
          </>
        );
      case 7:
        return (
          <>
            <h3 className="font-semibold">
              Sobre a aquisição de terreno e imóvel
            </h3>
            <RadioInput
              label="Já possui o terreno, pretende comprar à vista ou financiar?"
              options={[
                "eu já possuo a terra",
                "pretendo comprar a vista ou financiar",
              ]}
              name="input7_1"
              value={stepData.input7_1}
              onChange={handleInputChange}
            />
            <RadioInput
              label="A obra será financiada?"
              options={["sim", "não"]}
              name="input7_2"
              value={stepData.input7_2}
              onChange={handleInputChange}
            />
         
          </>
        );
      case 8:
        return (
          <>
            <h3 className="font-semibold">
              Insira aqui observações adicionais que considere importante.
            </h3>
            <textarea
              className="border border-gray-300 focus:border-orangers rounded w-full px-4 text-sm outline-none"
              name="input8_1"
              value={stepData.input8_1}
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
                  onClick={() => setCurrentStep(currentStep - 1)}
                  type="button"
                >
                  Previous
                </button>
              )}
              {currentStep <= 7 ? (
                <button
                  className="bg-orangers hover:bg-orange-400 text-white rounded p-4 text-sm absolute right-0 transition"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  // disabled={nextButtonDisabled}
                  type="button"
                >
                  Next
                </button>
              ) : (
                <button
                  className="bg-orangers hover:bg-orange-400 text-white rounded p-4 text-sm absolute right-0 transition"
                  onClick={handleSubmit}
                  // disabled={nextButtonDisabled}
                  type="button"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectPersonalized;

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const ProjectPersonalized = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();
const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsFormSubmitting(true);

    const formData = new FormData();
    formData.append("file", data.file[0]); // Access the file from form data

    for (const key in data) {
      if (key !== "file") {
        formData.append(key, data[key]);
      }
    }

    try {
      const response = await axios.post('http://localhost:4003/api/project-personalized', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file uploads
      },
    });


      if (response.data.success === true) {
        navigate('/mabrouk')
        // setLocalSuccess(true);
      } else {
        console.log(response);
        // setLocalError(true);
      }
    } catch (error) {
      console.log(error);
      // setLocalError(true);
    } finally {
      setIsFormSubmitting(false);
    }
  };

  const StepInput = ({ label, type, name, value, onChange }) => (
    <>
      <p>{label}</p>
      <input
        className="border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none"
        type={type}
        name={name}
        placeholder={label}
        min={1}
        {...register(name, {})}
      />
    </>
  );

  const SelectInput = ({ label, options, name, value, onChange }) => (
    <>
      <p>{label}</p>
      <select
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        name={name}
        {...register(name, {})}
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
            style={{ accentColor: "#F27427" }}
            type="radio"
            name={name}
            value={option}
            {...register(name, {})}
          />
          <span>{option}</span>
        </div>
      ))}
    </>
  );

  const renderStepInputs = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h3 className="font-semibold">Seus Dados</h3>
            <StepInput label="Nome" type="text" name="input1_1" />
            <StepInput label="Telefone" type="text" name="input1_2" />
            <StepInput label="E-mail" type="text" name="input1_3" />
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
            />
            <StepInput
              label="Quantidade de suítes"
              type="number"
              min={1}
              name="input3_2"
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
            />
            <StepInput
              label="Quantidade de lavabos"
              type="number"
              min={1}
              name="input4_2"
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
            />
            <StepInput
              label="Quantos carros na garagem?"
              type="number"
              min={1}
              name="input5_2"
            />
            <RadioInput
              label="Área de lazer com espaço gourmet e churrasqueira?"
              options={["sim", "não"]}
              name="input5_3"
            />
            <RadioInput
              label="Piscina na área de lazer?"
              options={["sim", "não"]}
              name="input5_4"
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
            />
            <RadioInput
              label="Cozinha e sala de jantar e TV integrados ou separados?"
              options={["integrados", "separados"]}
              name="input6_2"
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
            />
            <RadioInput
              label="A obra será financiada?"
              options={["sim", "não"]}
              name="input7_2"
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
              rows={8}
              {...register("notes", {})}
            ></textarea>

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  name="file"
                  {...register("file", {})}
                  className="hidden"
                />
              </label>
            </div>
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
          <form
            className="flex flex-col gap-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {renderStepInputs()}
            {/* Submit Button */}
            {currentStep === 8 && (
              <div className="flex gap-x-2 relative">
                <button
                  className="bg-orangers hover:bg-orange-400 text-white rounded p-4 text-sm absolute right-0 transition"
                  type="submit"
                  disabled={isFormSubmitting}
                >
                  Submit
                </button>
              </div>
            )}
          </form>

          {/* Next and Previous Buttons */}
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
            {currentStep < 8 && (
              <button
                className="bg-orangers hover:bg-orange-400 text-white rounded p-4 text-sm absolute right-0 transition"
                onClick={() => setCurrentStep(currentStep + 1)}
                type="button"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPersonalized;

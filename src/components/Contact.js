import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'Olá, estou interessado em [Apartamento moderno]',
  });
  const [localSuccess, setLocalSuccess] = useState(false);
  const [localError, setLocalError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Make an HTTP request to your API with the form data
    fetch('https://realestateapi-psi.vercel.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.success === true){
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: 'Olá, estou interessado em [Apartamento moderno]',
          })
          setLocalSuccess(true)
        }else{
          setLocalError(true)
        }
      })
      .catch((error) => {
        setLocalError(true)
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
      {localSuccess && 
          <p className='text-green-700 pb-2'> Email enviado com sucesso </p>
        }
          {localError && 
          <p className='text-red-700 pb-2'> Erro ao enviar e-mail </p>
          }
      <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
        <input
          className='border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none'
          type='text'
          name='name'
          placeholder='Nome'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className='border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none'
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className='border border-gray-300 focus:border-orangers rounded w-full px-4 h-14 text-sm outline-none'
          type='tel'
          name='phone'
          placeholder='Celular'
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          className='border border-gray-300 focus:border-orangers rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none'
          name='message'
          placeholder='Mensagem'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className='flex gap-x-2'>
          <button
            className='bg-orangers hover:bg-orange-400 text-white rounded p-4 text-sm w-full transition'
            type='submit'
          >
            Enviar mensagem
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

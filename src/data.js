// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/apartments/casa1lg.jpeg';
import House2Lg from './assets/img/apartments/casa2lg.jpeg';
import House3Lg from './assets/img/apartments/casa3lg.png';
import House4Lg from './assets/img/apartments/casa4lg.jpeg';
import House5Lg from './assets/img/apartments/casa5lg.jpeg';
import House6Lg from './assets/img/apartments/casa6lg.jpeg';
import House7Lg from './assets/img/apartments/casa1lg.jpeg';
import House8Lg from './assets/img/apartments/casa2lg.jpeg';
import House9Lg from './assets/img/apartments/casa3lg.png';
import House10Lg from './assets/img/apartments/casa4lg.jpeg';
import House11Lg from './assets/img/apartments/casa5lg.jpeg';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/casa01.png';
import Apartment2 from './assets/img/apartments/casa02.png';
import Apartment3 from './assets/img/apartments/casa03.png';
import Apartment4 from './assets/img/apartments/casa04.png';
import Apartment5 from './assets/img/apartments/casa05.png';
import Apartment6 from './assets/img/apartments/casa06.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    project_type : 'Plantas disponíveis',
    obra_andamento: true,
    id: 1,
    type: 'Casa',
    name: 'Casa 1',
    description:
      'O projeto foi personalizado de acordo com o que o cliente desejava e foram realizados alguns modelos, pois a cliente queria algumas cores bem especifícas em sua casa, encaixamos e ela amou o resultado e vocês o que acharam, Construímos e projetamos sua casa dos sonhos, quer saber mais? Entre em contato conosco!',
    image: Apartment1,
    imageLg: House1Lg,
    country: 'United States',
    address: 'R. Stelmar José da Silva Junior 44',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '110000',
  },
  {
    project_type : 'Plantas disponíveis',
    obra_andamento: true,
    id: 2,
    type: 'Casa',
    name: 'Casa 2',
    description:
    'O projeto foi personalizado de acordo com o que o cliente desejava e foram realizados alguns modelos, pois a cliente queria algumas cores bem especifícas em sua casa, encaixamos e ela amou o resultado e vocês o que acharam, Construímos e projetamos sua casa dos sonhos, quer saber mais? Entre em contato conosco!',
    image: Apartment2,
    imageLg: House2Lg,
    country: 'Canada',
    address: 'R. Claudio Pascoaline, Beija flor 190',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '140000',
  },
  {
    project_type : 'Plantas disponíveis',
    obra_andamento: false,
    id: 3,
    type: 'Casa',
    name: 'Casa 3',
    description:
    'O projeto foi personalizado de acordo com o que o cliente desejava e foram realizados alguns modelos, pois a cliente queria algumas cores bem especifícas em sua casa, encaixamos e ela amou o resultado e vocês o que acharam, Construímos e projetamos sua casa dos sonhos, quer saber mais? Entre em contato conosco!',
    image: Apartment3,
    imageLg: House3Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '170000',
  },
  {
    project_type : 'Plantas disponíveis',
    obra_andamento: false,
    id: 4,
    type: 'Casa',
    name: 'Casa 4',
    description:
    'O projeto foi personalizado de acordo com o que o cliente desejava e foram realizados alguns modelos, pois a cliente queria algumas cores bem especifícas em sua casa, encaixamos e ela amou o resultado e vocês o que acharam, Construímos e projetamos sua casa dos sonhos, quer saber mais? Entre em contato conosco!',
    image: Apartment4,
    imageLg: House4Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
  },
  {
    project_type : 'Plantas disponíveis',
    obra_andamento: false,
    id: 5,
    type: 'Casa',
    name: 'Casa 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: House5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
  },
  {
    project_type : 'Plantas disponíveis',
    obra_andamento: false,
    id: 6,
    type: 'Casa',
    name: 'Casa 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: House6Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '220000',
  },
  {
    project_type : 'Plantas disponíveis',
    obra_andamento: false,
    id: 7,
    type: 'Apartamento',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment1,
    imageLg: House1Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '20000',
  },
  {
    project_type : 'Plantas disponíveis',
    obra_andamento: false,
    id: 8,
    type: 'Apartamento',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    imageLg: House2Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '30000',
  },
  {
    project_type : 'Plantas disponíveis',
    obra_andamento: false,
    id: 9,
    type: 'Apartamento',
    name: 'Apartament 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    imageLg: House3Lg,
    country: 'United States',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '40000',
  },
  {
    project_type : 'Plantas disponíveis',
    obra_andamento: false,
    id: 10,
    type: 'Casa',
    name: 'Casa 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    imageLg: House4Lg,
    country: 'Canada',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '117000',
  },
  {
    project_type : 'Plantas disponíveis',
    obra_andamento: false,
    id: 11,
    type: 'Casa',
    name: 'Casa 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: House5Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
  },
  {
    project_type : 'Plantas disponíveis',
    obra_andamento: false,
    id: 12,
    type: 'Casa',
    name: 'Casa 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: House6Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
  },
  // {
  //   project_type : 'Plantas disponíveis',
  //   obra_andamento: false,
  //   id: 13,
  //   type: 'Casa',
  //   name: 'Casa 10',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
  //   image: House10,
  //   imageLg: House10Lg,
  //   country: 'Canada',
  //   address: '84 Woodland St. Cocoa, FL 32927',
  //   bedrooms: '5',
  //   bathrooms: '2',
  //   surface: '5200 sq ft',
  //   year: '2014',
  //   price: '180000',
  // },
  // {
  //   project_type : 'Plantas disponíveis',
  //   obra_andamento: false,
  //   id: 14,
  //   type: 'Casa',
  //   name: 'Casa 11',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
  //   image: House11,
  //   imageLg: House11Lg,
  //   country: 'United States',
  //   address: '28 Westport Dr. Warminster, PA 18974',
  //   bedrooms: '5',
  //   bathrooms: '2',
  //   surface: '3200 sq ft',
  //   year: '2011',
  //   price: '213000',
  // },
  // {
  //   project_type : 'Plantas disponíveis',
  //   obra_andamento: false,
  //   id: 15,
  //   type: 'Casa',
  //   name: 'Casa 12',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
  //   image: House12,
  //   imageLg: House12Lg,
  //   country: 'Canada',
  //   address: '32 Pawnee Street Butte, MT 59701',
  //   bedrooms: '4',
  //   bathrooms: '3',
  //   surface: '5200 sq ft',
  //   year: '2013',
  //   price: '221000',
  // },
  // {
  //   project_type : 'Plantas disponíveis',
  //   obra_andamento: false,
  //   id: 16,
  //   type: 'Apartamento',
  //   name: 'Apartament 16',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
  //   image: Apartment4,
  //   imageLg: Apartment4Lg,
  //   country: 'Canada',
  //   address: '32 Pawnee Street Butte, MT 59701',
  //   bedrooms: '2',
  //   bathrooms: '1',
  //   surface: '1300 sq ft',
  //   year: '2011',
  //   price: '21000',
  // },
  // {
  //   project_type : 'Plantas disponíveis',
  //   obra_andamento: false,
  //   id: 17,
  //   type: 'Apartamento',
  //   name: 'Apartament 17',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
  //   image: Apartment5,
  //   imageLg: Apartment5Lg,
  //   country: 'United States',
  //   address: '28 Westport Dr. Warminster, PA 18974',
  //   bedrooms: '3',
  //   bathrooms: '1',
  //   surface: '1000 sq ft',
  //   year: '2012',
  //   price: '32000',
  // },
  // {
  //   project_type : 'Plantas disponíveis',
  //   obra_andamento: false,
  //   id: 18,
  //   type: 'Apartamento',
  //   name: 'Apartament 18',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
  //   image: Apartment6,
  //   imageLg: Apartment6Lg,
  //   country: 'Canada',
  //   address: '84 Woodland St. Cocoa, FL 32927',
  //   bedrooms: '3',
  //   bathrooms: '1',
  //   surface: '1200 sq ft',
  //   year: '2010',
  //   price: '38000',
  // },
];

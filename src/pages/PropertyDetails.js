import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { housesData } from "../data";
import { useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import Contact from "../components/Contact";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <div className="container mx-auto min-h-[800px] mb-14">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{property.name}</h2>
          <h3 className="text-lg mb-4">{property.address}</h3>
        </div>
        <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
          <div className="bg-green-500 rounded-full text-white px-3 inline-block">
            {property.type}
          </div>
          <div className="bg-orangers rounded-full text-white px-3 inline-block">
            {property.project_type}
          </div>
        </div>
        {/* <div className='text-3xl font-semibold text-violet-600'>
          Em construção
        </div> */}
      </div>
      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <div className="slider-width">
          <Carousel
            autoPlay
            showThumbs={true}
            showStatus={false}
            showIndicators={true}
          >
            <div>
              <img src={property.imageLg}  />
            </div>
            <div>
              <img src={property.imageLg}  />
            </div>
            <div>
              <img src={property.imageLg}  />
            </div>
            <div>
              <img src={property.imageLg}  />
            </div>
            <div>
              <img src={property.imageLg}  />
            </div>
            <div>
              <img src={property.imageLg}  />
            </div>
            <div>
              <img src={property.imageLg}  />
            </div>
            <div>
              <img src={property.imageLg}  />
            </div>
            <div>
              <img src={property.imageLg}  />
            </div>
            <div>
              <img src={property.imageLg}  />
            </div>
          </Carousel>
          <div className="flex gap-x-6 text-orangers mb-6">
            <div className="flex gap-x-2 items-center">
              <BiBed className="text-2xl" />
              <div className="text-lg font-medium">{property.bedrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiBath className="text-2xl" />
              <div className="text-lg font-medium">{property.bathrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiArea className="text-2xl" />
              <div className="text-lg font-medium">{property.surface}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default PropertyDetails;

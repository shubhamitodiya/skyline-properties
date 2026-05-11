import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/A.jpg",
      title: "Residential Apartments & Flats",
    },
    {
      id: 2,
      url: "/B.jpg",
      title: "Villas & Independent Houses",
    },
    {
      id: 3,
      url: "/C.jpg",
      title: "Plots & Land",
    },
    {
      id: 4,
      url: "/D.jpg",
      title: "Rental Properties",
    },
    {
      id: 5,
      url: "/E.jpg",
      title: "Investment Opportunities",
    },
    {
      id: 6,
      url: "/F.jpg",
      title: "Premium Commercial Offices",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>What We Offer</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;

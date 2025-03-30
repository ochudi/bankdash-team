import React from "react";
import iconDBL from "../../../assets/images/icons/blue.png";
import iconBRC from "../../../assets/images/icons/pink.png";
import iconABM from "../../../assets/images/icons/Yello.png";
import "./CardList.css";

const cardData = [
  {
    type: "Secondary",
    bank: "DBL Bank",
    number: "**** **** 5600",
    name: "William",
    color: "#E7EDFF",
    image: iconDBL,
  },
  {
    type: "Secondary",
    bank: "BRC Bank",
    number: "**** **** 4300",
    name: "Michel",
    color: "#FFE0EB",
    image: iconBRC,
  },
  {
    type: "Secondary",
    bank: "ABM Bank",
    number: "**** **** 7560",
    name: "Edward",
    color: "#FFF5D9",
    image: iconABM,
  },
];

const CardList = () => {
  return (
    <div className="card-list-container">
      <h2 className="card-list-heading">Card List</h2>

      <div className="cards-container">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card-item">
            <div
              className="card-icon-container"
              style={{ backgroundColor: card.color }}>
              <img
                src={card.image}
                alt={`${card.bank} Icon`}
                className="card-icon"
              />
            </div>

            <div className="card-details">
              <div className="card-detail-item card-type-detail">
                <p className="card-detail-label">Card Type</p>
                <p className="card-detail-value">{card.type}</p>
              </div>

              <div className="card-detail-item">
                <p className="card-detail-label">Bank</p>
                <p className="card-detail-value">{card.bank}</p>
              </div>

              <div className="card-detail-item card-number-detail">
                <p className="card-detail-label">Card Number</p>
                <p className="card-detail-value">{card.number}</p>
              </div>

              <div className="card-detail-item card-name-detail">
                <p className="card-detail-label">Name</p>
                <p className="card-detail-value">{card.name}</p>
              </div>

              <a
                href="#"
                className="view-details-link">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;

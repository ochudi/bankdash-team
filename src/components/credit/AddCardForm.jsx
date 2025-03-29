import { useState } from "react";

const AddCardForm = () => {
  const [cardType, setCardType] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  return (
    <div className="bg-white p-6 rounded-2xl col-span-2 min-w-[325px] md:min-w-[487px] max-w-[730px]">
      <h2 className="text-2xl font-bold text-[#333B69] mb-4">Add New Card</h2>
      <p className="text-[#718EBF] font-normal text-base mb-6">
        Credit Card generally means a plastic card issued by Scheduled
        Commercial Banks assigned to a Cardholder, with a credit limit, that can
        be used to purchase goods and services on credit or obtain cash
        advances.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-[#232323] font-normal text-base">
            Card Type
          </label>
          <input
            type="text"
            value={cardType}
            placeholder="Classic"
            onChange={(e) => setCardType(e.target.value)}
            className="w-full p-2 mt-1 border border-[#DFEAF2] rounded-lg text-[#718EBF] bg-gray-50"
          />
        </div>
        <div>
          <label className="text-[#232323] font-normal text-base">
            Name On Card
          </label>
          <input
            type="text"
            value={cardName}
            placeholder="My Cards"
            onChange={(e) => setCardName(e.target.value)}
            className="w-full p-2 mt-1 border border-[#DFEAF2] rounded-lg text-[#718EBF] bg-gray-50"
          />
        </div>
        <div>
          <label className="text-[#232323] font-normal text-base">
            Card Number
          </label>
          <input
            type="password"
            value={cardNumber}
            placeholder="**** **** **** ****"
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-2 mt-1 border border-[#DFEAF2] rounded-lg text-[#718EBF] bg-gray-50"
          />
        </div>
        <div>
          <label className="text-[#232323] font-normal text-base">
            Expiration Date
          </label>
          <input
            type="text"
            value={expirationDate}
            placeholder="25 January 2025"
            onChange={(e) => setExpirationDate(e.target.value)}
            className="w-full p-2 mt-1 border border-[#DFEAF2] rounded-lg text-[#718EBF] bg-gray-50"
          />
        </div>
      </div>
      <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg w-[160px] font-medium hover:bg-blue-700">
        Add Card
      </button>
    </div>
  );
};

export default AddCardForm;

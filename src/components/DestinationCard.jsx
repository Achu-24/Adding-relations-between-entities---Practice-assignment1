import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">
          {destination.name}, {destination.location}
        </h2>
        <p className="text-gray-600 mt-2">{destination.description}</p>
        <p className="text-lg font-semibold mt-3">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
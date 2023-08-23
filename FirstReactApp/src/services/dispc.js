import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

function Dispc() {
  const { id } = useParams();
  const [drinkDetails, setDrinkDetails] = useState(null);

  useEffect(() => {
    async function fetchDrinkDetails() {
      try {
        const response = await axios.get(baseURL + id);
        setDrinkDetails(response.data.drinks[0]);
      } catch (error) {
        console.error('Error fetching drink details:', error);
      }
    }

    fetchDrinkDetails();
  }, [id]);

  if (!drinkDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold mb-4">{drinkDetails.strDrink}</h1>
        <img
          src={drinkDetails.strDrinkThumb}
          alt={drinkDetails.strDrink}
          className="rounded-lg shadow-md mb-4"
        />
        <p className="text-gray-700 mb-6">{drinkDetails.strInstructions}</p>
        <Link to="/" className="text-blue-500 hover:underline">
          &lt; Back to Main
        </Link>
      </div>
    </div>
  );
}

export default Dispc;

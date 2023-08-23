import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import idrinks from "./homeofdrinks";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function Idrink() {
  const [search, setSearch] = useState("");
  let [postse, setPosts] = useState({ drinks: [] });

  async function cocktail() {
    const response = await axios.get(baseURL + search);
    console.log(response);
    console.log("Hello");
    setPosts(response.data);
  }
  useEffect(() => {
    cocktail();
  }, [search]);
  return postse.drinks != null ? (
    <div>
      <header className="bg-[#e3d9d9] py-4">
        <div className="flex justify-around py-">
          <div>COCKTAIL</div>
          <div>
            <input
              className="border-2 bg-[#bcb9b9] text-[#fff] placeholder-gray-800]"
              type="text"
              name="search"
              placeholder="Search..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>
      </header>
      <div className="mx-[140px]">
        <h1 className="text-2xl mt-2 font-serif font-bold">Cocktails</h1>

        <div className="flex flex-wrap gap-x-[70px]">
          {/* Inside the return statement */}
          <div className="flex flex-wrap gap-x-[70px]">
            {postse &&
              postse.drinks.map((drink) => (
                <div
                  key={drink.idDrink}
                  className="border shadow-xl w-[240px] my-5 text-center"
                >
                  <img
                    className="h-[220px]"
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                  />
                  <div>
                    <h1>{drink.strDrink}</h1>
                    {/* You might want to replace this with actual data */}
                    <h1 className="text-xl mt-1 ">
                      <Link to={`/dispc/${drink.idDrink}`}>About more</Link>
                    </h1>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Sorry No Drink Available</div>
  );
}

export default Idrink;

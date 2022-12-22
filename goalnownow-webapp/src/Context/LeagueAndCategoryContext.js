import React, { createContext, useState } from "react";
import { v4 } from "uuid";
import { countries } from "../Utilities/countries";

export const LeagueAndcategoriesContext = createContext();

const LeagueAndCategoryContextprovider = (props) => {
  const [leagueAndCategories, setLeagueAndCategory] = useState([
    {
      id: v4(),
      categoryTitle: "Cups",
      subCategories: [
        { id: v4(), iconAbrv: "GB", subCategoryTitle: "Championship" },
        { id: v4(), iconAbrv: "EU", subCategoryTitle: "Champions league" },
        { id: v4(), iconAbrv: "PT", subCategoryTitle: "Primeira liga" },
        { id: v4(), iconAbrv: "GB", subCategoryTitle: "Premier League" },
        { id: v4(), iconAbrv: "ES", subCategoryTitle: "La Liga" },
      ],
      isActive: false,
    },
    {
      id: v4(),
      categoryTitle: "Top leagues",
      subCategories: [
        { id: v4(), iconAbrv: "GB", subCategoryTitle: "Championship" },
        { id: v4(), iconAbrv: "EU", subCategoryTitle: "Champions league" },
        { id: v4(), iconAbrv: "PT", subCategoryTitle: "Primeira liga" },
        { id: v4(), iconAbrv: "GB", subCategoryTitle: "Premier League" },
        { id: v4(), iconAbrv: "ES", subCategoryTitle: "La Liga" },
      ],
      isActive: false,
    },

    {
      id: v4(),
      categoryTitle: "Tournaments",
      subCategories: [
        { id: v4(), iconAbrv: "GB", subCategoryTitle: "Championship" },
        { id: v4(), iconAbrv: "EU", subCategoryTitle: "Champions league" },
        { id: v4(), iconAbrv: "PT", subCategoryTitle: "Primeira liga" },
        { id: v4(), iconAbrv: "GB", subCategoryTitle: "Premier League" },
        { id: v4(), iconAbrv: "ES", subCategoryTitle: "La Liga" },
      ],
      isActive: false,
    },

    {
      id: v4(),
      categoryTitle: "Countires",
      subCategories: countries.map((data) => {
        return { id: v4(), iconAbrv: data.code, subCategoryTitle: data.name };
      }),
      isActive: false,
    },
  ]);

  return (
    <LeagueAndcategoriesContext.Provider
      value={{ leagueAndCategories, setLeagueAndCategory }}
    >
      {props.children}
    </LeagueAndcategoriesContext.Provider>
  );
};

export default LeagueAndCategoryContextprovider;

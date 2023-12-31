import React from "react";
import { Controller } from "react-hook-form";
import Image from "@components/Image";

import map from "@assets/un-geo-regions.png";

import { CensusItem, CensusSubItem, Explanation, Question } from "./Styles";

const getSubregions = (region) => {
  switch (region) {
    case "Africa":
      return [
        "Northern Africa",
        "Eastern Africa",
        "Middle Africa",
        "Sourthern Africa",
        "Western Africa",
      ];
    case "Americas":
      return [
        "Northern America",
        "Central America",
        "South America",
        "Caribbean",
      ];
    case "Asia":
      return [
        "Central Asia",
        "Eastern Asia",
        "South-eastern Asia",
        "Southern Asia",
        "Western Asia",
      ];
    case "Europe":
      return [
        "Eastern Europe",
        "Northern Europe",
        "Southern Europe",
        "Western Europe",
      ];
    case "Oceania":
      return [
        "Australia and New Zealand",
        "Melanesia",
        "Micronesia",
        "Polynesia",
      ];
  }
};

export const Region = ({ form }) => {
  const { control, watch, setValue } = form;
  const region = watch("region");
  // Reset the dependent `subregion` input whenever `region` changes
  React.useEffect(() => {
    setValue("subregion", undefined);
  }, [region, setValue]);

  return (
    <CensusItem>
      <Question>Where do you live?</Question>
      {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((r) => (
        <>
          <div key={r}>
            <label>
              <Controller
                name="region"
                control={control}
                render={({ field }) => (
                  <input {...field} type="radio" value={r} />
                )}
              />{" "}
              {r}
            </label>
          </div>

          {region === r && (
            <CensusSubItem>
              {getSubregions(region).map((subregion) => (
                <div key={subregion}>
                  <label>
                    <Controller
                      name="subregion"
                      control={control}
                      render={({ field }) => (
                        <input {...field} type="radio" value={subregion} />
                      )}
                    />{" "}
                    {subregion}
                  </label>
                </div>
              ))}
            </CensusSubItem>
          )}
        </>
      ))}
      <Explanation summary="(need help? here’s a map)">
        <Image
          alt="A geographical map showing UN regional boundaries."
          {...map}
        />
        <p>
          Image used under the GNU Free Documentation License. Originally from{" "}
          <a href="https://commons.wikimedia.org/wiki/File:United_Nations_geographical_subregions.png">
            Wikimedia
          </a>
          .
        </p>
      </Explanation>
    </CensusItem>
  );
};

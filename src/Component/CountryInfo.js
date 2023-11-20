import React, { useEffect } from "react";
import "./CountryInfo.css";
import { useState } from "react";

const CountryInfo = ({ data }) => {
  const API_KEY = "AIzaSyBZnsSZ3Xw_FI2Zyq4wqSimh4MiUqNYPos";
  const [countryCoordinates, setCountryCoordinates] = useState({});

  const getCoordinates = async (countryName, index) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          countryName
        )}&key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch coordinates");
      }

      const dataOfCountry = await response.json();
      if (dataOfCountry.results && dataOfCountry.results.length > 0) {
        const { lat, lng } = dataOfCountry.results[0].geometry.location;
        setCountryCoordinates((prevCoordinates) => ({
          ...prevCoordinates,
          [index]: { lat, lng },
        }));
      } else {
        throw new Error("No coordinates found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      data.forEach((item, index) => {
        getCoordinates(item.name.common, index);
      });
    }
  }, [data]);

  return (
    <div className="container">
      <ul>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <li key={index}>
              <div className="div_container">
                <div className="div_flag">
                  <img
                    src={item.flags.png}
                    alt={item.name.common}
                    className="img_flag"
                  />
                </div>
                <div className="map-container">
                  {item.maps.googleMaps && countryCoordinates[index] && (
                    <iframe
                      className="google_map"
                      title={`Map of ${item.name.common}`}
                      loading="lazy"
                      allowFullScreen
                      src={`https://www.google.com/maps/embed/v1/view?key=${API_KEY}&center=${countryCoordinates[index].lat},${countryCoordinates[index].lng}&zoom=10`}
                    ></iframe>
                  )}
                </div>
              </div>
              <p className="style_for_p">
                <b> Name:</b> {item.name.common}
              </p>
              <p className="style_for_p">
                <b>Name official:</b> {item.name.official}
              </p>
              <p className="style_for_p">
                <b>Region:</b> {item.region}
              </p>
              <p className="style_for_p">
                <b>Subregion: </b>
                {item.subregion}
              </p>
              <p className="style_for_p">
                <b>Languages: </b>
                {item.languages &&
                  Object.entries(item.languages).map(([key, value], index) => (
                    <span key={key}>
                      {`${value}${
                        index !== Object.keys(item.languages).length - 1
                          ? ", "
                          : ""
                      }`}
                    </span>
                  ))}
                {}
              </p>

              <div className="underline"></div>
            </li>
          ))
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </div>
  );
};
export default CountryInfo;

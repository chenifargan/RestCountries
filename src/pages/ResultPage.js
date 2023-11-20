import React from "react";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useText } from "../Component/TextContext";
import CountryInfo from "../Component/CountryInfo";
const ResultPage = () => {
  const { action } = useParams();
  const { text } = useText();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    const fetchData = async () => {
      try {
        let url = "";
        switch (action) {
          case "getallcountries":
            url = "https://restcountries.com/v3.1/all";
            break;
          case "searchbycountryname":
            if (text) {
              url = `https://restcountries.com/v3.1/name/${encodeURIComponent(
                text
              )}`;
            }
            break;
          case "searchbycountryfullname":
            if (text) {
              url = `https://restcountries.com/v3.1/name/${encodeURIComponent(
                text
              )}?fullText=true`;
            }
            break;
          case "searchbylanguage":
            if (text) {
              url = `https://restcountries.com/v3.1/lang/${encodeURIComponent(
                text
              )}`;
            }
            break;
          case "searchbyregion":
            if (text) {
              url = `https://restcountries.com/v3.1/region/${encodeURIComponent(
                text
              )}`;
            }
            break;
          case "searchbysubregions":
            if (text) {
              url = `https://restcountries.com/v3.1/subregion/${encodeURIComponent(
                text
              )}`;
            }
            break;
          default:
            break;
        }

        if (url) {
          const response = await fetch(url);
          const result = await response.json();

          const extractedData = result.map((item) => {
            const { name, region, subregion, languages, maps, flags } = item;
            return { name, region, subregion, languages, maps, flags };
          });

          setData(extractedData);
          setLoading(false);
          console.log(extractedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    if (
      action === "getallcountries" ||
      (action === "searchbycountryname" && text) ||
      (action === "searchbycountryfullname" && text) ||
      (action === "searchbylanguage" && text) ||
      (action === "searchbyregion" && text) ||
      (action === "searchbysubregions" && text)
    ) {
      fetchData();
    }
  }, [action, text]); // Updated dependency array

  return (
    <div className="containerHomePage">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CountryInfo data={data || []}></CountryInfo>
      )}
    </div>
  );
};
export default ResultPage;

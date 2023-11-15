import React from "react";
import "./Home.css";
import { useState } from "react";
import ModalComponenent from "./ModalComponent";
const Home = ({ action, handleActionChange, handleSave }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Search Country</div>
        <div className="underline"></div>
        <div className="submit-container">
          <div
            className={
              action === "GET ALL COUNTRIES" ? "submit gray " : "submit"
            }
            onClick={() => {
              handleActionChange("GET ALL COUNTRIES");
            }}
          >
            GET ALL COUNTRIES
          </div>

          <div
            className={
              action === "SEARCH BY COUNTRY NAME" ? "submit gray " : "submit"
            }
            onClick={() => {
              handleActionChange("SEARCH BY COUNTRY NAME");
              openDialog();
            }}
          >
            SEARCH BY COUNTRY NAME
          </div>

          <div
            className={
              action === "SEARCH BY COUNTRY FULL NAME"
                ? "submit gray "
                : "submit"
            }
            onClick={() => {
              handleActionChange("SEARCH BY COUNTRY FULL NAME");
              openDialog();
            }}
          >
            SEARCH BY COUNTRY FULL NAME
          </div>

          <div
            className={
              action === "SEARCH BY LANGUAGE" ? "submit gray " : "submit"
            }
            onClick={() => {
              handleActionChange("  SEARCH BY LANGUAGE");
              openDialog();
            }}
          >
            SEARCH BY LANGUAGE
          </div>

          <div
            className={
              action === "SEARCH BY REGION" ? "submit gray " : "submit"
            }
            onClick={() => {
              handleActionChange(" SEARCH BY REGION");
              openDialog();
            }}
          >
            SEARCH BY REGION
          </div>

          <div
            className={
              action === "SEARCH BY SUBREGIONS" ? "submit gray " : "submit"
            }
            onClick={() => {
              handleActionChange("SEARCH BY SUBREGIONS");
              openDialog();
            }}
          >
            SEARCH BY SUBREGIONS
          </div>
          <ModalComponenent
            dialogOpen={dialogOpen}
            closeDialog={closeDialog}
            action={action}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;

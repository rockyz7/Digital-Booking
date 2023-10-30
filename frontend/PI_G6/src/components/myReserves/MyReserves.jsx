import React, { useEffect, useState } from "react";
import styles from "./ReserveComponent.module.css";
import { apiMyReserves } from "../../utils/apiEndpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import axios from "axios";
import Reserves from "./Reserves";

const MyReserves = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <div className={styles.reserveWrapper}>
        <div className={styles.reserveHeader}>
          <h1>Mis reservas</h1>
          <FontAwesomeIcon
            onClick={goBack}
            inverse
            icon={faChevronLeft}
            size="2xl"
          />
        </div>

        <Reserves />
      </div>
    </div>
  );
};

export default MyReserves;

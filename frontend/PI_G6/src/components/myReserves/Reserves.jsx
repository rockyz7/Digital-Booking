import React, { useContext, useEffect, useState } from "react";

import CardSuggested from "../Home/CardSuggested/CardSuggested";
import styles from "../myReserves/MyReserves.module.css";
import axios from "axios";
import { apiMyReserves } from "../../utils/apiEndpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Reserves = () => {
  const [reserves, setReserves] = useState([]);
  const [openDetails, setOpenDetails] = useState([]);
  const token = JSON.parse(localStorage.getItem("JWT"));

  useEffect(() => {
    axios
      .get(apiMyReserves, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setReserves(response.data);
        setOpenDetails(new Array(response.data.length).fill(false));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleDetails = (index) => {
    const updatedOpenDetails = [...openDetails];
    updatedOpenDetails[index] = !updatedOpenDetails[index];
    setOpenDetails(updatedOpenDetails);
  };

  return (
    <div>
      <div className={styles.reserveCardContainer}>
        {reserves?.length > 0 ? (
          reserves?.map((res, index) => (
            <div className={styles.reserveCard} key={res.id}>
              <h3>{res.product.title}</h3>

              <FontAwesomeIcon
                inverse
                icon={faChevronDown}
                onClick={() => toggleDetails(index)}
              ></FontAwesomeIcon>
              {openDetails[index] ? (
                <CardSuggested suggest={res.product} styles={styles} />
              ) : (
                ""
              )}
              <div>
                <div>
                  <div className={styles.checkInDate}>
                    <p>
                      <span>Fecha de ingreso: </span>
                      {res.checkIn}
                    </p>
                    <span className={styles.vhr}> | </span>
                    <p>
                      <span>Fecha de salida: </span>
                      {res.checkOut}
                    </p>
                  </div>

                  <p>
                    <span>Horario de ingreso: </span>
                    {res.startTime}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noRes}>No se encontraron reservas...</p>
        )}
      </div>
    </div>
  );
};

export default Reserves;

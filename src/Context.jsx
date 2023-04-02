import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [veri, setVeri] = useState("");
  const [tarih, setTarih] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
        )
        .then((res) => {
          setVeri(res.data[tarih]);
          console.log("oldu");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [veri, tarih]);
  return (
    <Context.Provider value={{ veri, setTarih }}>{children}</Context.Provider>
  );
};

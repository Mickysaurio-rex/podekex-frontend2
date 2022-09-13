import "./App.css";
import React, { useState, useEffect } from "react";
import { Counter } from "./components/Counter";
import { LoginFormik } from "./components/LogingForm";
import API from "./config/api";

function App() {
  const [trainer, setTrainer] = useState();
  console.log(trainer);
  const getTrainerId = async () => {
    const trainerReponse = await API.get(`/trainer/1`);
    const { data } = trainerReponse;
    setTrainer(data.trainer[0]);
  };
  useEffect(() => {
    getTrainerId();
  }, []);

  return <h1>Hola Mundo</h1>;
}

export default App;
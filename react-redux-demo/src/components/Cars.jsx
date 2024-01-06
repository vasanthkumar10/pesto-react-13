import { addCar, buyCar } from "../redux/cars/carActions";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

function Cars() {
  const numOfCars = useSelector((state) => state.car.numOfCars);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>No of cars - {numOfCars}</h1>
      <button onClick={() => dispatch(buyCar())}>buy car</button>
      <button onClick={() => dispatch(addCar(5))}>add car</button>
    </div>
  );
}

export default Cars;

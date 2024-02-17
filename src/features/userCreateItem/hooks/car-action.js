import { useContext } from "react";
import { CarActionContext } from "../context/CarActionContext";

export default function useCarAction() {
  return useContext(CarActionContext);
}

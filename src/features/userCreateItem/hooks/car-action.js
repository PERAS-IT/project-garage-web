import { useContext } from "react";
import { CarActionContext } from "../context/CarActionContext";

export default function useAction() {
  return useContext(CarActionContext);
}

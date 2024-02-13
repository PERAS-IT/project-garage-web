import { useContext } from "react";
import { AuthContext } from "../features/Auth/contexts/AuthContext";

export default function useAuth() {
  return useContext(AuthContext);
}

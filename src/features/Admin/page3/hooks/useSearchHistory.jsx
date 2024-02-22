import { useContext } from "react";
import { searchHistoryContext } from "../contexts/SearchHistoryContext";

export default function useSearchHistory() {
    return useContext(searchHistoryContext)
}
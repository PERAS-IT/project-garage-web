import { useContext } from "react";
import { SearchHistoryContext } from "../contexts/SearchHistoryContext";

export default function useSearchHistory() {
    return useContext(SearchHistoryContext)
}
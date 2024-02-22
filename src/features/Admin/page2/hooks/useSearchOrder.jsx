import { useContext } from "react";
import { SearchContext } from "../contexts/SearchOrderContext"
export default function useSearchOrder() {
    return useContext(SearchContext)
}
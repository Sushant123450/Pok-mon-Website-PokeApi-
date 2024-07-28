import { Children, createContext, useEffect, useState } from "react";

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(20)
    const [totalPages, setTotalPages] = useState()
    const [searchResult,setSearchResult] = useState([])

    useEffect(() => {
        fetchPokemonData();
    }, [currentPage])

    useEffect(() => {
        setTotalPages((Math.ceil(1302 / limit)));
    }, [limit])

    async function fetchPokemonData() {
        setLoading(true);
        let url = `${import.meta.env.VITE_BASE_URL}?offset=${limit * (currentPage - 1)}&limit=${limit}`
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result.results);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setCurrentPage(page);
        fetchPokemonData();

    }

    const value = {
        loading, setLoading,
        data, setData,
        currentPage, setCurrentPage,
        limit, setLimit,
        totalPages, setTotalPages,
        searchResult,setSearchResult,
        fetchPokemonData, handlePageChange
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
};

export default AppContextProvider;
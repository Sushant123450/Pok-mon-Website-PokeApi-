import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import BottomNavBar from './BottomNavBar.jsx';
import Spinner from "./Spinner"
import PokeCard from "./PokeCard"

const Home = () => {
    const { data, loading, currentPage, setCurrentPage, fetchPokemonData, } = useContext(AppContext)
    return (
        <div>
            {
                loading ? (<Spinner />) : (
                    <div className="grid grid-cols-5 row-span-10 gap-x-10 gap-y-5 m-5">
                        {
                            data.map((Pokemon) => {
                                const url_data = Pokemon.url.split("/")
                                const id = url_data[url_data.length - 2]
                                Pokemon.id = id
                                return (
                                    <PokeCard key={Pokemon.id} props={Pokemon} />
                                )
                            }
                            )
                        }
                    </div>
                )
            }
            <BottomNavBar />
        </div>
    );
};

export default Home;
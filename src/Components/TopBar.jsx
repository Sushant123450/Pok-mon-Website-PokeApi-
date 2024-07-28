import { useContext, useState } from 'react';
import data from "../assets/data.json"
import { AppContext } from '../context/AppContext';
import { useNavigate } from "react-router-dom";

const TopBar = () => {
    const { setSearchResult } = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        const search = searchTerm.trim().toLowerCase();
        if (search === "") {
            navigate("/");
        } else {
            const result = data.filter(p =>
                (!isNaN(search) && parseInt(search) === p.id) || p.name.toLowerCase().includes(search)
            );
            console.log(result);
            setSearchResult(result);
            navigate("/search");
        }
    }

    return (
        <div className="top-bar fixed w-[100vw] bg-white">
            <div className='flex flex-row justify-between mt-1 mx-5'>
                <div className=''>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpDDd16-m8fTneCbtEI1TYpDiVqegO11beA&s" className='h-10' alt="Pokemon Icon" />
                </div>
                <h1 className='text-3xl font-bold font'>PokeDex</h1>
                <div className='border-2 rounded-full border-black flex flex-row h-10 p-1'>
                    <input
                        type='text'
                        placeholder='Enter ID or Name'
                        className='mr-1 rounded-full border-[1.5px] px-[10px] border-black'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyUp={handleSearch}
                    />
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSisS82So05lLjc1LIErvDcE4qA-82OXJjYcA&s"
                        className='rounded-full border-[1.5px] border-black'
                        onClick={handleSearch}
                        alt="Search Icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
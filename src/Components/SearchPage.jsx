import React from 'react';
import PokeCard from './PokeCard';

const SearchPage = ({ props }) => {
    console.log(props);
    return (
        <div className="grid grid-cols-5 row-span-10 gap-x-10 gap-y-5 py-20 px-2">
            {
                (props.length > 0) ?
                    (props.map((Pokemon) => {
                        return (
                            <PokeCard key={Pokemon.id} props={Pokemon} />
                        )
                    }
                    ))
                    :
                    (
                        <div className="text-3xl w-[100vw] h-[100vh] p-[100%] text-center">No results found</div>
                    )
            }

        </div>
    );
};

export default SearchPage;
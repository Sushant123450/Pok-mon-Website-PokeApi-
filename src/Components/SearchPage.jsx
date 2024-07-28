import React from 'react';
import PokeCard from './PokeCard';

const SearchPage = ({ props }) => {
    console.log(props);
    return (
        <div className="grid grid-cols-5 row-span-10 gap-x-10 gap-y-5 m-5">
            {
                props.map((Pokemon) => {
                    return (
                        <PokeCard key={Pokemon.id} props={Pokemon} />
                    )
                }
                )
            }

        </div>
    );
};

export default SearchPage;
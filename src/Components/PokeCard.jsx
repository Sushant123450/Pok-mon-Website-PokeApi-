import { useEffect } from 'react';

const PokeCard = ({ props }) => {
    const { name, url, id } = props;
    let poke_name = name.charAt(0).toUpperCase() + name.slice(1)
    const image_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
    return (
        <div className="text-red-600 flex flex-col items-center justify-between border-2 rounded-lg border-gray-300">
            <div className='mb-1'>
                # {id}
            </div>
            <div className=''>
                <img src={image_url} alt={name} loading={'lazy'} 
                    onError={(e) => {
                        if (e.target.src != `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`) {
                            e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                        }
                    }} />
            </div>
            <div className='relative '>
                {poke_name}
            </div>
        </div>
    );
};

export default PokeCard;
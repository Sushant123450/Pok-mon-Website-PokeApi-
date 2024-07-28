import React from 'react';
import "./spinner.css"
const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div className="lds-ripple">
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
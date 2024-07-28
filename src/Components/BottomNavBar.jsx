import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BottomNavBar = () => {
    const { currentPage, setCurrentPage, totalPages } = useContext(AppContext);
    
    function nextButtonHandler() {
        setCurrentPage(currentPage + 1);
    }
    function previousButtonHandler() {
        setCurrentPage(currentPage - 1);
    }

    return (
        <div className="fixed bottom-0 w-full bg-cyan-100 border-t-4 border-cyan-500">
            <div className='mx-10'>
                <nav className="justify-between flex">
                    {currentPage !== 1 ? (
                        <button onClick={previousButtonHandler}>Previous</button>
                    ) : (
                        <span> </span>
                    )}
                    <p>{currentPage} of {totalPages}</p>
                    {currentPage !== totalPages ? (
                        <button onClick={nextButtonHandler}>Next</button>
                    ) : (
                        <span> </span>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default BottomNavBar;

import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const BottomNavBar = () => {
    const { currentPage, setCurrentPage, totalPages } = useContext(AppContext);
    const [inputPage, setInputPage] = useState(currentPage);
    function nextButtonHandler() {
        setCurrentPage(currentPage + 1);
    }
    function previousButtonHandler() {
        setCurrentPage(currentPage - 1);
    }

    function changePageHandler() {
        const pageNumber = parseInt(inputPage, 10);
        if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            changePageHandler();
        }
    }

    useEffect(() => {
        setInputPage(currentPage);
    }, [currentPage]);


    return (
        <div className="fixed bottom-0 w-full p-2 bg-cyan-100 border-t-4 border-cyan-500">
            <div className='mx-10'>
                <nav className="justify-between flex items-center">
                    {currentPage !== 1 ? (
                        <button type="button" onClick={previousButtonHandler} className="bg-blue-500 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-500 hover:text-white px-3">
                            <div class="flex flex-row align-middle">
                                <svg class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                </svg>
                                <p class="ml-2">Previous</p>
                            </div>
                        </button>
                    ) : (
                        <span> </span>
                    )}
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={inputPage}
                            onChange={(e) => setInputPage(e.target.value)}
                            className='w-12 px-2 rounded-md text-center'
                            onKeyDown={handleKeyDown}
                            min="1"
                            max={totalPages}
                        />
                        <span className="ml-2">of {totalPages}</span>
                        <button
                            type="button"
                            onClick={changePageHandler}
                            className="bg-blue-500 text-white ml-2 rounded-md px-3 py-1 hover:bg-red-500 hover:text-white"
                        >
                            Go
                        </button>
                    </div>
                    {currentPage !== totalPages ? (
                        <button type="button" onClick={nextButtonHandler} className="bg-blue-500 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-500 hover:text-white px-3">
                            <div class="flex flex-row align-middle">
                                <span class="mr-2">Next</span>
                                <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </button>

                    ) : (
                        <span> </span>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default BottomNavBar;

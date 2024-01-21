import React from 'react';

const Paging = ({ currentPage, pageTotal, onPageClick }) => {
    return (
        <ul className='page'>
            <li onClick={() => onPageClick(currentPage - 1)}>{'◀'}</li>
            {[...Array(pageTotal).keys()].map((page) => (
                <li key={page + 1} onClick={() => onPageClick(page + 1)}>
                {page + 1}
                </li>
            ))}
            <li onClick={() => onPageClick(currentPage + 1)}>{'▶'}</li>
        </ul>
    );
};

export default Paging;
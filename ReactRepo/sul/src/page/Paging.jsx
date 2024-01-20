import React from 'react';

const Pagination = ({ currentPage, pageTotal, onPageClick }) => {
    const visiblePages = 5; // 표시되는 페이지 번호 수

    const renderPageNumbers = () => {
        const pages = [];
        const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
        const endPage = Math.min(pageTotal, startPage + visiblePages - 1);

        for (let page = startPage; page <= endPage; page++) {
            pages.push(
                <li key={page} onClick={() => onPageClick(page)} className={currentPage === page ? 'active' : ''}>
                    {page}
                </li>
            );
        }

        return pages;
    };

    return (
        <ul className='page'>
            <li onClick={() => onPageClick(Math.max(1, currentPage - 1))}>{'◀'}</li>
            {renderPageNumbers()}
            <li onClick={() => onPageClick(Math.min(pageTotal, currentPage + 1))}>{'▶'}</li>
        </ul>
    );
};

export default Pagination;
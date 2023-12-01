import React from "react";
import "./Pagination.css";

export default function Pagination({
  currentPage,
  products,
  pageSize,
  onPageChange,
}) {
  const totalPages = Math.ceil(products.length / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };
  const generatePageNumbers = () => {
    const maxButtonsToShow = 5;
    const delta = Math.floor(maxButtonsToShow / 2);

    let start = Math.max(1, currentPage - delta);
    let end = Math.min(totalPages, start + maxButtonsToShow - 1);

    if (end - start < maxButtonsToShow - 1) {
      start = Math.max(1, end - maxButtonsToShow + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };
  // Generate an array of page numbers
  const pageNumbers = generatePageNumbers();

  return (
    <div className="pagination">
      {/* Pagination buttons */}
      <button 
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          style={{ fontWeight: currentPage === page ? "bold" : "normal" }}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

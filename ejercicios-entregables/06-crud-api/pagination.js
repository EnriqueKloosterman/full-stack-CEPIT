
function paginateData(data, itemsPerPage, currentPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return {
    currentPageData,
    totalPages
  };
}

function goToPage(data, itemsPerPage, pageNumber) {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  if (pageNumber >= 1 && pageNumber <= totalPages) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = data.slice(startIndex, endIndex);

    return currentPageData;
  }
  
  return [];
}

function nextPage(data, itemsPerPage, currentPage) {
  const totalPages = Math.ceil(data.length / itemsPerPage);

  if (currentPage < totalPages) {
    const nextPageNumber = currentPage + 1;
    const startIndex = (nextPageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const nextPageData = data.slice(startIndex, endIndex);

    return nextPageData;
  }

  return [];
}

function previousPage(data, itemsPerPage, currentPage) {
  if (currentPage > 1) {
    const previousPageNumber = currentPage - 1;
    const startIndex = (previousPageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const previousPageData = data.slice(startIndex, endIndex);

    return previousPageData;
  }

  return [];
}

  
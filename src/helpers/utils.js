export const storeInLocalStorate = (books) => {
  localStorage.setItem("books", JSON.stringify(books));
};

export const getFromLocalStorage = () => {
  const localBooks = localStorage.getItem("books");
  return localBooks ? JSON.parse(localBooks) : [];
};

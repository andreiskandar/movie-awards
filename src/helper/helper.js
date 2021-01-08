export function getNominationsFromLS() {
  return JSON.parse(localStorage.getItem('nominationList'));
}

export async function loadSpinner(setIsSearching) {
  setIsSearching(true);

  setTimeout(() => {
    setIsSearching(false);
  }, 500);
}

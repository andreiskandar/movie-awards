export function getNominationsFromLS() {
  return JSON.parse(localStorage.getItem('nominationList'));
}

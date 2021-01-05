import React from 'react';

const NominationList = ({ nominations, setNominations }) => {
  if (nominations.length === 0) {
    return null;
  }

  function removeNomination(index) {
    nominations.splice(index, 1);
    setNominations([...nominations]);
  }

  function renderNominations() {
    return (
      <ul>
        {nominations.map((nomination, index) => (
          <li key={nomination.imdbID}>
            {nomination.Title}({nomination.Year})<button onClick={() => removeNomination(index)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      <div>Nominations</div>
      {renderNominations()}
    </div>
  );
};

export default NominationList;

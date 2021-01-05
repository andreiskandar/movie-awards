import React from 'react';

const NominationList = ({ nominations, setNominations, setDisableButton, disableButton }) => {
  if (nominations.length === 0) {
    return null;
  }

  function removeNomination(index) {
    nominations.splice(index, 1);
    setNominations([...nominations]);
    setDisableButton(!disableButton);
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
      <h4>Nominations</h4>
      {renderNominations()}
    </div>
  );
};

export default NominationList;

import React from 'react';
import './NominationList.css';

const NominationList = ({ result, nominations, setResult, setNominations }) => {
  if (nominations.length === 0) {
    return null;
  }

  function removeNomination(index, imdbID) {
    nominations.splice(index, 1);
    setNominations([...nominations]);

    // selected movie nomination button will be enabled
    const enableButton = result.map((entry) =>
      entry.imdbID === imdbID ? { ...entry, disabled: false } : { ...entry }
    );

    setResult(enableButton);
  }

  function renderNominations() {
    const nominationList = nominations.map((nomination, index) => {
      return (
        <li key={nomination.imdbID} className='nomination__list'>
          {nomination.Title}({nomination.Year})
          <button
            className={`nominationList__remove-button button`}
            onClick={() => removeNomination(index, nomination.imdbID)}
          >
            Remove
          </button>
        </li>
      );
    });
    return nominationList;
  }

  return (
    <div className='nominationList__container container'>
      <h5 className='nominationList__header'>Nominations</h5>
      <ul>{renderNominations()}</ul>
    </div>
  );
};

export default NominationList;

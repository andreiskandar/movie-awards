import React from 'react';
import './NominationList.css';

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
    const nominationList = nominations.map((nomination, index) => {
      return (
        <li key={nomination.imdbID} className='nomination__list'>
          {nomination.Title}({nomination.Year})
          <button className={`nominationList__remove-button button`} onClick={() => removeNomination(index)}>
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

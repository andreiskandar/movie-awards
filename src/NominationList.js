import React from 'react';
import classNames from 'classnames';
import { getNominationsFromLS } from './helper/helper';
import './NominationList.css';

const NominationList = ({ result, nominations, setResult, setNominations }) => {
  const nominationsFromLS = getNominationsFromLS();

  const containerClassName = classNames({
    ['nominationList__container container']: true,
    'empty-result': result && result.length === 0 ? true : false,
  });

  function removeNomination(index, imdbID) {
    nominations.splice(index, 1);
    setNominations([...nominations]);

    // selected movie nomination button will be enabled
    const enableButton = result.map((entry) =>
      entry.imdbID === imdbID ? { ...entry, disabled: false } : { ...entry }
    );
    setResult(enableButton);

    localStorage.setItem('nominationList', JSON.stringify([...nominations]));
  }

  function renderNominations() {
    if (nominationsFromLS.length > 0) {
      const nominationList = nominationsFromLS.map((nomination, index) => {
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
  }

  return (
    <div className={containerClassName}>
      <h5 className='nominationList__header'>Nominations</h5>
      <ul>{renderNominations()}</ul>
    </div>
  );
};

export default NominationList;

import React from 'react';

const NominationList = ({ nominations }) => {
  if (nominations.length === 0) {
    return null;
  }
  function renderNominations() {
    return (
      <ul>
        {nominations.map((nomination) => (
          <li key={nomination.imdbID}>
            {nomination.Title} {nomination.Year}
            <button>Remove</button>
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

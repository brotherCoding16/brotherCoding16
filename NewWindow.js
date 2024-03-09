import React from 'react';

const NewWindow = ({ password }) => {
  return (
    <div>
      <h2>Welcome to the New Window!</h2>
      <p>Password: {password}</p>
      {/* Add content specific to the new window */}
    </div>
  );
};

export default NewWindow;

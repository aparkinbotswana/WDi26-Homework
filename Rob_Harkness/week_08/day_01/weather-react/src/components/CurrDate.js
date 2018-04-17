import React from 'react';

const CurrDate = (props) => {

  return <h3>{`${props.date[0]}, ${props.date[1]} ${props.date[2]}`}</h3>;
};

export default CurrDate;

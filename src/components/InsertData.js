import React from 'react';
import { Button } from 'react-bootstrap';
import './InsertData.css';

function InsertData() {
  return (
    <div className='insert-data-home'>
      <h3 className='text-data-home'>
        Use the below button to insert new data
      </h3>
      <Button variant='warning' href='/insertdata/form'>
        Insert New Data
      </Button>{' '}
    </div>
  );
}

export default InsertData;

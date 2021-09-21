import React from 'react';
import SessionidTable from '../components/SessionidTable';

function DisplayTable({ testSessionData }) {
  return (
    <>
      <SessionidTable testSessionData={testSessionData}></SessionidTable>
    </>
  );
}

export default DisplayTable;

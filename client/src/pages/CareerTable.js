import React from 'react';
import Application from '../pages/Application';

function CareerTable() {
  return (
    <>
      <div className='career-table' id='career-table'>
        <h2 className='career-table__header'>Clean Soils</h2>

        <button
          className='career-table__header-button
career-table__header-button--1'
        >
          Company Location
        </button>
        <button className='career-table__header-button career-table__header-button--2'>
          Job Category
        </button>
        <button className='career-table__header-button career-table__header-button--3'>
          Schedule
        </button>
        <button className='career-table__header-button--reset career-table__header-button'>
          Reset
        </button>
        <div className='career-table__header-secondary'></div>
        <a href='#popup' className='job-listing__apply'>
          Apply Now
        </a>
        <div className='job-listing__border'></div>
        <h5 className='job-listing__column job-listing__column--1'>Comstock</h5>
        <h5 className='job-listing__column job-listing__column--2'>Worker</h5>
        <h5 className='job-listing__column job-listing__column--3'>9-5</h5>
      </div>

      <div className='popup' id='popup'>
        <div className='popup__content'>
          <Application />
        </div>
      </div>
    </>
  );
}

export default CareerTable;

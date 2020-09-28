import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Years from '../years/Years';
import './Filters.scss';
import SegmentButton from '../SegmentButton/SegmentButton';

const Filters = ({onChange}) => {
  const [year, setYear] = useState();
  const [successLaunch, setSuccessLaunch] = useState();
  const [successLanding, setSuccessLanding] = useState();
  const handleOnYearClick = useCallback((year) => {
    setYear(year);
    onChange('launch_year', year);
  }, [onChange]);
  const handleSuccessLaunchChange = useCallback((value) => {
    setSuccessLaunch(value);
    onChange('launch_success', value);
  }, [onChange]);
  const handleSuccessLandingChange = useCallback((value) => {
    setSuccessLanding(value);
    onChange('landing_success', value);
  }, [onChange]);

  return (
    <div className="filter-wrapper">
      <h3>Filters</h3>
      <div className='filter-label'>Launch Year</div>
      <div className="filter-launch-year">
        <Years startYear={2006} endYear={2020} selectedYear={year} onYearClick={handleOnYearClick} />
      </div>
      <div className='filter-label'>Successful Launch</div>
      <div className="filter-successful-launch">
        <SegmentButton selected={successLaunch} onChange={handleSuccessLaunchChange}/>
      </div>
      <div className='filter-label'>Successful Landing</div>
      <div className="filter-successful-landing">
        <SegmentButton selected={successLanding} onChange={handleSuccessLandingChange}/>
      </div>
    </div>
  )
}

Filters.propTypes = {
  onChange: PropTypes.func
}

export default Filters

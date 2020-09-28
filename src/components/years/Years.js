import React, {useMemo} from 'react'
import PropTypes from 'prop-types'

const Years = ({ startYear, endYear, selectedYear, onYearClick }) => {
    const years = useMemo(() => {
        const years = [];
        for (let count = startYear; count <= endYear; count++) {
            years.push(count);
        }
        return years;
    }, [startYear, endYear]);

    return (
        <>
            {years.map(year => (<div className={`year ${selectedYear === year ? 'selected' : ''}`} 
            onClick={() => onYearClick(year)} key={year}>{year}</div>))}
        </>
    )
}

Years.propTypes = {
    startYear: PropTypes.number,
    endYear: PropTypes.number,
    selectedYear: PropTypes.string,
};

export default Years;

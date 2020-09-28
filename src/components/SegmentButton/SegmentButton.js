import React from 'react'
import PropTypes from 'prop-types'
import './SegmentButton.scss';

const SegmentButton = ({ selected, onChange }) => {
    return (
        <div className="segment">
            <div className={`segment-item ${selected === true ? 'selected' : ''}`} onClick={() => onChange(true)}>True</div>
            <div className={`segment-item ${selected === false ? 'selected' : ''}`} onClick={() => onChange(false)}>False</div>
        </div>
    )
}

SegmentButton.propTypes = {
    onChange: PropTypes.func,
    selected: PropTypes.bool,
}

export default SegmentButton

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './LaunchList.scss';

const LaunchList = ({ filters }) => {
    const [launchList, setLaunchList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
        if (filters?.launch_year) {
            url += '&launch_year=' + filters.launch_year;
        }
        if (filters.launch_success === true || filters.launch_success === false) {
            url += '&launch_success=' + filters.launch_success;
        }
        if (filters.landing_success === true || filters.landing_success === false) {
            url += '&landing_success=' + filters.landing_success;
        }
        fetch(url).then(res => res.json()).then(data => {
            setLaunchList(data);
            setLoading(false);
        });
    }, [filters])
    const getBooleanValue = (value, defaultText) => (value === true || value === false) ? value + '' : defaultText;
    return (
        <div className="launch-list-wrapper">
            {loading ? (<div className="loading"></div>) :
                launchList.map((launch, index) => {
                    const {flight_number} = launch;
                    return (<div className="launch-card" key={flight_number}>
                        <div className="launch-card-image">
                            <img src={launch?.links?.mission_patch} alt='Image not found' />
                        </div>
                        <div className="launch-card-details">
                            <div className="mission-name">{`${launch?.mission_name || '${mission_name}'} #${launch?.flight_number || '${flight_number}'}`}</div>
                            <div className="mission-Ids">
                                <div className="label">Mission Ids:</div>
                                <div className="value">
                                    {launch?.mission_id?.length ? <ul>{(launch.mission_id || []).map(mid => (<li key={mid}>{mid}</li>))}</ul> : '${list Mission Ids}'}
                                </div>
                            </div>
                            <div className="mission-details">
                                <div className="label">Launch Year:</div>
                                <div className="value">
                                    {launch?.launch_year || '${launch_year}'}
                                </div>
                            </div>
                            <div className="mission-details">
                                <div className="label">Successful Launch:</div>
                                <div className="value">
                                    {getBooleanValue(launch?.launch_success, '${launch_success}')}
                                </div>
                            </div>
                            <div className="mission-details">
                                <div className="label">Successful:</div>
                                <div className="value">
                                    {launch?.launch_landing || '${launch_landing}'}
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
        </div>
    )
}

LaunchList.propTypes = {
    filters: PropTypes.shape({
        "launch_year": PropTypes.number,
        "launch_success": PropTypes.bool,
        "landing_success": PropTypes.bool
    }),
}

export default LaunchList

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

import {connect} from 'react-redux';
import {deleteEducation} from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {

    const educations = education.map(edu => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td className='hide-sm'>{edu.degree}</td>
            <td>
                <Moment format="DD/MM/YYYY">{moment.utc(edu.from)}</Moment> - {' '}
                {edu.to === null ? (' Now'
                ) : (
                <Moment format="DD/MM/YYYY">{moment.utc(edu.to)}</Moment>
                )}
            </td>
            <td>
                <button onClick={()=> deleteEducation(edu._id)} className='btn btn-danger'> Remove </button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className='my-2'> Education Credentials </h2>
            <table className='table table-stripe'>
            <thead>
                <tr>
                    <th>University/School</th>
                    <th>Degree</th>
                    <th>Years</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>{educations}</tbody>
            </table>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
};
export default connect(null, {deleteEducation}) (Education);

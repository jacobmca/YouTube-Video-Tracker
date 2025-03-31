import PropTypes from 'prop-types';
import '../App.css';

function Video({ name, image, description, cast, releaseDate, isExpanded, onToggle }) {
    return (
        <div className="task-card card mb-3 draggable" id="${task.id}">
            <div className="card-title strong mt-2">
                <h4><strong>${video.name}</strong></h4>
            </div>
            <div className="form-control hasDatePicker bg-transparent">
                <p>Date: ${video.releaseDate}</p>
            </div>
            <div className="card-body">
                <p>${video.description}</p>
            </div>
            <div className="align-items-center mb-3">
                <button className="btn col-4 .m-3 btn-danger delete-btn border-light">Delete</button>
            </div>
        </div>
    )
}

Video.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cast: PropTypes.arrayOf(PropTypes.string),
    releaseDate: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
}

export default Video
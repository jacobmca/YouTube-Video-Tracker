import '../App.css';

function Video({ video }) {
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

export default Video
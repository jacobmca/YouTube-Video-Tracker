import React from 'react';
import '../App.css';

function Video() {
    return (
        <div class="task-card card mb-3 draggable" id="${task.id}">
            <div class="card-title strong mt-2">
                <h4><strong>${task.taskTitle}</strong></h4>
            </div>
            <div class="form-control hasDatePicker bg-transparent">
                <p>Date: ${task.taskDate}</p>
            </div>
            <div class="card-body">
                <p>${task.taskDescription}</p>
            </div>
            <div class="align-items-center mb-3">
                <button class="btn col-4 .m-3 btn-danger delete-btn border-light">Delete</button>
            </div>
        </div>
    )
}
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_VIDEO } from '../graphql/mutations';
import { GET_VIDEOS } from '../graphql/queries';

function NewVideo() {
    // State to manage modal visibility
    const [isModalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        description: '',
        cast: [],
        releaseDate: '',
        status: 'Pre-Production'
    });

    const [addVideo] = useMutation(ADD_VIDEO, {
        refetchQueries: [{ query: GET_VIDEOS }]
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'cast') {
            setFormData({
                ...formData,
                [name]: value.split(',').map(item => item.trim())
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addVideo({
                variables: { ...formData }
            });
            setModalOpen(false);
            setFormData({
                name: '',
                image: '',
                description: '',
                cast: [],
                releaseDate: '',
                status: 'Pre-Production'
            });
        } catch (err) {
            console.error('Error creating video:', err);
        }
    };

    return (
        <div className="new-video-container">
            <button 
                className="create-project-btn"
                onClick={() => setModalOpen(true)}
            >
                + New Project
            </button>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Create New Video Project</h2>
                            <button 
                                className="close-btn"
                                onClick={() => setModalOpen(false)}
                            >
                                ×
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Video Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="image">Image URL:</label>
                                <input
                                    type="url"
                                    id="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cast">Cast (comma-separated):</label>
                                <input
                                    type="text"
                                    id="cast"
                                    name="cast"
                                    value={formData.cast.join(', ')}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="releaseDate">Release Date:</label>
                                <input
                                    type="date"
                                    id="releaseDate"
                                    name="releaseDate"
                                    value={formData.releaseDate}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="status">Status:</label>
                                <select
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                >
                                    <option value="Pre-Production">Pre-Production</option>
                                    <option value="Production">Production</option>
                                    <option value="Post-Production">Post-Production</option>
                                </select>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="submit-btn">
                                    Create Project
                                </button>
                                <button 
                                    type="button" 
                                    className="cancel-btn"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewVideo;
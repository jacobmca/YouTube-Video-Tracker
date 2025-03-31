import {useState} from 'react';
// import NewVideo from "../components/NewVideo.jsx";
import Video from "../components/Video.jsx";

function VideoChart() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [projects, setProjects] = useState([
      {
        name: "The Angry Reviewer Reviews The Angry Reviewer Movie",
        image: "url-to-image",
        description: "Exclusively available on The Angry Reviewer DVD Volume 4, which will include a bonus Angry Reviewer commentary on the entire Rolie Polie Olie series",
        cast: ["Andrew Waas"],
        releaseDate: "2025-04"
      }
    ]);
  
    const toggleExpand = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="video-section">
          <div className="video-div">
            <h2 className="video-list">List of Videos</h2>
            <div className="video-grid">
            {projects.map((project, index) => (
              <div
              className={`video-card col-md-6 col-lg-4 mb-4 d-flex justify-content-center ${
                expandedIndex === index ? 'expanded' : ''
              }`}
              key={index}
            >
              <Video
                name={project.name}
                image={project.image}
                description={project.description}
                cast={project.cast}
                releaseDate={project.releaseDate}
                isExpanded={expandedIndex === index}
                onToggle={() => toggleExpand(index)}
              />
            </div>        
            ))}
            </div>
          </div>
        </section>
      );
    }
    
    export default VideoChart;
import NewVideo from "NewVideo.jsx";
import Video from "Video.jsx";
// import jsonwebtoken from 'jsonwebtoken';

function VideoView() {
    const [expandedIndex, setExpandedIndex] = useState(null);
  
    const toggleExpand = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="video-section">
          <div video-div>
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
                name={video.name}
                image={video.image}
                description={video.description}
                cast={video.cast}
                releaseDate={video.releaseDate}
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
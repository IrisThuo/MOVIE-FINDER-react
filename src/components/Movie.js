import React ,{useState} from 'react';
import EditMovie from './EditMovie';



function Movie({movie,id,title, description,runtime, year, onUpdateMovie, onMovieDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    
    function handleDeleteClick() {
        fetch(`http://localhost:9292/movies/${id}`, {
          method: "DELETE",
        });
    
        onMovieDelete(id);
      }

      function handleUpdateMovie(updatedMovie) {
        setIsEditing(false);
        onUpdateMovie(updatedMovie);
      }



    return (
        <div className="movie">
        {isEditing ? (
            <EditMovie
              id={id}
              title={title}
              description={description}
              runtime={runtime}
              year={year}
              onUpdateMovie={handleUpdateMovie}
            />
          ) : (
            <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{runtime}</p>
            <p>{year}</p>
            </div>
            
          )}
          
        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            <span role="img" aria-label="edit">
              Edit?
            </span>
          </button>
        <div>
        <button onClick={handleDeleteClick}>
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>

      </div>

    
      </div>
     
    );
}

export default Movie;


import React,{useState} from 'react';

function AddMovie({onAddMovie}) {
    const [title, setTitle]= useState('')
    const [posterUrl, setPosterUrl]= useState('')
    const [description, setDescription]= useState('')
    const [runtime, setRuntime]= useState('')
    const [year, setYear]= useState('')

    

    function handleSubmit(e){
        e.preventDefault()

        fetch("http://localhost:9292/movies", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              posterUrl: posterUrl,
              description: description,
              runtime: runtime,
              year: year
            }),
          })
            .then((r) => r.json())
            .then((newMovie) => {
              onAddMovie(newMovie);
              setTitle("");
              setPosterUrl("");
              setDescription("");
              setRuntime("");
              setYear("");

            });
    }

    return (
        <div>
       
            <form onSubmit={handleSubmit}>
            <div>
            <label>TITLE</label>
            <input 
            type="text" 
            placeholder="Enter movie title.." 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div>
            <label>POSTER URL</label>
            <input 
            type="text" 
            placeholder="https://img.src" 
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
            />
            </div>
            <div>
            <label>DESCRIPTION</label>
            <input 
            type="text" 
            placeholder="Enter light Overview.." 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            <div>
            <label>RUNTIME</label>
            <input 
            type="integer" 
            placeholder="Movie length in minutes.." 
            value={runtime}
            onChange={(e) => setRuntime(e.target.value)}
            />
            </div>
            <div>
            <label>YEAR</label>
            <input 
            type="integer" 
            placeholder="release year.." 
            value={year}
            onChange={(e) => setYear(e.target.value)}
            />
            </div>
            <button>ADD</button>
            </form>
        </div>
    );
}

export default AddMovie;
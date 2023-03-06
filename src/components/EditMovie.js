import React, { useState } from "react";

function EditMovie({ id, title, description, runtime, year, onUpdateMovie }) {
  const [movieTitle, setTitle]= useState(title)
  const [movieDescription, setDescription]= useState(description)
  const [movieRuntime, setRuntime]= useState(runtime)
  const [movieYear, setYear]= useState(year)

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/movies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        title: movieTitle,
        description: movieDescription,
        runtime: movieRuntime,
        year: movieYear
      }),
    })
      .then((r) => r.json())
      .then((updatedMovie) => onUpdateMovie(updatedMovie));
  }

  return (
    <form onSubmit={handleFormSubmit}>
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
  );
}

export default EditMovie;
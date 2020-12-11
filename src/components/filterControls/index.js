import React, { useContext } from "react";
import "./filterControls.css";
import { GenresContext } from '../../contexts/genresContext' 

const FilterControls = props => {
  const context = useContext(GenresContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <div className="row bg-warning">
      <div className="col-md-12">
        <h4>

          {/* Search Bar - https://codepen.io/takaneichinose/pen/gKVXXL */}
          <div className="flexbox">
            <div className="search">
              <div>
                <input 
                type="text" 
                placeholder="Search . . ." 
                onChange={handleTextChange}
                required 
                />
              </div>
            </div>

            {/* Select - https://www.filamentgroup.com/lab/select-css.html */}
            {/* <h2>Genre:</h2> */}
            <select  className="select-css" id="genre" onChange={handleGenreChange}>
              {context.genres.map(genre => {
                return (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                );
              })}
            </select>
          </div>
          
        </h4>
      </div>
    </div>
  );
};

export default FilterControls;
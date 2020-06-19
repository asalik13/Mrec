import React, {useState, useEffect} from "react";
import axios from "axios";
import Movie from "./Movie";

export default function Rate(props) {
  const [list, setList] = useState(props.list);
  const [ratings, setRatings] = useState({});
  const [num, setNum] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [showMovieList, setShowMovieList] = useState([]);

  function getNext(list) {
    setMovieList(
      movieList.concat(
        list
          .slice(num, num + 20)
          .map((name, index) => (
            <Movie
              name={name}
              key={num + index}
              id={num + index}
              rating={true}
              value = {props.ratings[num+index]}
              changeRating={props.changeRating}
            />
          ))
      )
    );

    setNum(num + 20);
  }

  useEffect(() => {
    getNext(list);
  }, []);

  return (
    <div>
      <div
        style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}
      >
        {movieList}
      </div>
      <button onClick={() => getNext(list)}>Load More</button>
    </div>
  );
}

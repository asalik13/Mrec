import React, {useState, useEffect} from "react";
import axios from "axios";
import Movie from "./Movie";

export default function Layout(props) {
  const [list, setList] = useState(props.list);
  const [recommended,setRecommended] = useState(props.recommended)
  const [ratings, setRatings] = useState({});
  const [num, setNum] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [showMovieList, setShowMovieList] = useState([]);

  function getNext(list) {
    setMovieList(
      movieList.concat(
        recommended
          .slice(num, num + 20)
          .map((index) => (
            <Movie
              name={list[index]}
              key={index}
              id={index}
              rating={false}
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

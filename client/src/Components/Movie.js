import React, {useState, useEffect} from "react";
import Rating from "@material-ui/lab/Rating";
import {withStyles} from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import axios from "axios";

export default function Movie(props) {
  const [value, setValue] = useState(0);
  const [imageLink, setImageLink] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=41bc5f16975cf23dbb34e6ec9292c03c&language=en-US&query=" +
          props.name +
          "&page=1&include_adult=false"
      )
      .then(res => {
        setImageLink(
          "url(https://image.tmdb.org/t/p/w500/" +
            res.data.results[0].poster_path +
            ")"
        );
      });
  }, []);

  let nameStyle = {
    height: "25px",
    padding: "3%",
    color: "white"
  };
  let imageStyle = {
    backgroundImage: imageLink,

    width: "200px",
    height: "300px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  let movieStyle = {
    width: "200px",
    maxHeight: "370px",
    margin: "2%",
    backgroundColor: "black"
  };

  let RatingStyle = {
    height: "30px",
    padding: "0px"
  };

  const StyledRating = withStyles({
    iconFilled: {
      color: "#E50914"
    },
    iconHover: {
      color:"#E50914"
    },
    iconEmpty: {
      color: "gray"
    }
  })(Rating);

  if(imageLink.substr(imageLink.length - 4)==null){
    return null
  }

  return (
    <div style={movieStyle}>

      <div style={imageStyle} className="image"></div>
      {props.rating?(<StyledRating
        defaultValue={0}
        precision={0.5}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.changeRating(props.id,newValue)
        }}

        style={RatingStyle}
      />):null}
    </div>
  );
}

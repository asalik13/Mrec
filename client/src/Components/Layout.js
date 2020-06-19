import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Rate from "./Rate";
import Recommended from "./Recommended"
import axios from "axios";
import CircleLoader from "react-spinners/GridLoader";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#221f1f"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  button: {
    textTransform: "none"
  }
}));

export default function Layout() {
  const [ratings, setRatings] = useState({});
  const [list, setList] = useState([]);
  const [status, setStatus] = useState("home");
  const [loading, setLoading] = useState(true);
  const [recommended, setRecommended] = useState([]);
  const override = `
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
  const classes = useStyles();
  function changeRating(id, value) {
    setRatings(ratings => {
      let newRatings = JSON.parse(JSON.stringify(ratings));
      newRatings[id] = value;
      return newRatings;
    });
  }

  function getRecommended() {
    setLoading(true);
    axios.post("/addratings", ratings).then(res => {
      setRecommended(res.data.r);
      setLoading(false);
      console.log(res.data.r);
    });
  }

  useEffect(() => {
    axios.get("/movielist").then(res => {
      setList(res.data.a);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <CircleLoader
        css={override}
        size={100}
        color={"#E50914"}
        loading={loading}
      />
    );
  } else {
    if (status === "home") {
      return (
        <div>
          <AppBar className={classes.root} position="sticky" color="inherit">
            <Toolbar>
              <Typography
                style={{color: "#E50914", marginLeft: "5%"}}
                align="left"
                variant="h6"
                className={classes.title}
              >
                <b>MREC</b>
              </Typography>
              <Button
                style={{color: "#E50914"}}
                className={classes.button}
                color="inherit"
                onClick={() => {
                  getRecommended();
                  setStatus("recommended")
                }}
              >
                Recommended
              </Button>
            </Toolbar>
          </AppBar>
          <Rate changeRating={changeRating} list={list} ratings={ratings}/>
        </div>
      );
    } else if(status=="recommended"){
      return(<div>
        <AppBar className={classes.root} position="sticky" color="inherit">
          <Toolbar>
            <Typography
              style={{color: "#E50914", marginLeft: "5%"}}
              align="left"
              variant="h6"
              className={classes.title}
            >
              <b>MREC</b>
            </Typography>
            <Button
              style={{color: "#E50914"}}
              className={classes.button}
              color="inherit"
              onClick={() => {
                setStatus("home")
              }}
            >
              Rate More Movies
            </Button>
          </Toolbar>
        </AppBar>
        <Recommended list={list} recommended={recommended} />
      </div>)
    }
  }
}

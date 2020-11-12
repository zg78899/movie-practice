import React, { useReducer, useEffect } from "react";
import "./App.css";
import Movie from "./Movies";
import Header from "./Headers";
import Search from "./Search";
import axios from "axios";

// const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

// const initalState = {
//   loading: true,
//   movies: [],
//   errorMessage: null
// }
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SEARCH_MOVIES_SUCCESS':
//       return {
//         ...state,
//         loading: false,
//         movies: action.payload
//       }
//     case 'SEARCH_MOVIES_REQUEST':
//       return {
//         ...state,
//         loading: true,
//         errorMessage: null
//       }
//     case 'SEARCH_MOVIES_FAILURE':
//       return {
//         ...state,
//         loading: false,
//         errorMessage: action.error
//       }
//     default:
//       throw new Error(`Unhandled Type Error ${action.type.error}`)
//   }

// }

// const App1 = () => {
//   const [state, dispatch] = useReducer(reducer, initalState);

//   useEffect(() => {
//     fetch(MOVIE_API_URL)
//       .then(response => response.json())
//       .then(jsonResponse => {
//         dispatch({ type: 'SEARCH_MOVIES_SUCCESS', payload: jsonResponse.Search });
//       })
//   }, []);

//   const search = searchValue => {
//     dispatch({
//       type: 'SEARCH_MOVIES_REQUEST'
//     });

//     fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
//       .then(response => response.json())
//       .then(jsonResponse => {
//         if (jsonResponse.Response === 'True') {
//           dispatch({
//             type: 'SEARCH_MOVIES_SUCCESS',
//             payload: jsonResponse.Search
//           });
//         } else {
//           dispatch({
//             type: 'SEARCH_MOVIES_FAILURE',
//             error: jsonResponse.Error
//           })
//         }
//       });
//   };
//   const { loading, errorMessage, movies } = state;

//   return (
//     <div className="App">
//       <Header text="Movie World!!!" />
//       <Search search={search} />
//       <p className="App-intro">Sharing a few of our favourite movies</p>
//       <div className="movies">
//         {loading && !errorMessage ? (
//           <span>loading... </span>
//         ) : errorMessage ? (
//           <div className="errorMessage">{errorMessage}</div>
//         ) : (
//               movies.map((movie, index) => (
//                 <Movie key={`${index}-${movie.Title}`} movie={movie} />
//               ))
//             )}
//       </div>
//     </div>
//   );
// }
// export default App1;

// const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

// const initalState = {
//   loading: true,
//   movies: [],
//   errorMessage: null,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SEARCH_MOVIES_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         movies: action.payload,
//       };
//     case "SEARCH_MOVIES_REQUEST":
//       return {
//         ...state,
//         loading: true,
//         errorMessage: null,
//       };
//     case "SEARCH_MOVIES_FAILURE":
//       return {
//         ...state,
//         loading: false,
//         errorMessage: action.error,
//       };
//     default:
//       throw new Error(`Unhandled Type Error ${action.type.error}`);
//   }
// };

// const App1 = () => {
//   const [state, dispatch] = useReducer(reducer, initalState);

//   useEffect(() => {
//     console.log(fetch(MOVIE_API_URL));
//     axios
//       .get(MOVIE_API_URL)
//       .then((response) => response.data)
//       .then((jsonResponse) => {
//         dispatch({
//           type: "SEARCH_MOVIES_SUCCESS",
//           payload: jsonResponse.Search,
//         });
//       });
//   }, []);

//   const search = async (searchValue) => {
//     dispatch({
//       type: "SEARCH_MOVIES_REQUEST",
//     });

//     axios
//       .post(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
//       .then((response) => response.data)
//       .then((jsonResponse) => {
//         if (jsonResponse.Response === "True") {
//           dispatch({
//             type: "SEARCH_MOVIES_SUCCESS",
//             payload: jsonResponse.Search,
//           });
//         } else {
//           dispatch({
//             type: "SEARCH_MOVIES_FAILURE",
//             error: jsonResponse.Error,
//           });
//         }
//       });
//   };
//   const { loading, errorMessage, movies } = state;

//   return (
//     <div className="App">
//       <Header text="Movie World!!!" />
//       <Search search={search} />
//       <p className="App-intro">Sharing a few of our favourite movies</p>
//       <div className="movies">
//         {loading && !errorMessage ? (
//           <span>loading... </span>
//         ) : errorMessage ? (
//           <div className="errorMessage">{errorMessage}</div>
//         ) : (
//           movies.map((movie, index) => (
//             <Movie key={`${index}-${movie.Title}`} movie={movie} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

const MOVIE_API = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
const App1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(MOVIE_API);
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: res.data.Search,
        });
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const search = async function (searchValue) {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });
    try {
      var res = await axios.post(
        `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`
      );
      if (res.data.Response === "True") {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: res.data.Search,
        });
      } else {
        dispatch({
          type: "SEARCH_MOVIES_FAILURE",
          error: res.data.Error,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const { loading, movies, errorMessage } = state;
  return (
    <div className="App">
      <Header text="Movie World" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of out Favorite Movie</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>...loading</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App1;

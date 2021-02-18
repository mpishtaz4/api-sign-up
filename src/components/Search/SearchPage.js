import React, { useState } from "react";
import GifDisplay from "../Gif/GifDisplay";
import { setSearch, setUser } from "../../redux/actions";
import "./SearchPage.css";
import { connect } from "react-redux";

const SearchPage = (props) => {
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState("pg");
  const [limit, setLimit] = useState(25);
  const [error, setError] = useState("");

  // Function (here or elsewhere) to actually trigger the fetch call
  async function getGifs(query, rating, limit) {
    const key = "DtwTkZwAIfcbYylnIlpb5tczU7Y3MH8n";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=${limit}&rating=${rating}`;
    try {
      setError("");
      let response = await fetch(url);
      let json = await response.json();
      let resGifs = json.data.map((val) => {
        return { id: val.id, title: val.title, url: val.images.original.url };
      });
      props.setSearch(resGifs);
    } catch (e) {
      setError("Something went wrong. Please try again later!");
      props.setSearch([]);
    }
  }

  return (
    <>
      <div className="form">
        <h1 className="text-center">Gif Search, welcome: {props.username}</h1>
        <div className="form-container">
          <label className="label text-center" htmlFor="query">
            Search
          </label>
          <input
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            id="query"
          />
        </div>
        <div className="form-container">
          <label className="label text-center" htmlFor="rating">
            Rating
          </label>
          <select
            className="select"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            id="rating"
          >
            <option value="g">G</option>
            <option value="pg">PG</option>
            <option value="pg-13">PG-13</option>
            <option value="r">R</option>
          </select>
        </div>
        <div className="form-container">
          <label className="label text-center" htmlFor="limit">
            Limit
          </label>
          <select
            className="select"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            id="limit"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <button
          className="submit"
          onClick={() => getGifs(query, rating, limit)}
        >
          Search
        </button>
      </div>
      <div className="container">
        {error.length > 0 && <h1>{error}</h1>}
        {error.length === 0 &&
          props.gifs.map((v) => <GifDisplay key={v.id} gif={v} />)}
      </div>
    </>
  );
};

const mapDispatchToProps = {
  setSearch,
};

function mapStateToProps(state) {
  return {
    username: state.user.username,
    globalState: state,
    gifs: state.search,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);

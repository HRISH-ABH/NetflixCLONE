import React, { useState, useEffect } from "react";
import "./Home.scss";
import axios from "axios";

const apikey = "3f2a4205239559aae3543f217f31c919";
const url = "https://api.themoviedb.org/3";
const imgurl = "https://image.tmdb.org/t/p/original";

const Card = (props) => {
  return <img src={props.img} alt="" className="card" />;
};

const Row = ({ title, arr = [{}] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="card-container">
        {arr.map((item, index) => (
          <Card key={index} img={`${imgurl}/${item.poster_path}`} alt="" />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [discover, setdiscover] = useState([]);
  const [Tvshows, setTvshows] = useState([]);
  const [Toprated, setToprated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [nowPlaying, setNowplaying] = useState([]);

  useEffect(() => {
    const fetchDiscover = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/discover/movie?api_key=${apikey}`);
      setdiscover(results);
    };
    fetchDiscover();
  }, []);

  useEffect(() => {
    const fetchTVShows = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/discover/tv?api_key=${apikey}`);
      setTvshows(results);
    };
    fetchTVShows();
  }, []);

  useEffect(() => {
    const fetchToprated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/top_rated?api_key=${apikey}`);
      setToprated(results);
    };
    fetchToprated();
  }, []);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/upcoming?api_key=${apikey}`);
      setUpcoming(results);
    };
    fetchUpcoming();
  }, []);

  useEffect(() => {
    const fetchNowplaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/now_playing?api_key=${apikey}`);
      setNowplaying(results);
    };
    fetchNowplaying();
  }, []);

  return (
    <section className="home">
      <div className="banner">
        <img className="main-img" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8a6a68144592045.628efcd3e77b5.jpg" alt="" />
      </div>
      <Row title={"Popular on Netflix"} arr={discover} />
      <Row title={"Top Rated"} arr={Toprated} />
      <Row title={"TV Shows"} arr={Tvshows} />
      <Row title={"For You"} arr={upcoming} />
      <Row title={"My List"} arr={nowPlaying} />
    </section>
  );
};

export default Home;

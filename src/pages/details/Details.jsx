import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "../../api";
import { FaHome } from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [credits, setCredits] = useState(null);
  const [translatedData, setTranslatedData] = useState({
    countries: [],
    genres: [],
    jobs: [],
    casts: [],
  });

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieRes, similarRes, creditsRes] = await Promise.all([
          request.get(`/movie/${id}`),
          request.get(`/movie/${id}/similar`),
          request.get(`/movie/${id}/credits`),
        ]);

        setData(movieRes.data);
        setSimilar(similarRes.data.results);
        setCredits(creditsRes.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    const translateData = async () => {
      if (data) {
        try {
          const translatedCountries = await Promise.all(
            data.production_countries.map((country) =>
              translate(country.name, "ru")
            )
          );

          const translatedGenres = await Promise.all(
            data.genres.map((genre) => translate(genre.name, "ru"))
          );

          const translatedJobs = credits?.crew
            ? await Promise.all(
                credits.crew
                  .filter((member) => member.job === "Director")
                  .map((member) => translate(member.name, "ru"))
              )
            : [];

          const translatedCasts = credits?.cast
            ? await Promise.all(
                credits.cast.slice(0, 5).map(async (member) => ({
                  character: await translate(member.character, "ru"),
                  name: await translate(member.name, "ru"),
                }))
              )
            : [];

          setTranslatedData({
            countries: translatedCountries,
            genres: translatedGenres,
            jobs: translatedJobs,
            casts: translatedCasts,
          });
        } catch (error) {
          console.error("Error translating data:", error);
        }
      }
    };

    translateData();
  }, [data, credits]);

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}ч ${remainingMinutes}м / ${minutes} minutes`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOnlineClick = (title) => {
    if (title) {
      const searchQuery = encodeURIComponent(`${title} trailer`);
      const youtubeSearchURL = `https://www.youtube.com/results?search_query=${searchQuery}`;
      window.open(youtubeSearchURL, "_blank");
    }
  };

  const handleOnlineClick2 = (title) => {
    if (title) {
      const searchQuery = encodeURIComponent(title);
      const googleSearchURL = `https://www.google.com/search?q=${searchQuery}`;
      window.open(googleSearchURL, "_blank"); 
    }
  };

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1360px] h-[640px] relative">
          <img
            className="w-full h-full object-cover rounded-xl shadow-lg"
            src={`${import.meta.env.VITE_IMAGE_URL}${data?.backdrop_path}`}
            alt={data?.title || "Movie Poster"}
          />
          
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {data?.title}
            </h1>
            <p className="text-sm md:text-lg mb-6">
              {new Date(data?.release_date).getFullYear()} • {translatedData.genres.slice(0, 2).join(", ")} • {formatTime(data?.runtime)}
            </p>
            <div className="grid grid-cols-3 gap-6">
              <button className="bg-orange-700 hover:bg-red-400 text-white py-3 px-8 rounded-md shadow-lg">
              Buy a ticket
              </button>
              <button
              className="bg-red-600 hover:bg-red-800 text-[18px] px-8 py-2 rounded-md"
              onClick={() => handleOnlineClick(data.title)} 
              >
                Trailer
              </button>
              <button
                className="bg-indigo-600 text-[18px] px-8 py-2 rounded-md hover:bg-indigo-900"
                onClick={() => handleOnlineClick2(data.title)} 
              >
                Online
              </button>
            </div>
          </div>
        </div>

        <div className="detail-list w-full max-w-[450px] mt-12 mb-10 flex flex-wrap flex-col">
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-[#111111] py-4 border px-2 rounded-lg font-semibold hover:bg-violet-900 transition">
            Tickets
            </button>
            <button className="bg-[#1D1D1D] border py-4 px-2 rounded-lg font-semibold hover:bg-teal-600 transition">
            About the Film
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-12">
            <button className="border border-gray-700 px-4 py-2 rounded-xl text-xl font-bold">
              {((data?.vote_average / 100) * 90).toFixed(1)}
            </button>
            <button className="border border-gray-700 px-4 py-2 rounded-xl text-xl font-bold">
              {data?.vote_average?.toFixed(1)}+
            </button>
          </div>

          <div className="border-b pb-8 border-gray-800">
            <h3 className="mt-12 text-xl">Details</h3>
            <div className="mt-6 flex justify-between">
              <p>Duration</p>
              <p>{formatTime(data?.runtime)}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <p>Premiere</p>
              <p>{new Date(data?.release_date).toLocaleDateString()}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <p>Production</p>
              <p>{translatedData.countries.join(", ")}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <p>Genre</p>
              <p>{translatedData.genres.slice(0, 2).join(", ")}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <p>Director</p>
              <p>{translatedData.jobs.length > 0 ? translatedData.jobs.join(", ") : "Неизвестно"}</p>
            </div>
          </div>

          <div className="border-b pb-8 border-gray-800">
            <h3 className="mt-12 text-xl">Starring</h3>
            {translatedData.casts.map((member, index) => (
              <div key={index} className="mt-6 flex justify-between">
                <p>{member.name}</p>
                <p>{member.character}</p>
              </div>
            ))}
          </div>

          <div className="pb-6">
            <h3 className="mt-12 text-xl">Plot</h3>
            <p className="mt-6 text-gray-400 leading-relaxed">{data?.overview}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <button className="w-[60%] bg-yellow-600 hover:bg-yellow-700 px-2 py-3 rounded-md text-[20px]">
            Buy a ticket
            </button>
            <button
              onClick={() => navigate(-1)}
              className="px-6 h-full py-3 flex items-center gap-3 justify-center w-[30%] bg-red-600 rounded-md hover:bg-red-700"
            >
              <TbArrowBackUp className="text-[30px]"/>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Details;



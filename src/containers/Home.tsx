"use client";

import FeaturedMovies from "@/components/FeaturedMovies";
import Header from "@/components/Header";
import { BASEiMAGE_URL } from "@/constants/endpoints";
import { useGetPopularMovies } from "@/http/movies/query";
import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import React, { useEffect, useMemo } from "react";

const Home = () => {
  const [activeHeroImageIndex, setActiveHeroImageIndex] = React.useState(0);
  const { data: popularMovies, isLoading } = useGetPopularMovies();

  const PosterMovies = useMemo(() => {
    let result = !!popularMovies?.results?.length
      ? [...popularMovies?.results]
      : [];
    return result.splice(0, 5);
  }, [popularMovies]);

  const activeMovie = useMemo(() => {
    return PosterMovies[activeHeroImageIndex];
  }, [activeHeroImageIndex, PosterMovies]);

  const changeActiveHeroImageIndex = (index: number) => {
    setActiveHeroImageIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveHeroImageIndex((prev) => {
        if (prev === 4) {
          return 0;
        }
        return prev + 1;
      });
    }, 10000);

    return () => clearInterval(intervalId);
  }, [activeHeroImageIndex]);

  return (
    <div>
      <div
        className=" h-full min-h-[600px] w-full custom-container bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${BASEiMAGE_URL}${PosterMovies[activeHeroImageIndex]?.poster_path})`,
        }}>
        <Navbar />
        <Header
          activeMovie={activeMovie}
          activeHeroImageIndex={activeHeroImageIndex}
          changeActiveHeroImageIndex={changeActiveHeroImageIndex}
        />
      </div>
      <FeaturedMovies />
      <Footer />
    </div>
  );
};

export default Home;

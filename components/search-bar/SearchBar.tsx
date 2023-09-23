"use client";

import React, { useState } from "react";
import { SearchManufacture } from "..";
import Image from "next/image";
import { SearchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <>
      <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
          src="/magnifying-glass.svg"
          alt="magnify"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    </>
  );
};

export default function SearchBar({
  setManuFacture,
  setModel,
}: SearchBarProps) {
  const [searchManufacture, setSearchManufacture] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacture === "" && searchModel === "") {
      return alert("Please fill in the search bar");
    }
    setModel(searchModel);
    setManuFacture(searchManufacture);
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture
          selected={searchManufacture}
          setSelected={setSearchManufacture}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          className="searchbar__input"
          placeholder="Tiguan..."
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}

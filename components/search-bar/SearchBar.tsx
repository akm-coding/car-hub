"use client";

import React, { useState } from "react";
import { SearchManufacture } from "..";

export default function SearchBar() {
  const [manufacture, setManufacture] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
      </div>
    </form>
  );
}

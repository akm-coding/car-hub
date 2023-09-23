"use client";

import { ShowMoreProps } from "@/types";
import React from "react";
import { CustomButton } from "..";

export default function ShowMore({
  pageNumber,
  isNext,
  setLimit,
}: ShowMoreProps) {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

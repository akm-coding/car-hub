import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufactureProps {
  manufacture: string;
  setManufacture: (manufacture: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export type CarState = CarProps[] & { message?: string };
export interface FilterProps {
  manufacture?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface SearchBarProps {
  setManuFacture: (manufacture: string) => void;
  setModel: (model: string) => void;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps<T> {
  options: OptionProps[];
  setFilter: (selected: T) => void;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}

export interface SearchManuFactureProps {
  selected: string;
  setSelected: (selected: string) => void;
}

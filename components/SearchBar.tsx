"use client";

import React from "react";
import { Input } from "./ui/input";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  return (
    <Input
      onChange={(event) => setSearchQuery(event.target.value)}
      value={searchQuery}
      className="bg-neutral-900 text-white focus:border-none focus:outline-none"
      placeholder="Enter your anime's name..."
    />
  );
};

export default SearchBar;

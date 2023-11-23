"use client";

import { useContext } from "react";
import TVShows from "../components/TVShows";
import { SearchContext } from "../store/search-context";
export default function TVShowsPage() {
  const search = useContext(SearchContext);
  return <TVShows search={search} />;
}

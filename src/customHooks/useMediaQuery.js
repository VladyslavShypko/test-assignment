import { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  const handleChange = (e) => setMatches(e.matches);

  useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    matchQueryList && setMatches(matchQueryList.matches);

    matchQueryList.addEventListener("change", handleChange);

    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

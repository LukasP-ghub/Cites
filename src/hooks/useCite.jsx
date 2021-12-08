import { useState, useEffect } from "react";
import useFetchCites from './useFetchCites';
import { PREV_CITE, NEXT_CITE, RANDOM_CITE } from "../assets/constants";

const useCite = (param) => {
  const [cite, setCite] = useState(null);
  const [toggleCite, setToggleCite] = useState(param);
  const [cites, loaded] = useFetchCites();

  useEffect(() => {
    if (loaded && toggleCite) {
      let index = cites.findIndex(cte => cte.quote === cite?.quote);
      console.log(index);
      let newIndex = 0;
      switch (toggleCite) {
        case NEXT_CITE:
          newIndex = index === cites.length - 1 ? 0 : index + 1;
          setCite(cites[newIndex]);
          break;
        case PREV_CITE:
          newIndex = index === 0 ? cites.length - 1 : index - 1;
          setCite(cites[newIndex]);
          break;
        case RANDOM_CITE:
          newIndex = Math.floor(Math.random() * (cites.length));
          setCite(cites[newIndex]);
          break;
        default:
          break;
      }
      setToggleCite(null);
    }

  }, [toggleCite, loaded])

  return [cite, setToggleCite];
}

export default useCite
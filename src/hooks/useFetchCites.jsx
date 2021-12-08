import { useState, useEffect } from "react";

const useFetchCites = () => {
  const [cites, setCites] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchCites() {
      try {
        const response = await fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json');
        const parsedRes = await response.json();
        setCites(parsedRes);
        setLoaded(true);
      } catch (error) {
        setLoaded(false);
      }
    }
    // fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    //   .then(response => response.json())
    //   .then(data => setCites(data));
    if (!cites || cites?.length === 0) {
      fetchCites();
    }
  }, [])


  return [cites, loaded];
}

export default useFetchCites;
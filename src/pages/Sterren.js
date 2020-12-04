import React from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/show/ShowGrid';


const Sterren = () => {

  const [sterren] = useShows()

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    if(sterren && sterren.length > 0) {
      const promises = sterren.map(showId => apiGet(`/shows/${showId}`))

      Promise.all(promises)
      .then(apiData => apiData.map(show => ({ show })))
      .then(results => {
        setShows(results);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });

    } else {
      setIsLoading(false);
    }
  }, [sterren]);
  return (
    <MainPageLayout>{isLoading && <div>Shows are still loading</div>}
    {error && <div>Error occured: {error}</div>}
    {!isLoading && !shows && <div>No shows were added</div>}
    {!isLoading && !error && shows && <ShowGrid data={shows} />}
    
    </MainPageLayout>
  );
};

export default Sterren;

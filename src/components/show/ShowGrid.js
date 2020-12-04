import React from 'react';
import ShowCard from './ShowCard';

import { FlexGrid } from '../styled';

import IMAGE_NOT_FOUND from '../../images/not-found.png';

import { useShows } from '../../misc/custom-hooks';

const ShowGrid = ({ data }) => {

  const [sterrenShows, dispatchSterren] = useShows()

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        
        const isSterren = sterrenShows.includes(show.id);
        
        const onSterClick = () => {
          if (isSterren) {
            dispatchSterren({ type: 'REMOVE', showId: show.id });
          } else {
            dispatchSterren({ type: 'ADD', showId: show.id });
          }
        };

        return ( 
          <ShowCard 
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onSterClick={onSterClick}
            isSterren={isSterren}
          />
    );
  })}
    </FlexGrid>
  );
};

export default ShowGrid;

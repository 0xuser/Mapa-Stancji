import axios from 'axios';
export const FETCH_OFFERS = 'fetch_offers';
export const FILTER_OFFERS = 'filter_offers';


const list = [
    {
      id: 1,
      type: 0,
      coord: {
        lat: 19.947769,
        lon: 50.058531
      }
    },
    {
      id: 15,
      type: 1,
      coord: {
        lat: 19.941890,
        lon: 50.066492
      }
    },
    {
        id: 25,
        type: 0,
        coord: {
          lat: 19.930346,
          lon: 50.067015
        }
      },
    {
        id: 25,
        type: 0,
        coord: {
          lat: 19.919317,
          lon: 50.064480
        }
      }
  ];

export function fetchOffers(filter){
    const shuffled = list.sort(() => .5 - Math.random());
    let selected = shuffled.slice(0,3) ;

    return {
        type: FETCH_OFFERS,
        payload: selected
    };
    
}

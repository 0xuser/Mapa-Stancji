import axios from 'axios';
export const FETCH_OFFERS = 'fetch_offers';


const list = [
    {
      id: 1,
      type: 0,
      coord: {
        lat: 40.000,
        lon: -122.000
      }
    },
    {
      id: 15,
      type: 1,
      coord: {
        lat: 30.000,
        lon: 100.000
      }
    },
    {
        id: 25,
        type: 0,
        coord: {
          lat: 35.000,
          lon: 102.000
        }
      }
  ];


export function fetchOffers(a){
    console.log(a)

    return {
        type: FETCH_OFFERS,
        payload: list
    };
}
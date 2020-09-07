import React, { useEffect } from 'react'

import useFetch from '../../hooks/useFetch';

import { PHOTOS_GET } from '../../utils/api';
import Error from '../../utils/Error';
import Loading from '../../utils/Loading';

import FeedPhotosItem from '../FeedPhotosItem';

import { Feed } from './styles';

const FeedPhotos = () => {

  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({page: 1, total: 6, user: 0});
      const { response, json } = await request(url, options);
      console.log(json);
    }

    fetchPhotos();
  }, [request]);

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  
  if (data)
  return (
    <Feed className="animeLeft">
      {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} />)}
    </Feed>
  )
  else return null;
}

export default FeedPhotos;

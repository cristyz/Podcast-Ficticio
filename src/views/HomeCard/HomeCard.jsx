import { useEffect, useState } from 'react';

import './HomeCard.scss';

import getAllDetails from '../../functions/getAllDetails';

// Components
import Banner from '../../components/HomeCardComponents/Banner/Banner';
import ListEpisodes from '../../components/HomeCardComponents/ListEpisodes/ListEpisodes';
import DescriptionPodCast from '../../components/HomeCardComponents/Description/Description';

const HomeCard = () => {

  const [allEpisodes, setAllEpisodes] = useState([])
  const [data, setData] = useState()

  useEffect(() => {

    getAllDetails(setAllEpisodes, setData)

  }, [])

  return (
    <div className="containerListPodCast">
      <Banner data={data} />
      <div className="listPodCast">
        <DescriptionPodCast data={data} />
        <div className="listParagrafh">
          <p>LISTA DE EPISÓDIOS</p>
        </div>
        <ListEpisodes allEpisodes={allEpisodes} />
      </div>
    </div>
  );
}

export default HomeCard;

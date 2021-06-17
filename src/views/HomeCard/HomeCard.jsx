import { useEffect, useState } from 'react';

import './HomeCard.scss';


import getAllDetails from '../../functions/getAllDetails';

// Components
import Banner from '../../components/Banner';
import ListEpisodes from '../../components/ListEpisodes';
import DescriptionPodCast from '../../components/Description';


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

        <div className="containerListEpisodes">

          <ListEpisodes allEpisodes={allEpisodes} />

        </div>

      </div>
      
    </div>
  );
}

export default HomeCard;

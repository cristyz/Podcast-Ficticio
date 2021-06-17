import axios from 'axios';


async function getAllDetails(setAllEpisodes, setData) {
  axios.get('https://api-frontend-test.brlogic.com/podcast/details.json')
    .then((e) => {
     
        setData(e.data)
        setAllEpisodes(e.data.episodes)
      
    })
}

export default getAllDetails
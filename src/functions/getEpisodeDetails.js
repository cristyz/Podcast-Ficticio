import axios from 'axios';


async function getEpisodeDetails(setEpisodeDetails, id) {
    axios.get(`https://api-frontend-test.brlogic.com/podcast/episodes/${id}/details.json`)
        .then(e => {
            setEpisodeDetails(e.data)
        })
}

export default getEpisodeDetails
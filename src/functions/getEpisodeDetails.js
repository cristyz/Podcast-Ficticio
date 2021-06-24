import axios from 'axios';


async function getEpisodeDetails(id) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api-frontend-test.brlogic.com/podcast/episodes/${id}/details.json`)
        .then(e => {
            resolve(e)
        })
        .catch(err => {
            reject(err)
        })
    })
}

export default getEpisodeDetails
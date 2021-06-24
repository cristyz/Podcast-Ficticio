import axios from 'axios';


async function getEpisodeNumber(id) {
    return new Promise((resolve, reject) => {
        axios.get('https://api-frontend-test.brlogic.com/podcast/details.json')
            .then((e) => {
                let currentEpisode
                let nextEpisode
                let previousEpisode

                e.data.episodes.forEach((epi) => {
                    if (epi.id.toString() === id) {
                        currentEpisode = epi.episodeNumber
                    }
                })

                // Anterior
                e.data.episodes.forEach((epi) => {
                    if (epi.episodeNumber === currentEpisode - 1) {
                        previousEpisode = epi.id
                    }
                })
                // Proximo
                e.data.episodes.forEach((epi) => {
                    if (epi.episodeNumber === currentEpisode + 1) {
                        nextEpisode = epi.id
                    }
                })

                resolve({previousEpisode, nextEpisode})
            })
    })
}

export default getEpisodeNumber
import axios from 'axios';


async function getEpisodeNumber(id, setPreviousEpisode, setNextEpisode) {
    axios.get('https://api-frontend-test.brlogic.com/podcast/details.json')
        .then((e) => {
            let currentEpisode
            let nextEpisode
            let previousEpisode

            e.data.episodes.forEach((epi) => {
                if (epi.id == id) {
                    currentEpisode = epi.episodeNumber
                }
            })

            // Anterior
            e.data.episodes.forEach((epi) => {
                if (epi.episodeNumber == currentEpisode - 1) {
                    previousEpisode = epi.id
                }
            })
            // Proximo
            e.data.episodes.forEach((epi) => {
                if (epi.episodeNumber == currentEpisode + 1) {
                    nextEpisode = epi.id
                }
            })

            setPreviousEpisode(previousEpisode)
            setNextEpisode(nextEpisode)

        })
}

export default getEpisodeNumber
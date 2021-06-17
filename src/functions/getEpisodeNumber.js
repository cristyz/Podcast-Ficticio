import axios from 'axios';


async function getEpisodeNumber(id, setAntEpi, setProxEpi) {
    axios.get('https://api-frontend-test.brlogic.com/podcast/details.json')
        .then((e) => {
            let epiAtual
            let proxEpi
            let antEpi

            e.data.episodes.forEach((epi) => {
                if (epi.id == id) {
                    epiAtual = epi.episodeNumber
                }
            })

            // Anterior
            e.data.episodes.forEach((epi) => {
                if (epi.episodeNumber == epiAtual - 1) {
                    antEpi = epi.id
                }
            })
            // Proximo
            e.data.episodes.forEach((epi) => {
                if (epi.episodeNumber == epiAtual + 1) {
                    proxEpi = epi.id
                }
            })

            setAntEpi(antEpi)
            setProxEpi(proxEpi)

        })
}

export default getEpisodeNumber
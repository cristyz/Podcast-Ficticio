export function storeEpisode(episode) {
    return {
        type: 'EPISODELOADED',
        payload: episode
    }
}
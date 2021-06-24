import {createStore, combineReducers} from 'redux'

import storeEpisode from './storeEpisode/storeEpisode.reducer'

const rootReducer = combineReducers({
    episodesLoaded: storeEpisode
})

const store = createStore(rootReducer)

export default store
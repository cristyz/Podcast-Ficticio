// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [{id: 0}], action) => {
    switch (action.type) {
        case 'EPISODELOADED':
            return state = [...state, action.payload]
    
        default:
            return state;
    }
}
import axios from 'axios';


class getPodCasts {

    // Get Post
     static getDetails() {
            axios.get('https://api-frontend-test.brlogic.com/podcast/details.json')
              .then(e => {
                return e.data
              })
              .catch(err => {
                console.log(err);
              })        
    }
}

export default getPodCasts
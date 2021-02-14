const RESULTS_COUNT = 50;
const API_URL = `https://randomuser.me/api/?results=${RESULTS_COUNT}`;

export default function service() {
    return fetch(API_URL)
        .then(res => res.json())
        .then(response => {
            const { results } = response;
            const users = results.map(user => {
                const { thumbnail, large } = user.picture
                const { title, first, last } = user.name
                const { city, country } = user.location
                const { email } = user
                const { username } = user.login
                return { thumbnail, large, title, first, last, city, country, email, username }
            })
            return users;
        })
}
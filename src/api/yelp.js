import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer jatzRh11KTXovfWt300BOjD7sxappUKQYi1ZA92eRuhWydZFqQW6e0nNuZDRVolbEdMfFQMpELIs61VV9EWVvsJOh0lDIlWk74UaApssFgevramxYxCCNqwN257pXnYx'
    }
});

const clientId = 'X-yXZc2rCZhZxJkSp8JQ3w';
const secret = 'jUlbYV7KxnMiqGKPAuACy6V3wg3pFkhueSvZ4Sy9qbPANHOxygaUhHacCR6vsMsZ';
const accessToken = '';

const Yelp = {
  getAccessToken() {
    if (accessToken) {
      return new Promise(resolve => {
        resolve(accessToken));
      });
    }
    return fetch(`https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id= + ${clientId} + &client_secret= + ${secret}`, {
      method: 'POST',
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      accessToken === jsonResponse.access_token;
    });
  }
}

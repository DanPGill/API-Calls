import request from 'superagent'

export const spotifyApiCall = () => {
  request.get('https://api.spotify.com/v1/artists/1aSxMhuvixZ8h9dK9jIDwL').end((res, err) => {
    console.log(res)
    console.log(err)
  })
}


export const fetchNewsArticles = () => {
  return fetch(`https://whats-new-api.herokuapp.com/api/v1/news`)
  .then(response => {
    if (!response.ok) {
      throw Error('Oh NOOOO')
    }
    return response.json()
  })
}

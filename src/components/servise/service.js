// export default class Service {
//   async getRes(url, page) {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/search/movie?api_key=ebfde52ea649f852ab8ef2c3835d90a0&page=${page}&query=${url}`
//     )

//     if (!res.ok) {
//       throw new Error(`Not fetch ${url}`, `, received ${res.status}`)
//     }
//     return await res.json()
//   }

//   async getAccess(url, page) {
//     const apiBase = 'https://api.themoviedb.org/3'
//     const apiKey = 'ebfde52ea649f852ab8ef2c3835d90a0'
//     if (!localStorage.getItem('token')) {
//       const searchToken = await fetch(`${apiBase}/authentication/token/new?api_key=${apiKey}`, {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//         },
//       })
//       if (!searchToken.ok) {
//         throw new Error(`Not fetch, received ${searchToken.status}`)
//       }
//       const neToken = await searchToken.json()
//       const newToken = neToken.request_token

//       localStorage.setItem('token', JSON.stringify(newToken))
//       window.location.href = `https://www.themoviedb.org/authenticate/${newToken}?redirect_to=http://localhost:3000`
//     }
//     setTimeout(() => {
//       localStorage.clear()
//     }, 3600000)
//     return this.getRes(url, page)
//   }
//   async getMovie(keyword, page) {
//     const resGuest = await this.getAccess(keyword, page)
//     return resGuest.results.map(this._transformData)
//   }
//   _transformData(data) {
//     //console.log(data)
//     const posterPath = data.poster_path
//       ? `https://image.tmdb.org/t/p/original${data.poster_path}`
//       : 'https://avatars.mds.yandex.net/i?id=2423d9e9297944364aecc34085962b0438a7e7c3-7761179-images-thumbs&n=13'
//     return {
//       poster: posterPath,
//       id: data.id,
//       title: data.original_title,
//       release: data.release_date,
//       overview: data.overview,
//       average: data.vote_average,
//       stars: data.stars,
//     }
//   }
// }

export default class Service {
  async getMovie(keyword, page) {
    const resGuest = await this.getAccess(keyword, page)
    const proverka = await Promise.all(resGuest.results.map(this._transformData))
    //console.log(proverka)
    return proverka
  }

  async getAccess(url, page) {
    const apiBase = 'https://api.themoviedb.org/3'
    const apiKey = 'ebfde52ea649f852ab8ef2c3835d90a0'
    if (!localStorage.getItem('token')) {
      const searchToken = await fetch(`${apiBase}/authentication/token/new?api_key=${apiKey}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      })
      if (!searchToken.ok) {
        throw new Error(`Not fetch, received ${searchToken.status}`)
      }
      const neToken = await searchToken.json()
      const newToken = neToken.request_token

      localStorage.setItem('token', JSON.stringify(newToken))
      window.location.href = `https://www.themoviedb.org/authenticate/${newToken}?redirect_to=http://localhost:3000`
    }
    setTimeout(() => {
      localStorage.clear()
    }, 3600000)
    return this.getlistGenre(url, page)
  }

  async getlistGenre(url, page) {
    const parseGenres = localStorage.getItem('genres')

    if (!parseGenres) {
      const listGenre = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=ebfde52ea649f852ab8ef2c3835d90a0',
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmZkZTUyZWE2NDlmODUyYWI4ZWYyYzM4MzVkOTBhMCIsIm5iZiI6MTczMDgyOTE4Ni4yMDg2NTI3LCJzdWIiOiI2NzAwNTkyYjE1OTJlZjFiYTk4NTJkMDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.w2c8h4sh-1BqCcsBpjFn214KC9LPJAIO3tHlV5vV71g',
          },
        }
      )

      if (!listGenre.ok) {
        throw new Error('Not fetch listGenre genre', `, received ${listGenre.status}`)
      }
      const formattedListGenre = await listGenre.json()
      localStorage.setItem('genres', JSON.stringify(formattedListGenre.genres))
    }
    return this.getRes(url, page)
  }

  async getRes(url, page) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ebfde52ea649f852ab8ef2c3835d90a0&page=${page}&query=${url}`
    )

    if (!res.ok) {
      throw new Error(`Not fetch ${url}`, `, received ${res.status}`)
    }

    return await res.json()
  }

  _transformData = async (data) => {
    const posterPath = data.poster_path
      ? `https://image.tmdb.org/t/p/original${data.poster_path}`
      : 'https://avatars.mds.yandex.net/i?id=2423d9e9297944364aecc34085962b0438a7e7c3-7761179-images-thumbs&n=13'
    const genreArrPromises = await data.genre_ids.map((id) => this.getGenre(id))
    //console.log(genreArrPromises)
    const genreArr = await Promise.all(genreArrPromises)
    //console.log(genreArr)
    // const genreArr = await promises
    //console.log(genreArr)
    return {
      poster: posterPath,
      id: data.id,
      title: data.original_title,
      release: data.release_date,
      overview: data.overview,
      average: data.vote_average,
      stars: data.stars,
      genreArr: genreArr,
    }
  }

  getGenre(idFilm) {
    const genre = JSON.parse(localStorage.getItem('genres')).find((el) => el.id === idFilm).name // имя жанра
    //console.log(genre)
    return genre
  }
}

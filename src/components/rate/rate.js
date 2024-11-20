// //yfxfkj bpvtytybq

// import React, { Component } from 'react'

// import MovieComponent from '../movie-component'
// import Service from '../servise'
// // import Spinner from '../spinner'
// // import Allert from '../allert'
// // import Ofline from '../offline'
// // import Content from '../content'
// // import DataEmpty from '../data-empty'
// import FindPlease from '../find-please'
// import '../app/App.css'
// // import Paginatione from '../paginatione'

// export default class Rate extends Component {
//   service = new Service()

//   state = {
//     filteredData: [],
//     // value: '',
//     // page: '1',
//     // error: false,
//   }

//   filteredInState = () => {
//     this.setState({ filteredData: this.props.filteredData, value: this.props.value })
//   }

//   // componentDidMount() {
//   //   this.renderMovie(this.state.value, this.state.page)
//   // }

//   // componentDidUpdate(prevProps, prevState) {
//   //   if (prevProps.filtereddData !== this.props.filtereddData || prevState.page !== this.state.page) {
//   //     this.renderMovie(this.state.value, this.state.page)
//   //   }
//   // }

//   // onError = () => {
//   //   this.setState({ error: true })
//   // }

//   sendRenderPage = (page) => {
//     this.setState({ page: page })
//   }

//   // renderMovie = (value, page) => {
//   //   this.service
//   //     .getMovie(value, page)
//   //     .then((movies) => {
//   //       this.setState({ filteredData: movies, value: value, page: page })
//   //     })
//   //     .catch(this.onError)
//   // }

//   // listenerOnline() {
//   //   window.addEventListener('offline', (e) => {
//   //     this.setState({ line: false, loading: false, error: false })
//   //   })
//   //   window.addEventListener('online', (e) => {
//   //     this.setState({ line: true })
//   //   })
//   // }

//   render() {
//     const elements = this.state.filtereddData.map((item) => {
//       return <MovieComponent key={item.id} {...item} />
//     })
//     // const { error } = this.state
//     // const errorChange = error ? null : elements

//     const content = this.state.filtereddData ? (
//       <div className="app">
//         <div id="rated" className="movieComponents">
//           {elements}
//         </div>
//         {/* <Paginatione sendRenderPage={this.sendRenderPage} /> */}
//       </div>
//     ) : (
//       <FindPlease />
//     )

//     return { content }
//   }
// }

import React, { Component } from 'react'

import MovieComponent from '../movie-component'
import Service from '../servise'
import FindPlease from '../find-please'

import '../app/App.css'

export default class Rate extends Component {
  service = new Service()

  state = {
    movies: [],
    dataEmpty: false,
  }
  re = () => {
    const movies = JSON.parse(localStorage.getItem('dataStarsArray')) || []
    // const movies = dataLocalStorageArr.map((voite) => this.service.getRated(voite)))
    if (movies.length !== 0) {
      console.log(movies, this.state.dataEmpty)
      this.setState({ movies: movies, dataEmpty: false })
    } else {
      this.setState({ dataEmpty: true })
    }
  }
  // componentDidUpdate(prevState) {
  //   if (prevState.movies !== this.state.movies) {
  //     const dataLocalStorageObj = JSON.parse(localStorage.getItem('dataStarsObject')) || []
  //     const movies = Promise.all(Object.keys(dataLocalStorageObj).map((voite) => this.service.getRated(voite)))
  //     this.setState({ movies })
  //   }
  // }
  componentDidMount() {
    this.re()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.movies !== this.state.movies && prevState.dataEmpty !== this.state.dataEmpty) {
      this.re()
    }
  }
  render() {
    const filter = this.state.movies.filter((movie) => movie.stars !== 0)
    const elements = filter.map((item, index) => {
      return <MovieComponent peredPeremSort={this.props.peredPeremSort} key={index} {...item} />
    })

    const rated = (
      <div id="rated" className="app">
        <div id="rated" className="movieComponents">
          {elements}
        </div>
      </div>
    )
    const content = this.state.dataEmpty ? <FindPlease /> : rated
    return content
  }
}

// filteredInState = () => {
//   this.setState({ filteredData: this.props.filteredData })
// }
// sendRenderPage = (page) => {
//   this.setState({ page: page })
// }
// getLocalStorage = () => {
//   const dataLocalStorageObj = JSON.parse(localStorage.getItem('dataStarsObject')) || []
//   const dataKeyArr = Object.keys(dataLocalStorageObj).map((voite) => {
//     this.service.getRated(voite)
//   })
// renderRated = (rated) => {
//
//   this.service.getRated(rated).then(this.onMovieListLoaded).catch(this.onError)
// }

// [...dataLocalStorageObj].map(() => {})
// }

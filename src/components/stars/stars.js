// import React, { Component } from 'react'
// import { Rate } from 'antd'

// export default class Stars extends Component {
//   state = {
//     stars: null,
//   }
//   all = (stars) => {
//     // const id = this.props.id

//     // if (!localStorage.getItem('dataStarsArray')) {
//     //   const dataStarsObject = {}
//     //   dataStarsObject[id] = stars
//     //   localStorage.setItem('dataStarsObject', JSON.stringify(dataStarsObject))
//     // } else {
//     //   const dataStarsObject = JSON.parse(localStorage.getItem('dataStarsObject'))

//     //   dataStarsObject[id] = stars
//     //   localStorage.setItem('dataStarsObject', JSON.stringify(dataStarsObject))
//     // }
//     console.log(this.props.id)
//     this.props.peredPeremSort(this.props.id, stars)
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.stars !== this.state.stars) {
//       this.all(this.state.stars)
//     }
//   }
//   all2 = (stars) => {
//     this.setState({ stars: stars })
//   }

//   render() {
//     const value = localStorage.getItem('dataStarsArray')
//       ? JSON.parse(localStorage.getItem('dataStarsArray')).find((el) => el.id === this.props.id).stars
//       : null
//     return (
//       <div className="stars">
//         <Rate style={{ fontSize: 20 }} allowHalf onChange={this.all} count={10} defaultValue={value} />
//       </div>
//     )
//   }
// }

// all = (stars) => {
//
//     const dataStars = {}
//     dataStars.{this.props.id} = stars
//     dataStars.append(this.props.id)

//     localStorage.setItem('dataStars', dataStars)
//   } else {
//     const dataStars = JSON.parse(localStorage.getItem('dataStars'))
//     dataStars.dataStars(this.props.id)
//     localStorage.setItem(`dataStars.${this.props.id}`, stars)
//   }
// }

// all = (stars) => {
//   if (!localStorage.getItem('dataStars')) {
//     const dataStars = []
//     dataStars.append(this.props.id)

//     localStorage.setItem('dataStars', dataStars)
//   } else {
//     const dataStars = JSON.parse(localStorage.getItem('dataStars'))
//     dataStars.dataStars(this.props.id)
//     localStorage.setItem(`dataStars.${this.props.id}`, stars)
//   }
// }
import React, { Component } from 'react'
import { Rate } from 'antd'

export default class Stars extends Component {
  all = (stars) => {
    this.props.peredPeremSort(this.props.id, stars)
  }
  // const id = this.props.id
  // if (!localStorage.getItem('dataStarsArray')) {
  //   const dataStarsObject = {}
  //   dataStarsObject[id] = stars
  //   localStorage.setItem('dataStarsObject', JSON.stringify(dataStarsObject))
  // } else {
  //   const dataStarsObject = JSON.parse(localStorage.getItem('dataStarsObject'))
  //   dataStarsObject[id] = stars
  //   localStorage.setItem('dataStarsObject', JSON.stringify(dataStarsObject))
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.stars !== this.state.stars) {
  //     all()
  //   }
  // }
  render() {
    const value = localStorage.getItem('dataStarsArray')
      ? JSON.parse(localStorage.getItem('dataStarsArray')).find((el) => el.id === this.props.id)?.stars
      : null
    return (
      <div className="stars">
        <Rate style={{ fontSize: 20 }} allowHalf onChange={this.all} count={10} defaultValue={value} />
      </div>
    )
  }
}

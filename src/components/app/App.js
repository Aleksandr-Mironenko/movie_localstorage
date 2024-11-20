import React, { Component } from 'react'

import Navigation from '../navigation'
import Search from '../search'
import Rate from '../rate'

export default class App extends Component {
  state = {
    search: true,
    rate: false,
    peredId: null,
    peredStars: null,
  }

  peredPeremSort = (peredId, peredStars) => {
    console.log(peredId, peredStars)
    this.setState({ peredId: peredId, peredStars: peredStars })
  }

  onChangeNavigator = (value) => {
    value === 'Search' ? this.setState({ search: true, rate: false }) : this.setState({ search: false, rate: true })
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.rate !== this.state.rate ||
      prevState.search !== this.state.search ||
      prevState.peredId !== this.state.peredId ||
      prevState.peredStars !== this.state.peredStars
    ) {
      this.forceUpdate()
      // this.peredPeremSort(this.state.peredId, this.state.peredStars)
    }
  }

  render() {
    const { search, rate } = this.state
    const searchRender = search ? <Search peredId={this.state.peredId} peredStars={this.state.peredStars} /> : null
    const rateRender = rate ? <Rate peredPeremSort={this.peredPeremSort} /> : null
    return (
      <React.Fragment>
        <Navigation className="navigation" onChangeNavigator={this.onChangeNavigator} />
        {searchRender}
        {rateRender}
      </React.Fragment>
    )
  }
}

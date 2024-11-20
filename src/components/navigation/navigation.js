// import React, { Component } from 'react'
// import { Anchor } from 'antd'
// const { Link } = Anchor

// export default class Navigation extends Component {
//   onChangee = (key) => {
//     return () => {
//       console.log(key)
//       this.props.onChangeNavigator(key)
//     }
//   }

//   render() {
//     const props = {
//       className: 'navigation',
//       direction: 'horizontal',
//       items: [
//         {
//           key: 'Search',
//           href: '#search',
//           title: 'Search',
//           onClick: () => this.onChangee('search'),
//         },
//         {
//           key: 'Rated',
//           href: '#rated',
//           title: 'Rated',
//           onClick: () => this.onChangee('page'),
//         },
//       ],
//     }

//     return (
//       <div style={{ padding: '20px' }}>
//         <Anchor onClick={() => this.onChangee('RATE')} {...props} />
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import { Anchor } from 'antd'
// const { Link } = Anchor

// export default class Navigation extends Component {
//   onChangee = (key) => {
//     return () => {
//       console.log(key)
//       this.props.onChangeNavigator(key)
//     }
//   }

//   render() {
//     return (
//       <Anchor className="navigation" direction="horizontal">
//         <Link href="#search" title="Search" onClick={this.onChangee('search')} />
//         <Link href="#rated" title="Rated" onClick={this.onChangee('rate')} />
//       </Anchor>
//     )
//   }
// }
import React, { Component } from 'react'
import { Anchor } from 'antd'
// const { Link } = Anchor

export default class Navigation extends Component {
  handleClick = (e, link) => {
    e.preventDefault()
    console.log(link.title)
    this.props.onChangeNavigator(link.title)
  }

  render() {
    const items = [
      { key: 'Search', href: '#search', title: 'Search' },
      { key: 'Rated', href: '#rated', title: 'Rated' },
    ]

    return (
      <div style={{ padding: '20px' }}>
        <Anchor affix={false} onClick={this.handleClick} items={items} />
      </div>
    )
  }
}

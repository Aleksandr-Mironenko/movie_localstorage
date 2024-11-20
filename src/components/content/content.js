// начало изменений
import React from 'react'

import Paginatione from '../paginatione'
import SearchEngine from '../search-engine'
// import Navigation from '../navigation'

const Content = ({ sendRenderValue, sendRenderPage, context }) => {
  return (
    <div className="app">
      {/* <Navigation className="navigation" /> */}
      <SearchEngine sendRenderValue={sendRenderValue} />
      <div className="movieComponents">{context}</div>
      <Paginatione sendRenderPage={sendRenderPage} />
    </div>
  )
}
export default Content

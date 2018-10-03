import * as React from 'react'
import styled from 'styled-components'

import Text from './atoms/Text'
import Title from './atoms/Title'
import ShareButton from './atoms/ShareButton'
import MenuButton from './atoms/MenuButton'
import Header from './atoms/Header'
import Footer from './atoms/Footer'

class App extends React.Component<{}> {
  render() {
    return (
      <div style={{ margin: '0px' }}>
        <Header text="This is Header" />
        <MenuButton text="This is MenuButton" />
      </div>
    )
  }
}

export default App

import * as React from 'react'
import styled from 'styled-components'

import Text from './atoms/Text'
import Title from './atoms/Title'
import ShareButton from './atoms/ShareButton'

class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <Title text={'This is title'} />
        <Text
          text={
            'This is text,This is textThis is textThis is textThis is textThis is textThis is textThis is textThis is textThis is textThis is textThis is text'
          }
        />
        <ShareButton text="●" />
      </div>
    )
  }
}

export default App

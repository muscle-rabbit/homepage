import * as React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
}

const ShareButton: React.SFC<Props> = (props: Props) => {
  return <CircleButton>{props.text}</CircleButton>
}

export default ShareButton

const CircleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: red;
  height: 50px;
  width: 50px;
`

import * as React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
}

const Header: React.SFC<Props> = (props: Props) => {
  return <Wrapper>{props.text}</Wrapper>
}

export default Header

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #ddd;
`

import * as React from 'react'
import styled from 'styled-components'
import MenuLog from '../../../logos/menu.svg'

type Props = {
  text: string
}

const MenuButton: React.SFC<Props> = (props: Props) => {
  return <CircleButton>{props.text}</CircleButton>
}

export default MenuButton

const CircleButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: red;
  height: 100px;
  width: 100px;
`

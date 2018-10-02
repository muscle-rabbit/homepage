import * as React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
}

const Title: React.SFC<Props> = (props: Props) => {
  return <div>{props.text}</div>
}

export default Title

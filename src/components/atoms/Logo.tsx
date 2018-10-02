import * as React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
}

const Logo: React.SFC<Props> = (props: Props) => {
  return (
    <svg>
      <use />
    </svg>
  )
}

export default Logo

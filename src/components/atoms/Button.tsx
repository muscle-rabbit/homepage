import * as React from 'react'
import styled from 'styled-components'
type Props = {
text:string
onClick: ()=>{}
}
const component: React.SFC<Props> = (props: Props) => {
return (
    <button onClick={props.onClick}>{props.text}</button>
)
}
export default component;
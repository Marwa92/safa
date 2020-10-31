import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const Nxtbutton = styled(Button)`
`

export default function NextButton() {
    return (
        <Nxtbutton variant="primary" onClick={}>
          Next  
        </Nxtbutton>
    )
}

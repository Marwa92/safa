import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const Prevbutton = styled(Button)`
`

export default function PrevButton() {
    return (
        <Prevbutton variant="primary" onClick={}>
          Back
        </Prevbutton>
    )
}

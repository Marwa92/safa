import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const Nxtbutton = styled(Button)`
width: 12em;
margin-right: 20%;
margin-top: 1.75em;
border:none;
`

export default function NextButton(props) {
    const {currentStep, setCurrentStep} = props
    const next = ()=>{   
         let step = currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        step = currentStep >= 2? 3: currentStep + 1
       setCurrentStep(step)
    }
    return (
        <Nxtbutton variant="primary" onClick={next}>
        Next
        </Nxtbutton>
    )
}

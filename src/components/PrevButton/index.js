import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const Prevbutton = styled(Button)`
width: 5em;
margin-left: 63%;
margin-top: 1.75em;
background-color: #DCDFE1;
border: none;
color: grey;
`

export default function PrevButton(props) {
    const {currentStep, setCurrentStep} = props
    const prev = ()=>{   
         let step = currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        step = currentStep <= 1? 1: currentStep - 1
       setCurrentStep(step)
    }
    return (
        <Prevbutton onClick={prev}>
          Back
        </Prevbutton>
    )
}

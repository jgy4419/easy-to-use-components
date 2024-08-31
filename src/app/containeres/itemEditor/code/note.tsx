import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styled from "styled-components";

export default function AccordionExpandIcon({ note = "noe" }: { note: string }) {
    const [state, setState] = useState(false);

    return (
        <Container state={state}>
            <Accordion onClick={() => setState(prev => !prev)} sx={{backgroundColor: "rgb(15,18,20)", color: "#fff", width: "500px"}}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon sx={{color: "#fff"}} />}
                >
                    <Typography>Note</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {note}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}


const Container = styled.div<{state: boolean}>`
    position: absolute;
    bottom:  ${props => props.state ? '-115px' : '-50px'};
`;
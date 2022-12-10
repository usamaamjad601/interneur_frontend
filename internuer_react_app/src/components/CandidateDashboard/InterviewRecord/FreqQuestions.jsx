import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FreqQuestions = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>

            <div >
                <div className='d-flex mb-2 justify-content-center'>
                    <h4 className='fw-bolder'>Frequently asked questions  </h4>
                </div>
                <div>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >

                            <Typography sx={{ color: '#1F8EE4', fontWeight: 'bold' }}> What happens when I switch interview screen?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The recorder will stop after 2 minutes unless you close the browser window. However, we suggest you to be prepared for the interview as you will have 15 seconds to think and structure your answer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ color: '#1F8EE4', fontWeight: 'bold' }}> What happens when I switch interview screen?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The recorder will stop after 2 minutes unless you close the browser window. However, we suggest you to be prepared for the interview as you will have 15 seconds to think and structure your answer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ color: '#1F8EE4', fontWeight: 'bold' }}> What happens when I switch interview screen?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The recorder will stop after 2 minutes unless you close the browser window. However, we suggest you to be prepared for the interview as you will have 15 seconds to think and structure your answer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ color: '#1F8EE4', fontWeight: 'bold' }}> What happens when I switch interview screen?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The recorder will stop after 2 minutes unless you close the browser window. However, we suggest you to be prepared for the interview as you will have 15 seconds to think and structure your answer.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FreqQuestions
import * as React from 'react';
import accord from '../../css/App.module.css'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkIcon from '@mui/icons-material/Link';




export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={accord.accordian}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ padding: '0rem' }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '66%', flexShrink: 0, padding: '0px', margin: '0' }}>
                        Portfolio
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '5px 15px' }}>
                    <div className='d-flex gap-3'>
                        <LinkIcon />
                        <a href="#profile" target='_blank'>www.google.com</a>
                    </div>
                    <div className='d-flex gap-3'>
                        <LinkIcon />
                        <a href="#profile" target='_blank'>www.google.com</a>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '66%', flexShrink: 0 }}>Experience</Typography>

                </AccordionSummary>
                <AccordionDetails sx={{ padding: '5px 15px' }}>
                    <Typography>
                        <strong>Quid-e-Azam University, Islamabad</strong>
                        <p>BS-Software Engineering</p>
                        <p>(2018-2020)</p>
                    </Typography>
                    <Typography className='mt-3'>
                        <strong>Quid-e-Azam University, Islamabad</strong>
                        <p>MS-Software Engineering</p>
                        <p>(2020-2022)</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ margin: 0 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '66%', flexShrink: 0 }}>
                        Education
                    </Typography>

                </AccordionSummary>
                <AccordionDetails sx={{ padding: '5px 15px' }}>
                    <Typography>
                        <strong>Quid-e-Azam University, Islamabad</strong>
                        <p>BS-Software Engineering</p>
                        <p>(2018-2020)</p>
                    </Typography>
                    <Typography className='mt-3'>
                        <strong>Quid-e-Azam University, Islamabad</strong>
                        <p>MS-Software Engineering</p>
                        <p>(2020-2022)</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '66%', flexShrink: 0 }}>Skills</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '5px 15px' }}>
                    <div className="col-md-12 d-flex">
                        <div className="col-md-6">
                            <ul>
                                <li>Web Developement</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>React</li>
                                <li>Node</li>
                                <li>Express</li>

                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>Material UI</li>
                                <li>JavaScript</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                    </div>



                </AccordionDetails>
            </Accordion>

            {/* <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header p-0" id="flush-headingOne">
                        <button class="accordion-button collapsed py-1 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-1">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

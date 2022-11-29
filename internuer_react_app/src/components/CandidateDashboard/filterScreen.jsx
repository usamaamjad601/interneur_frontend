import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import mBody from '../../css/candDash.module.css';
import { Autocomplete, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function filterScreen() {
    const catag1 = [
        { label: 'Afghanistan' },
        { label: 'Albania' },
        { label: 'Algeria' },
        { label: 'Andorra' },
        { label: 'Angola' },
        { label: 'Antigua and Barbuda' },
        { label: 'Argentina' },
        { label: 'Armenia' },
        { label: 'Australia' },
        { label: 'Austria' },
        { label: 'Azerbaijan' },
        { label: 'Bahamas' },
        { label: 'Bahrain' },
        { label: 'Bangladesh' },
        { label: 'Barbados' },
        { label: 'Belarus' },
        { label: 'Belgium' },
        { label: 'Belize' },
        { label: 'Benin' },
    ];

    const catag = [
        { label: 'Web' },
        { label: 'Mobile' },
        { label: 'Desktop' },
        { label: 'Machine Learning' },
        { label: 'Data Science' },
        { label: 'Cloud Computing' },
        { label: 'Cyber Security' },
        { label: 'Artificial Intelligence' },
        { label: 'Internet of Things' },
        { label: 'Blockchain' },
        { label: 'Robotics' },
        { label: 'Augmented Reality' },
        { label: 'Virtual Reality' },
        { label: 'Game Development' },
        { label: 'Embedded Systems' },
        { label: 'UI/UX' },
        { label: 'Digital Marketing' },
        { label: 'Graphic Design' },
        { label: 'Video Editing' },
        { label: 'Content Writing' },
        { label: 'Photography' },
        { label: 'Animation' },
        { label: '3D Modelling' },
        { label: '3D Printing' },
        { label: '3D Animation' },
        { label: '3D Rendering' },
        { label: '3D Sculpting' },
        { label: '3D Texturing' },
        { label: '3D VFX' },
        { label: '3D VR' },
    ];

    const salMinimum = [
        { label: '5000' },
        { label: '10000' },
        { label: '15000' },
        { label: '30000' },
        { label: '50000' },
    ];

    const salMaximum = [
        { label: '75000' },
        { label: '100000' },
        { label: '150000' },
        { label: '300000' },
        { label: '500000' },
    ];
    const icon = <SearchIcon sx={{ color: '#4B4B4B' }} />

    return (
        <div className={`${mBody.filScreenMainBody} mx-3 pb-5`} >
            <div className='d-flex align-items-center justify-content-center mx-2'>
                <p><FilterAltIcon /> Filters</p>
            </div>
            <div className="pt-4 px-4 pb-3" style={{ borderBottom: '1px solid' }}>
                <TextField
                    fullWidth
                    InputProps={{
                        endAdornment: icon
                    }}
                    placeholder="Search here"
                />
            </div>
            <div className="d-flex justify-content-between p-3">
                <p><strong>By Location</strong></p>
                <p style={{ color: '#208EE3' }}>clear</p>
            </div>
            <div className="px-4">
                <Autocomplete
                    disablePortal
                    id="combo-box-"
                    options={catag1}
                    renderInput={(params1) => <TextField {...params1} placeholder="Type and select" />}
                />
            </div>
            <div className="p-3">
                <p><strong>By Category</strong></p>
            </div>
            <div className="px-4">
                <Autocomplete
                    disablePortal
                    id="combo-box-"
                    options={catag}
                    renderInput={(params1) => <TextField {...params1} placeholder="Type and select" />}
                />
            </div>
            <div className="p-3">
                <p><strong>By Category</strong></p>
            </div>
            <div className="d-flex align-items-center px-4">
                <Autocomplete
                    disablePortal
                    fullWidth
                    id="combo-box-"
                    options={salMinimum}
                    renderInput={(params1) => <TextField {...params1} placeholder="Minimum" />}
                />
                <p> - </p>
                <Autocomplete
                    disablePortal
                    fullWidth
                    id="combo-box-"
                    options={salMaximum}
                    renderInput={(params1) => <TextField {...params1} placeholder="Maximum" />}
                />
            </div>
        </div>
    )
}

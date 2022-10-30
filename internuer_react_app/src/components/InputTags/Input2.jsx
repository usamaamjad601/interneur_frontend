import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';





const Input2 = () => {


    // const [chipData, setChipData] = React.useState([
    //     { key: 0, label: 'Angular' },
    //     { key: 1, label: 'jQuery' },
    //     { key: 2, label: 'Polymer' },
    //     { key: 4, label: 'Vue.js' },
    // ]);

    // const handleDelete = (chipToDelete) => () => {
    //     setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    // };

    const PushData = (e) => {
        // const values = document.getElementById("wage");
        // var joined = chipData.concat({ key: (chipData.length + 1), label: values.value });

        // chipData.push();
        // setChipData({ key: chipData.length, label: values.value })
        // setChipData({ chipData: joined });


        // console.log(e.target.value)
        // console.log(joined, 'chipData');


    }

    const [names, setNames] = React.useState(['Alice', 'Bob']);

    const handleClick = () => {
        // 👇️ push to end of state array
        // ducome
        setNames(current => [...current, 'Carl']);

        // 👇️ spread an array into the state array
        // setNames(current => [...current, ...['Carl', 'Delilah']]);

        // 👇️ push to beginning of state array
        // setNames(current => ['Zoey', ...current]);
    };
    return (
        <div>
            {/* <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0.5,
                    m: 0,
                }}
                component="ul"
            >
                {chipData.map((data) => {
                    return (
                        <ListItem key={data.key}>
                            <Chip
                                label={data.label}
                                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                            />
                        </ListItem>
                    );
                })}
            </Paper>
            <input type="text" id='wage' />
            <button onClick={PushData}>Validate</button> */}

            <div>
                <div>
                    <input type="text" id='input1' />
                    <button onClick={handleClick}>Push to state array</button>
                </div>

                {names.map((element, index) => {
                    return (
                        <div key={index}>

                            <h2>{element}</h2>
                        </div>
                    );
                })}
            </div>
        </div>

    )
}

export default Input2
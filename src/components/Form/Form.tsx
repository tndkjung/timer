"use client"

import { ReactElement } from 'react';
import { TextField, Button } from '@mui/material'

export function Form(): ReactElement {
    return(
        <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Start</Button>
        </div>
    )
}
"use client"

import { ReactElement } from 'react';
import { Typography } from '@mui/material';

interface TitleInterface {
    label?: string
}
export function Title({ label = 'Timer Title' }: TitleInterface): ReactElement {
    return(
        <Typography 
            sx={{ 
                textAlign: 'center',
                fontWeight: 'bold', 
                fontSize: 20
            }}
        >
        { label }
        </Typography>)
}
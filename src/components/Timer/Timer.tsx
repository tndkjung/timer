"use client"

import { ReactElement } from 'react';
import { TimerModel } from '../../libs/data'
import { Title } from '../Title'
import { Typography, Chip, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'


export function Timer(props: TimerModel): ReactElement {
    return(
        <div>
            <Title label={ props.label }/>
            <Typography sx={{ fontSize: 16 }}>{ props.remainingSeconds } seconds</Typography>
            <Chip 
                label={props.isRunning ? 'Running' : 'Completed'}
                sx={{
                    color: 'white',
                    bgcolor: props.isRunning ? '#733B73' : '#DAB1DA'
                }}
            />
            <IconButton aria-label='delete'>
                <Delete />
            </IconButton>
        </div>
    )
}
"use client"


import { ReactElement, useState, useEffect } from 'react';
import { TimerModel } from '../../libs/data'
import { Title } from '../Title'
import { Typography, Chip, IconButton, Box } from '@mui/material'
import { Delete } from '@mui/icons-material'




export function Timer(props: TimerModel & {onDelete: (id: string) => void}): ReactElement {
    return(
        <div>
            <Title label={ props.label }/>
            {(props.remainingSeconds > 0) ? 
            <Typography sx={{ fontSize: 16 }}>{ props.remainingSeconds } seconds</Typography> : 
            <Box
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center'
                }}
            >
                <img src="https://cataas.com/cat/gif" style={{ width: 300, objectFit: 'contain' }}/>
            </Box>}
            <Chip
                label={props.isRunning ? 'Running' : 'Completed'}
                sx={{
                    color: 'white',
                    bgcolor: props.isRunning ? '#733B73' : '#DAB1DA'
                }}
            />
            <IconButton aria-label='delete' onClick={() => props.onDelete(props.id)}>
                <Delete/>
            </IconButton>
        </div>
    )
}

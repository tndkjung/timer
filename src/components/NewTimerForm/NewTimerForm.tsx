"use client"

import { Box, Button, TextField, Typography } from '@mui/material'
import {  useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function NewTimerForm({ setTimer }) {
    
    const [label, setLabel] = useState('')
    const [hourCount, setHourCount] = useState(0)
    const [minCount, setMinCount] = useState(0)
    const [secCount, setSecCount] = useState(0)

    function updateLabel(event: React.ChangeEvent<HTMLInputElement>) {
        setLabel(event.target.value)
    }

    function incrementHourCount() {
        setHourCount((prevHourCount) => prevHourCount + 1)
    }
    function decrementHourCount() {
        if (hourCount > 0) {
            setHourCount((prevHourCount) => prevHourCount - 1)
        }
    }
    
    function incrementMinCount() {
        if (minCount < 59) {
            setMinCount((prevMinCount) => prevMinCount + 1)
        }
    }
    function decrementMinCount() {
        if (minCount > 0) {
            setMinCount((prevMinCount) => prevMinCount - 1)
        }
    }
    
    function incrementSecCount() {
        if (secCount < 59) {
            setSecCount((prevSecCount) => prevSecCount + 1)
        }
    }
    function decrementSecCount() {
        if (secCount > 0) {
            setSecCount((prevSecCount) => prevSecCount - 1)
        }    
    }

    const durationSeconds = (hourCount * 3600) + (minCount * 60) + secCount

    function addTimer() {
        const newTimer = {
            id: uuidv4(),
            label: label,
            durationSeconds: durationSeconds,
            remainingSeconds: durationSeconds,
            isRunning: true
        }
        setTimer(prevTimer => [...prevTimer, newTimer])
        setLabel('')
        setHourCount(0)
        setMinCount(0)
        setSecCount(0)
    }

    return(
        <Box
            sx={{
                border: '1px solid gray',
                borderRadius: 5,
                p: 2,
                my: 2
            }}
        >
            <Typography
                sx={{
                    my: 0.5,
                    textAlign: 'center',
                    fontSize: 20
                }}
            >
                New Timer
            </Typography>
            <TextField label="Label" value={label} onChange={updateLabel}></TextField>
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                }}
            >
                <Box data-testid='hourSection'
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        gap: 1,
                        my: 2
                    }}
                >
                    <Button variant="outlined" size="small" onClick={incrementHourCount}>+</Button>
                    <Typography> {hourCount} hour(s) </Typography>
                    <Button variant="outlined" size="small" onClick={decrementHourCount}>-</Button>
                </Box>
                <Box data-testid='minuteSection'
                    sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            gap: 1,
                            my: 2
                        }}
                >
                    <Button variant="outlined" size="small" onClick={incrementMinCount}>+</Button>
                    <Typography> {minCount} minute(s) </Typography>
                    <Button variant="outlined" size="small" onClick={decrementMinCount}>-</Button>
                </Box>
                <Box data-testid='secondSection'
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        gap: 1,
                        my: 2
                    }}
                >
                    <Button variant="outlined" size="small" onClick={incrementSecCount}>+</Button>
                    <Typography> {secCount} second(s) </Typography>
                    <Button variant="outlined" size="small" onClick={decrementSecCount}>-</Button>
                </Box>
            </Box>
            <div>
                <Button variant="contained" onClick={addTimer}>Start Timer</Button>
            </div>
        </Box>
    )
}
"use client"


import { ReactElement, useState, useEffect } from 'react';
import { timers } from '../../libs/data';
import { Timer } from '../Timer';
import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material';
import { NewTimerForm } from '../NewTimerForm'


export function Main(): ReactElement {
    console.log('mounting Main component')
    const [timer, setTimer] = useState(timers)

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
            const tick = () => {
            setTimer(prevTimer =>
                prevTimer.map(timer => {
                if (!timer.isRunning) { // Do nothing if timer is done
                    return timer;
                }

                const nextRemaining = Math.max(0, timer.remainingSeconds - 1);
                if (nextRemaining === timer.remainingSeconds) { // Do nothing if remaining seconds is the same
                    return timer;
                }

                return {
                    ...timer,
                    remainingSeconds: nextRemaining,
                    isRunning: nextRemaining > 0,
                };
                })
            );

            timeoutId = setTimeout(tick, 1000);
            };

            timeoutId = setTimeout(tick, 1000);

            return () => {
            clearTimeout(timeoutId);
            };
    }, [])

    function handleDelete(id: string) {
        setTimer(prevTimer => prevTimer.filter(t => t.id !== id))
    }

    return(
        <div>
            {timer.map((t) =>
            <Box
                key={t.id}
                sx={{
                    border: '1px solid gray',
                    borderRadius: 5,
                    p: 2,
                    my: 2
                }}
            >
                <Timer {...t} onDelete={handleDelete}/>
            </Box>
            )}
            <NewTimerForm setTimer={setTimer}/>
        </div>
    )
}

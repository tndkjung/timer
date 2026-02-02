export interface TimerModel {
    id: string
    label: string
    durationSeconds: number
    remainingSeconds: number
    isRunning: boolean
}

export const timers = [
    {
        id: 'timer1',
        label: 'running',
        durationSeconds: 60,
        remainingSeconds: 30,
        isRunning: true
    },
    {
        id: 'timer2',
        label: 'swimming',
        durationSeconds: 120,
        remainingSeconds: 45,
        isRunning: false
    },
    {
        id: 'timer3',
        label: 'cycling',
        durationSeconds: 45,
        remainingSeconds: 20,
        isRunning: false
    }
]
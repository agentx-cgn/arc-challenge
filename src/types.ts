
import tasksAll from './assets/tasks/training.all.json';

export const jsonTraining = tasksAll;

export type TTaskAll = typeof tasksAll;

export type TPanel = {
    input:  number[]
    output: number[]
}

export type TTask = {
    display: { zoom: boolean },
    code: string
    info: {
        gridTest: {
            input:  number[]
            output: number[]
        }
        ,
        gridTrain: {
            input:  number[][]
            output: number[][]
        },
        setsTrain: number,
        setsTest:  number,
    }
    train: {
        input: number[][];
        output: number[][];
    }[];
    test: {
        input: number[][];
        output: number[][];
    }[] // Why is this not a single panel
}

export type TTasks = Record<string, TTask>

import { Injectable } from '@angular/core';

import tasksAll from './../../../assets/tasks/training.all.json';

export type TTaskAll = typeof tasksAll;

type TTask = {
    display: { zoom: boolean },
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
    }[]
}
type TTasks = Record<string, TTask>

@Injectable({
  providedIn: 'root',
})
export class ChallengeService {

    public tasks: TTasks;

    constructor () {

        const maxTasks = 200;

        this.tasks = Object
            .entries(tasksAll as TTasks).slice(0, maxTasks)
            .reduce ( (accu, [name, task]) => {
                accu[name] = task;
                return accu;
            }, {} as TTasks)
        ;

    }

}
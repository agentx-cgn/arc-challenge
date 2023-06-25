import { Injectable } from '@angular/core';

import tasksAll from './../../../assets/tasks/training.all.json';

export type TTaskAll = typeof tasksAll;

type TTask = {
    display?: { zoom: boolean },
    info?: {
        gridTest:  [number, number],
        gridTrain: [number, number],
        setsTrain: number,
        setsTest: number,
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
            .reduce( ( accu, [ name, task] ) => {

                // if (task.test[0].input.length === 3 || task.test[0].input.length === 5) {
                    accu[name] = {
                        info: {
                            setsTrain: task.train.length,
                            setsTest:  task.test.length,
                            gridTest:  [task.test[0].input.length,  task.test[0].input[0].length],
                            gridTrain: [task.train[0].input.length, task.train[0].input[0].length],
                        },
                        display: { zoom: false },
                        train: task.train,
                        test:  task.test,
                    }
                // }

                return accu;

            }, {} as TTasks)
        ;

    }

}
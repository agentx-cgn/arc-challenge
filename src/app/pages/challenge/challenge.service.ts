import { Injectable } from '@angular/core';

// import tasksAll from './../../../assets/tasks/training.all.json';

// export type TTaskAll = typeof tasksAll;

// export type TPanel = {
//     input:  number[]
//     output: number[]
// }

// type TTask = {
//     display: { zoom: boolean },
//     info: {
//         gridTest: {
//             input:  number[]
//             output: number[]
//         }
//         ,
//         gridTrain: {
//             input:  number[][]
//             output: number[][]
//         },
//         setsTrain: number,
//         setsTest:  number,
//     }
//     train: {
//         input: number[][];
//         output: number[][];
//     }[];
//     test: {
//         input: number[][];
//         output: number[][];
//     }[]
// }
// type TTasks = Record<string, TTask>

import { TTask, TTaskAll, TTasks, TPanel, jsonTraining } from '../../../types';

@Injectable({
  providedIn: 'root',
})
export class ChallengeService {

    public tasks: TTasks;

    constructor () {

        const maxTasks = 50;

        this.tasks = Object
            .entries(jsonTraining as TTasks).slice(0, maxTasks)
            .reduce ( (accu, [name, task]) => {
                accu[name] = task;
                return accu;
            }, {} as TTasks)
        ;

    }

}

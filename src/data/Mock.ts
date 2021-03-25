import {Chore} from "./Models";

const chores: Chore[] = [
    {
        description: "clean my bedroom"
    },
    {
        description: "start my funchores project"
    },
    {
        description: "create my todo list"
    }
]

export function waitForSeconds(seconds: number): Promise<boolean> {
    return new Promise(resolve => {
        setTimeout(()=> resolve(true), seconds);
    })
}

export async function getAllChores(): Promise<Chore[]>{
    await waitForSeconds(2);
    return new Promise(resolve => {
        resolve(chores);
    })
}
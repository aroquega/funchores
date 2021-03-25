import Page from "./Page";
import {useEffect, useState} from "react";
import {getAllChores} from "../data/Mock";
import {Chore} from "../data/Models";
import ChoreList from "../components/ChoreList";


function HomePage(){
    const [chores, setChores] = useState<Chore[]>([]);

    useEffect(()=>{
        const doGetChores = async ()=>{
            const result = await getAllChores();
            setChores(result);
        }
        doGetChores();
    }, [])

    return (
        <Page>
            <div>
                Welcome to fun chores!
            </div>
            <ChoreList data={chores}/>
        </Page>
    )
}

export default HomePage;
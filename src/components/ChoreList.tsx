import {Chore} from "../data/Models";

interface Props {
    data: Chore[];
}

function ChoreList(props: Props){
    const chores = props.data;

    return (
        <div>
            List of Chores:
            <ul>
                {
                    chores.map((chore, id) => (
                        <li key={id}>{chore.description}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ChoreList;
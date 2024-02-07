import "./App.css";
import { differenceInWeeks } from "date-fns";
import { useEffect, useState } from "react";

// const projectDate = new Date("2024-01-01");
const projectDate = new Date("2024-02-07");
const rosterTable = ["luan", "peter", "zhizen", "naran"];
const offset = 3;

function App() {
    const [duty, setDuty] = useState("")

    useEffect(() => {
        const update = () => {
            let weeks = differenceInWeeks(new Date(), projectDate);
            let selection = (weeks + offset) % 4;
            console.log("current roster", rosterTable[selection]);
            setDuty(rosterTable[selection])
        }
        update()
        setInterval(update, 60000)
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <div>
                        <h4>The kitchen duty this week is</h4>
                        <h3 className="duty-header">{duty}</h3>
                        <div className="notice">
                            Please:
                            <ul>
                                <li>
                                    take out the <b>trash</b> when it is <em>full</em> and by the <em>end of the week</em>
                                </li>
                                <li>
                                    clean the <b>stovetop</b> at least <em>twice</em> per week
                                </li>
                                <li>
                                    clean the <b>kitchen couter</b> at least <em>twice</em> per week
                                </li>
                                <li>
                                    clean the <b>sink</b> at least <em>twice</em> per week
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;

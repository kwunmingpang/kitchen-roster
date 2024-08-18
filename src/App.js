import "./App.css";
import { differenceInWeeks } from "date-fns";
import { useEffect, useState } from "react";

const projectDate = new Date("2024-08-05T00:00:00.000+10:00");
const rosterTable = ["naran", "victor", "zhi zen", "peter"];
const offset = 2;

const getDuty = (extraOffset = 0) => {
    let weeks = differenceInWeeks(new Date(), projectDate, {
        roundingMethod: "floor",
    });
    let selection = (weeks + offset + extraOffset) % 4;
    return rosterTable[selection];
};

let weeks = [1, 2, 3];

function App() {
    const [duty, setDuty] = useState(getDuty());

    useEffect(() => {
        setInterval(() => {
            setDuty(getDuty());
        }, 60000);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <div>
                        <h4>The kitchen duty this week is</h4>
                        <h3 className="duty-header">{duty}</h3>

                        <div className="schedule">
                            <p>Incomming schedule in # weeks:</p>
                            <table className="schedule-table">
                                {weeks.map((week) => (
                                    <tr>
                                        <td>{week}</td>
                                        <td>{getDuty(week)}</td>
                                    </tr>
                                ))}
                            </table>
                        </div>

                        <div className="notice">
                            Please:
                            <ul>
                                <li>
                                    take out the <b>trash</b> when it is{" "}
                                    <em>full</em> and by the{" "}
                                    <em>end of the week</em>
                                </li>
                                <li>
                                    clean the <b>stovetop</b> at least{" "}
                                    <em>twice</em> per week
                                </li>
                                <li>
                                    clean the <b>kitchen couter</b> at least{" "}
                                    <em>twice</em> per week
                                </li>
                                <li>
                                    clean the <b>sink</b> at least{" "}
                                    <em>twice</em> per week
                                </li>
                            </ul>
                            <p>
                                Let's work together to keep the kitchen clean!!!{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;

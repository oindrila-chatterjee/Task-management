import React from 'react';
import './Task.css';
import axios from 'axios';
import { Link} from 'react-router-dom';

const TaskDetails = () => {
    const [Data, setData] = React.useState([]);

    React.useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/tasks");
                setData(response.data)

            } catch (error) {
                console.log(error)
            }
        }
        getDetails();

    }, [])

    return (
        <div>
            <div className="heading">
                <h3>MEMBER DASHBOARD</h3>
                
            </div>
            <center className="container">
                <table className="table">
                    <thead className="thead">
                        <tr className="tr">
                            <th>TaskId</th>&nbsp;
                            <th>TaskName</th>&nbsp;
                            <th>Description</th>&nbsp;
                            <th>TaskDate</th>&nbsp;
                            <th>TaskStatus</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="tbd">
                        {Data.map((items, id) => (
                            <tr key={id}>
                                <td>{items.taskId}</td>&nbsp;
                                <td>{items.taskName}</td>&nbsp;
                                <td>{items.taskDescription}</td>&nbsp;
                                <td>{items.dueDate}</td>&nbsp;
                                <td>{items.status}</td>
                                <td><Link to={`/View/${items.taskId}`}><button className='btn btn-primary'>VIEW</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
};

export default TaskDetails;
import React, { useEffect, useState } from 'react'
import './View.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
const ViewDetails = () => {
    const [viewDetails, setViewDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/tasks/${id}`);
                setViewDetails(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchDetails();
    }, [id]);

    return (
        <div>
            <div className="tbl">
                <center>
                    <table className="tb">
                        <thead className="tableHead">
                            <tr>
                                <th className="trow">TASK DETAILS</th>
                            </tr>
                        </thead>
                        <tbody className="tablebody">
                            <tr key={id}>
                                <td><span id="one">Task Id:</span> {viewDetails.taskId} &nbsp;</td>
                            </tr>
                            <tr>
                                <td><span id="two">Task Description:</span> {viewDetails.taskDescription} &nbsp;</td>
                            </tr>
                            <tr>
                                <td><span id="three">Assigned To:</span> {viewDetails.assignedTo} &nbsp;</td>
                            </tr>
                            <tr>
                                <td><span id="four">Task Deadline:</span> {viewDetails.dueDate} &nbsp;</td>
                            </tr>
                            <tr>
                                <td><span id="five">Task Status:</span> {viewDetails.status} &nbsp;</td>
                            </tr>
                        </tbody>
                        <br />
                        <div className="bhead">
                            <Link to={`/Edit/${viewDetails.taskId}`}><button type="button" className="btn btn-primary">EDIT</button></Link>&nbsp;&nbsp;&nbsp;
                            <Link to={"/"}><button type="button" className="btn btn-danger">CANCEL</button></Link>
                        </div>
                    </table>
                </center>
            </div>
        </div>
    )
}

export default ViewDetails;

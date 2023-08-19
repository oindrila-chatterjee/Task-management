import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Edit.css';
const EditTaskPage = () => {
  const n = useNavigate();
  const { id } = useParams()
  const [data, setData] = useState({
    taskId: "",
    taskName: "",
    status: ""
  })
  const { taskId, taskName, status } = data;

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })

  }
  useEffect(() => {
    // Fetch the task data from the backend using taskId
    const fetchTaskData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/tasks/${id}`);
        setData(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchTaskData();
  }, [id]);


  const onsubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskId || !status) {
      window.alert("enter details");
    }
    else {
      if (!id) {
        axios.post("http://localhost:8080/api/post", {
          taskName,
          taskId,
          status
        }).then(() => {
          setData({ taskId: "", taskName: "", status: "" })
        }).catch((error) => console.log(error))
        window.alert("sucess");

        setTimeout(() => { n('/') }, 50)
      }
      else {
        axios.put(`http://localhost:8080/api/EditTask/${id}`, {
          taskName,
          taskId,
          status
        }).then(() => {
          setData({ taskId: "", taskName: "", status: "" })
        }).catch((error) => console.log(error))
        window.alert("updated sucess");

        setTimeout(() => { n('/') }, 50)
      }

    }

  }


  return (
    <div className="card">
      <h2>EDIT TASK</h2>
      <form onSubmit={onsubmit}>
        <div>
          <label htmlFor="taskId">Task ID:</label>
          <input
            type="text"
            id="taskId"
            value={taskId || ""}
            onChange={change}
            required
          />
        </div>
        <div>
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            value={taskName || ""}
            onChange={change}
            required
          />
        </div>


        <div>
          <label>Status:</label>
          <div>
            <label>
              <input
                type="radio"
                name="status"
                value="To do"
                checked={status === 'To do'}
                onChange={change}
                required
              />
              To do
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="In Progress"
                checked={status === 'In Progress'}
                onChange={change}
                required
              />
              In Progress
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="Completed"
                checked={status === 'Completed'}
                onChange={change}
                required
              />
              Completed
            </label>
          </div>
        </div>
        <button type=" submit">Save</button>
      </form>
    </div>
  );
}

export default EditTaskPage;
import { useState } from "react";

const Task = ({ taskInfo, handleDelete, handleEdit }) => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [editedTask, setEditedTask] = useState(taskInfo.description);

  const handleEditClick = () => {
    setIsEditClicked(!isEditClicked);
    if (isEditClicked) {
      handleEdit(taskInfo.id, editedTask);
    }
  };

  const handleEditInput = (e) => {
    setEditedTask(e.target.value);
  };

  return (
    <div className='task-card'>
      {isEditClicked ? (
        <input onChange={handleEditInput} value={editedTask} />
      ) : (
        <div>{taskInfo.description}</div>
      )}
      <div className='card-controller'>
        <div onClick={() => handleDelete(taskInfo.id)}>X</div>
        <div onClick={handleEditClick}>{isEditClicked ? "Save" : "Edit"}</div>
      </div>
    </div>
  );
};

export default Task;
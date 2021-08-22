const Task = ({ taskInfo }) => {
    return <div>{taskInfo.description}</div>;
};

// what ever is in () example 'props' is an object passing from parent to child
// const Task = (props) => {
//     return <div>{props.taskInfo.description}</div>;
// };
export default Task;
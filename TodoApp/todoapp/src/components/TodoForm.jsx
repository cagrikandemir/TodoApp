function TodoForm() {
    return (
      <form className='TodoForm'>
        <input type="text" className='todo-input' placeholder='What is The Task Today ?'/>
        <button type="submit" className="todo-btn">Add Task</button>
      </form>
      );
}

export default TodoForm;
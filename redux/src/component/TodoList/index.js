import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../../redux/action";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { todoListSelector } from "../../redux/selector";
export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const todoList = useSelector(todoListSelector);

  console.log(todoList);

  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(
      addTodoAction({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setPriority("Medium");
    setTodoName("");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleSelectChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo key={todo.id} name={todo.name} priority={todo.priority} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select onChange={handleSelectChange} defaultValue="Medium">
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddClick} type="primary">
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}

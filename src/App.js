import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import styled from "styled-components";

const Wrapper = styled.div`
  h3 {
    text-align: center;
  }
`;

function App() {
  return (
    <Wrapper>
      <div className="container">
        <h3>ToDo</h3>
        <TodoInput />
        <TodoList />
      </div>
    </Wrapper>
  );
}

export default App;

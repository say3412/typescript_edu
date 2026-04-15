const list: Element | null = document.querySelector(".list");

interface Todos {
  todos: Todo[];
}

interface Todo {
  id: number;
  text: string | null;
  completed: boolean | undefined;
}

class TodoApp {
  todos: Todo[] = [];
  nextId: number = 1;

  // 추가
  addTodo(text: string): void {
    const todo: Todo = {
      id: this.nextId++,
      text, // 속성명과 매개변수명이 같을 때
      completed: false,
    };
    this.todos.push(todo);
  }

  // 전체 조회
  showTodo() {
    this.todos.forEach((todo: Todo) => {
      let completedVal: string = todo.completed ? "✅" : "☑️";
      const val: string = `${completedVal}  ${todo.id}  ${todo.text}`;
      const li = document.createElement("li");
      li.textContent = val;

      if (!list) {
        return;
      }
      list.appendChild(li);
    });
  }

  // id로 조회
  findTodoById(id: number) {
    const todo = this.todos.find((t: Todo) => t.id === id);

    if (!todo) return;

    let completedVal: string = todo.completed ? "✅" : "☑️";
    const val = `${completedVal}  ${todo.id}  ${todo.text}`;
    const li = document.createElement("li");
    li.textContent = val;

    if (!list) {
      return;
    }

    list.appendChild(li);
  }

  // 삭제
  removeTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  // 완료
  toggleTodo(id: number) {
    const todo: Todo = this.todos.find((t) => t.id === id);
    todo.completed = !todo.completed;
  }
}

const app = new TodoApp();
// 초기 데이터 (테스트용)
app.addTodo("공부하기");
app.addTodo("운동하기");
app.showTodo();

const textInput = document.getElementById("text");
const uidInput = document.getElementById("uid");

document.getElementById("addBtn").addEventListener("click", () => {
  const text = textInput.value;
  if (!text) return;

  app.addTodo(text);

  list.innerHTML = "";
  textInput.value = "";
  app.showTodo();
});

document.getElementById("refresh").addEventListener("click", () => {
  uidInput.value = "";
  list.innerHTML = "";
  app.showTodo();
});

document.getElementById("rmBtn").addEventListener("click", () => {
  const id = Number(uidInput.value);
  if (!id) return;

  uidInput.value = "";
  list.innerHTML = "";
  app.removeTodo(id);
  app.showTodo();
});

document.getElementById("findByIdBtn").addEventListener("click", () => {
  const id = Number(uidInput.value);
  if (!id) return;

  uidInput.value = "";
  list.innerHTML = "";
  app.findTodoById(id);
});

document.getElementById("statusBtn").addEventListener("click", () => {
  const id = Number(uidInput.value);
  if (!id) return;

  uidInput.value = "";
  list.innerHTML = "";
  app.toggleTodo(id);
  app.showTodo();
});

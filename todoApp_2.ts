interface Todos {
  todos: Todo[];
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
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

      const list: Element | null = document.querySelector(".list");
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
    const list: Element | null = document.querySelector(".list");

    if (!todo || !list) return;

    let completedVal: string = todo.completed ? "✅" : "☑️";
    const val: string = `${completedVal}  ${todo.id}  ${todo.text}`;

    const li = document.createElement("li");
    li.textContent = val;
    list.appendChild(li);
  }

  // 삭제
  removeTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  // 완료
  toggleTodo(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      return;
    }
    todo.completed = !todo.completed;
  }
}

window.onload = function () {
  const app = new TodoApp();
  // 초기 데이터 (테스트용)
  app.addTodo("공부하기");
  app.addTodo("운동하기");
  app.showTodo();

  const addBtn = document.getElementById("addBtn");
  if (!addBtn) return;
  addBtn.addEventListener("click", () => {
    const textInput = document.getElementById("text") as HTMLInputElement;
    const list: Element | null = document.querySelector(".list");

    if (!textInput || !list) {
      return;
    }

    const text: string = textInput.value;
    if (!text) return;

    app.addTodo(text);

    list.innerHTML = "";
    textInput.value = "";
    app.showTodo();
  });

  const refresh = document.getElementById("refresh");
  if (!refresh) return;
  refresh.addEventListener("click", () => {
    const uidInput = document.getElementById("uid") as HTMLInputElement;
    const list: Element | null = document.querySelector(".list");

    if (!list) return;

    uidInput.value = "";
    list.innerHTML = "";
    app.showTodo();
  });

  const rmBtn = document.getElementById("rmBtn");
  if (!rmBtn) return;
  rmBtn.addEventListener("click", () => {
    const uidInput = document.getElementById("uid") as HTMLInputElement;
    if (!uidInput) return;

    const id: number = Number(uidInput.value);
    const list: Element | null = document.querySelector(".list");

    if (!id || !list) return;

    uidInput.value = "";
    list.innerHTML = "";
    app.removeTodo(id);
    app.showTodo();
  });

  const findByIdBtn = document.getElementById("findByIdBtn");
  if (!findByIdBtn) return;
  findByIdBtn.addEventListener("click", () => {
    const uidInput = document.getElementById("uid") as HTMLInputElement;
    const id = Number(uidInput.value);
    const list: Element | null = document.querySelector(".list");
    
    if (!id || !list) return;

    uidInput.value = "";
    list.innerHTML = "";
    app.findTodoById(id);
  });

  const statusBtn = document.getElementById("statusBtn");
  if (!statusBtn) return;
  statusBtn.addEventListener("click", () => {
    const uidInput = document.getElementById("uid") as HTMLInputElement;
    const id = Number(uidInput.value);
    const list: Element | null = document.querySelector(".list");

    if (!id || !list) return;

    uidInput.value = "";
    list.innerHTML = "";
    app.toggleTodo(id);
    app.showTodo();
  });
};

// 목록 삽입, 조회, 삭제, 완료

class TodoApp {
  todos = [];
  nextId = 1;

  // 추가
  addTodo(text) {
    const todo = {
      id: this.nextId++,
      text, // 속성명과 매개변수명이 같을 때
      completed: false,
    };
    this.todos.push(todo);
  }

  // 전체 조회
  showTodo() {
    console.log(' ');
    console.log("TODO List ⏰");

    this.todos.forEach((todo) => {
      let completedVal = todo.completed ? "😄" : "😨";
      const val = `${completedVal} | ${todo.id} | ${todo.text}`;
      console.log(val);
    });
  }

  // id로 조회
  findTodoById(id) {
    const todo = (this.todos = this.todos.find((t) => t.id === id));

    if (!todo) return;

    let completedVal = todo.completed ? "😄" : "😨";
    const val = `${completedVal} | ${todo.id} | ${todo.text}`;
    console.log('-- findTodoById --');
    console.log(val);
  }

  // text로 조회
  findTodoByText(text) {
    let findedTodos = [];
    this.todos.forEach((todo) => {
      let textVal = todo.text;
      if (textVal.include(text)) { // 이 부분 수정 필요
        findedTodos.push(todo);
      }
    });

    findedTodos.forEach((todo) => {
      let completedVal = todo.completed ? "😄" : "😨";
      const val = `${completedVal} | ${todo.id} | ${todo.text}`;
      console.log(val);
    });
  }

  // 삭제 (id로 걸러서 안보여주기)
  removeTodo(id) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  // 완료
  toggleTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    todo.completed = !todo.completed;
  }
}

const app = new TodoApp();

app.addTodo("아침 밥 먹기");
app.addTodo("점심 밥 먹기");
app.addTodo("수영하기");
app.addTodo("typeScript 공부");
app.showTodo();
// app.findTodoById("먹기");
app.showTodo();
app.removeTodo(2);
app.showTodo();
app.toggleTodo(1);
app.toggleTodo(3);
app.showTodo();
app.findTodoById(4);
// app.findTodoById(-1);


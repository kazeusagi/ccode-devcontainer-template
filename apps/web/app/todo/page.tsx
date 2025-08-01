'use client';

import { useReducer } from 'react';
import { TodoForm } from '../../src/components/todo-form';
import { TodoList } from '../../src/components/todo-list';
import type { Todo, TodoAction } from '../../src/types/todo';

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now().toString(),
          text: action.payload.text,
          completed: false,
          createdAt: new Date(),
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default function TodoPage() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAddTodo = (text: string) => {
    dispatch({ type: 'ADD_TODO', payload: { text } });
  };

  const handleToggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  const handleDeleteTodo = (id: string) => {
    dispatch({ type: 'DELETE_TODO', payload: { id } });
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Todo アプリ
          </h1>

          <TodoForm onAddTodo={handleAddTodo} />

          {totalCount > 0 && (
            <div className="mb-4 text-sm text-gray-600">
              完了: {completedCount} / {totalCount}
            </div>
          )}

          <TodoList
            todos={todos}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

'use client';

import { Button } from '@repo/ui/button';
import { Checkbox } from '@repo/ui/checkbox';
import type { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="flex items-center gap-3 p-3 border-b border-gray-200 last:border-b-0">
      <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span
        className={`flex-1 ${
          todo.completed ? 'line-through text-gray-500' : 'text-gray-900'
        }`}
      >
        {todo.text}
      </span>
      <Button
        className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 focus:ring-2 focus:ring-red-500"
        onClick={() => onDelete(todo.id)}
      >
        削除
      </Button>
    </div>
  );
};

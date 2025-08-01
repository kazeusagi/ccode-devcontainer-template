'use client';

import { Button } from '@repo/ui/button';
import { Input } from '@repo/ui/input';
import { useState } from 'react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue) {
      onAddTodo(trimmedValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        value={inputValue}
        onChange={setInputValue}
        onKeyDown={handleKeyDown}
        placeholder="新しいTodoを入力..."
        className="flex-1"
      />
      <Button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
      >
        追加
      </Button>
    </form>
  );
};

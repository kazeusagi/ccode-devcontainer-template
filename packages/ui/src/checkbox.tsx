'use client';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
}

export const Checkbox = ({
  checked = false,
  onChange,
  className = '',
  disabled = false,
}: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange?.(e.target.checked)}
      disabled={disabled}
      className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ${className}`}
    />
  );
};

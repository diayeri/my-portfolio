type ButtonProps = {
  variant?: 'solid' | 'outline';
  color?: 'primary' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed';

  const sizes = {
    sm: {
      button: 'px-4 py-1.5 text-sm',
      icon: 'w-4 h-4',
    },
    md: {
      button: 'px-6 py-2 text-base',
      icon: 'w-5 h-5',
    },
    lg: {
      button: 'px-8 py-3 text-lg',
      icon: 'w-6 h-6',
    },
  };

  const variants = {
    solid: {
      primary: 'bg-primary-light text-white hover:bg-primary-dark',
      gray: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    },
    outline: {
      primary:
        'border border-primary-light text-primary-light hover:bg-primary-dark hover:text-white',
      gray: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    },
  };

  return (
    <button
      className={[
        base,
        sizes[size].button,
        variants[variant][color],
        fullWidth && 'w-full',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {iconLeft && (
        <span className={`[&>svg]:w-full [&>svg]:h-full ${sizes[size].icon}`}>
          {iconLeft}
        </span>
      )}
      <span className='font-mono'>{children}</span>
      {iconRight && (
        <span className={`[&>svg]:w-full [&>svg]:h-full ${sizes[size].icon}`}>
          {iconRight}
        </span>
      )}
    </button>
  );
}

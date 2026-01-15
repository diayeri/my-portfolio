import { Link } from 'react-router-dom';

// Header 컴포넌트 props 타입 정의
interface HeaderProps {
  className?: string;
}

const navItems = [
  { to: '/projects', label: 'Projects' },
  // { to: '/about', label: 'About' },
  // { to: '/contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className='fixed top-0 z-50 flex items-center justify-between w-full px-6 py-4 border-b backdrop-blur-lg border-gray-200/70'>
      <div className='flex items-center'>
        <Link
          to='/'
          className='font-mono text-base font-bold hover:text-primary-light'
        >
          DtoD
        </Link>
      </div>

      {/* 내비게이션 메뉴 */}
      <nav>
        <ul className='flex w-full gap-10'>
          {navItems.map((item) => (
            <li key={item.to} className='w-full'>
              <Link
                to={item.to}
                className='font-mono text-sm text-nowrap hover:text-primary-light'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

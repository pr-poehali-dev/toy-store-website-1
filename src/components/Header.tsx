import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Icon name="Rocket" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold font-heading">ИгроМир</h1>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/boys" 
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-boys"
            >
              <Icon name="Car" size={18} />
              <span>Для мальчиков</span>
            </Link>
            <Link 
              to="/girls" 
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[hsl(340,80%,45%)]"
            >
              <Icon name="Heart" size={18} />
              <span>Для девочек</span>
            </Link>
            <Link 
              to="/register" 
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
            >
              <Icon name="UserPlus" size={18} />
              <span>Регистрация</span>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <Icon name="ShoppingCart" size={22} />
            </button>
          </div>
        </div>

        <nav className="md:hidden flex items-center justify-around mt-4 pb-2 border-t pt-4">
          <Link to="/boys" className="flex flex-col items-center gap-1 text-xs">
            <Icon name="Car" size={20} />
            <span>Мальчики</span>
          </Link>
          <Link to="/girls" className="flex flex-col items-center gap-1 text-xs">
            <Icon name="Heart" size={20} />
            <span>Девочки</span>
          </Link>
          <Link to="/register" className="flex flex-col items-center gap-1 text-xs">
            <Icon name="UserPlus" size={20} />
            <span>Вход</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

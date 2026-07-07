import Link from 'next/link';
import { Button } from './ui/Button';
import { FaPlus } from 'react-icons/fa6';

function Header() {
  return (
    <header className="flex items-center justify-between md:w-full py-6 w-[90vw]">
      <h1 className="text-4xl font-bold text-white">
        <Link href="/">
          My<span className="text-[#e5234b]">Flix</span>
        </Link>
      </h1>
      <Button link href="/movies/new">
        <FaPlus className="mr-2" /> Adicionar filme
      </Button>
    </header>
  );
}

export default Header;

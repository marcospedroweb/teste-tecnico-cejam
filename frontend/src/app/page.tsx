import ListMovies from '@/components/sections/ListMovies';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-black">
      <Header />
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ListMovies />
      </main>
    </div>
  );
}

import ListMovies from '@/components/sections/ListMovies';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Header />
      <main className="flex flex-1 w-full max-w-7xl flex-col items-start justify-start py-24 px-16">
        <ListMovies />
      </main>
    </div>
  );
}

import NewMovie from '@/components/sections/NewMovie';
import Header from '../../../components/Header';

export default function MoviePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Header />
      <main className="flex flex-1 w-full lg:max-w-3xl flex-col items-center justify-between py-32 px-6 md:px-16 sm:items-start">
        <NewMovie />
      </main>
    </div>
  );
}

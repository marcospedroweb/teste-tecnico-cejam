import Header from '@/components/Header';
import UpdateMovie from '@/components/sections/UpdateMovie';
import React from 'react';

function UpdatePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <UpdateMovie />
      </main>
    </div>
  );
}

export default UpdatePage;

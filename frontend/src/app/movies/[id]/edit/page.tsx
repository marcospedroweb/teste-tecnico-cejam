import Header from '@/components/Header';
import UpdateMovie from '@/components/sections/UpdateMovie';
import React from 'react';

function UpdatePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Header />
      <main className="flex flex-1 w-full lg:max-w-3xl flex-col items-center justify-between py-32 px-6 md:px-16 sm:items-start">
        <UpdateMovie />
      </main>
    </div>
  );
}

export default UpdatePage;

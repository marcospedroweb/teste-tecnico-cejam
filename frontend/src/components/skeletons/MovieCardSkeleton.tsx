import React from 'react';

function MovieCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl bg-[#333333] p-5">
      <div className="aspect-2/3 rounded-lg bg-zinc-700" />

      <div className="mt-4 space-y-3">
        <div className="h-6 w-3/4 rounded bg-zinc-700" />
        <div className="h-4 w-1/2 rounded bg-zinc-700" />
        <div className="h-4 w-1/3 rounded bg-zinc-700" />
        <div className="h-4 w-1/2 rounded bg-zinc-700" />
        <div className="h-5 w-24 rounded bg-zinc-700" />
      </div>
    </div>
  );
}

export default MovieCardSkeleton;

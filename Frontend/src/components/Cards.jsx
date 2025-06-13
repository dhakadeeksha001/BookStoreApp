
import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
  <div className="card w-72 h-[420px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border flex flex-col">
    {/* Image - 3/4 of card height */}
    <figure className="flex-3 h-[75%] overflow-hidden flex items-center justify-center pt-2 px-2">
  <img src={item.image} alt="Book" className="object-contain h-full w-full" />
</figure>

    {/* Body - 1/4 of card height */}
    <div className="flex-1 px-4 py-2 flex flex-col justify-between h-[25%]">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm truncate">{item.name}</h2>
          <span className="badge badge-secondary ml-2">{item.category}</span>
        </div>
        <p className="text-xs mt-1 truncate">{item.title}</p>
      </div>

      {/* Less space between title and price/buy button */}
      <div className="flex justify-between items-center mt-1">
        <div className="badge badge-outline">${item.price}</div>
        <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200 text-sm">
          Buy Now
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Cards;


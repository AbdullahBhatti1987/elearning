import React from "react";
import MarketingCard from "./MarketingCard";

function MarketingArticles() {
  return (
    <div className="p-8 flex flex-col">
      <div className="flex justify-between py-4">
        <h1 className="text-start px-6 font-bold">Marketing Articles</h1>
        <button className="darkText">See all</button>
      </div>
      <div className="w-full p-4 flex flex-row gap-4">
        <MarketingCard/>
        <MarketingCard/>
        <MarketingCard/>
        <MarketingCard/>
      </div>
    </div>
  );
}

export default MarketingArticles;

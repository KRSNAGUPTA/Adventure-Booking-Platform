import Header from "@/components/Header";
import React from "react";

function HomePage() {
  document.title="ThrillScape"
  return (
    <div
      className="relative p-0 m-0 h-screen w-screen flex items-center justify-end bg-cover bg-center"
      style={{ backgroundImage: "url(./ThrillScape-desktop.jpg)" }}
    >
      <div className="text-center text-white z-10 mr-52 mb-20">
        <div className="text-6xl font-extrabold mb-2">
          Thrill<span className="text-yellow-400">Scape</span>
        </div>
        <div className="text-xl">Explore & Book Some Adventures rides</div>
        {/* <div className="mt-8 space-x-6">
          <button className="bg-yellow-400 text-black py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
            Explore
          </button>
          <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 py-2 px-6 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors">
            Book
          </button>
        </div> */}
      </div>

      {/* Header at the bottom */}
      <div className="w-full fixed bottom-0 z-20">
        <Header />
      </div>
    </div>
  );
}

export default HomePage;

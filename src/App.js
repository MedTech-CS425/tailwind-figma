import "./App.css";
import { SearchIcon } from "@heroicons/react/outline";
function App() {
  return (
    <div className="bg-white px-24">
      <header className="py-8 flex justify-between">
        <img src="/images/logo.svg" alt="logo" width="96px" />
        <div
          className="bg-white flex rounded-2xl divide-x-2 divide-gray-100 items-center pl-4 pr-2"
          style={{ boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <div classname="p-4 w-44">
            <input
              type="text"
              placeholder="Helsinki, Finland"
              className="bg-transparent w-36"
            />
          </div>
          <div className="p-4 w-44">
            <input
              type="text"
              placeholder="Add guests"
              className="bg-transparent w-36"
            />
          </div>
          <div className="w-12 h-full flex items-center justify-center">
            <SearchIcon className="w-5 text-brand" />
          </div>
        </div>
      </header>
      <main className="flex flex-col py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold leading-7">Stays in Finland</h1>
          <span className="text-sm font-medium text-gray-600">12+ stays</span>
        </div>
        <div className="flex flex-col">
          <div className="">
            <img className="w-96 rounded-3xl" src="https://images.unsplash.com/photo-1621414130936-6f0c63360ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="" />
          </div>
          <div className="py-3 flex space-x-4 items-center">
            <button className="border border-solid border-gray-900 rounded-xl text-xs py-1 px-2 font-bold">SUPER HOST</button>
            <span className="text-xs text-gray-400">Entire Appartment . 2 beds</span>
            <span></span>
          </div>
          <div>
            <h2>stylist appartment in center of the city</h2>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

import SearchResults from "./SearchResults";

function SearchOverlay({ showSearchList, setShowSearchList, searchTerm, setSearchTerm, navFunc }) {

  const pageTitleStyle = {
    color: '#343C6A'
  }

  const headerBlueColorStyle = {
    color: '#718EBF'
  }

  return (
    <div
      className="search-overlay fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
      style={{ display: `${showSearchList ? "flex" : "none"}` }}
    >
      <div
        onClick={() => {
          setSearchTerm("");
          setShowSearchList(false);
        }}
        className="fixed top-0 left-0 w-screen h-screen opacity-50 bg-black"
      >
      </div>
      <div className="search-drop-down z-10 rounded-xl flex flex-col gap-10 p-5 w-4/6 h-1/2 bg-white">
        <div style={pageTitleStyle} className="px-5 bg-gray-fill rounded-xl">
          <input
            type="text"
            className="w-full h-12 rounded-lg text-gray-500 border-none bg-inherit outline-none"
            placeholder="Search for something"
            onChange={() => {
              setSearchTerm(event.target.value);
            }}
            value={searchTerm}
          />
        </div>
        <div style={headerBlueColorStyle} className="overflow-y-auto">
          <SearchResults
            searchTerm={searchTerm}
            navFunc={navFunc}
            searchToggle={setShowSearchList}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </div>
    </div>


  
  );
}

export default SearchOverlay

const NavBar = ({ getData }) => {
  return (
    <>
      <div id="navBar">
        <div id="navbarDiv">
          <h1>A R Planners</h1>
          <button onClick={getData}>Welcome Planners</button>
        </div>
      </div>
      <div id="emptyData">
        <h1 id="profile"> (| O_O |)</h1>
        <h1>No Planners Found</h1>
        <div id="underLine"></div>
      </div>
    </>
  );
};

const NavBarSecond = ({getData}) => {
  return (
    <>
      <div id="navBar">
        <div id="navbarDiv">
          <h1>A R Planners</h1>
          {/* <button onClick={getData}>Get Users</button> */}
        </div>
      </div>
    </>
  );
};

export { NavBar,NavBarSecond };

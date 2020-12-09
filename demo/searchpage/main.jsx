import Boostact from "../../src/boostact/Boostact";
import Content from "./content";
import SearchBar from "./searchbar";
import mockData from "./mock-data";
import Route from "../../src/boostact/Route";
import Home from "../Home";
import Timer from "../Timer";
import About from "../About";
import Todo from "../todoList/todoTemplate";
/** @jsx Boostact.createElement */

const Search = () => {
  const [inputText, setText] = Boostact.useState("");
  const [searchResult, setResult] = Boostact.useState([]);
  Boostact.useEffect(() => {
    if (inputText.length < 2) return;
    const result = mockData.filter((data) => data.name.includes(inputText) || data.keyword.indexOf(inputText) !== -1);
    setResult(result);
  }, [inputText]);
  return (
    <div>
      <div id="title">타이틀</div>
      <ul>
        <li>
          <Route.Link to="/home">
            <span>Home</span>
          </Route.Link>
        </li>
        <li>
          <Route.Link to="/about">
            <span>About</span>
          </Route.Link>
        </li>
        <li>
          <Route.Link to="/Timer">
            <span>Timer</span>
          </Route.Link>
        </li>
        <li>
          <Route.Link to="/todo">
            <span>Todo</span>
          </Route.Link>
        </li>
        <li>
          <Route.Link to="/search">
            <span>search</span>
          </Route.Link>
        </li>
      </ul>
      <hr />
      <div id="ROUTING">
        <Route.Route path="/home" component={Home}></Route.Route>
        <Route.Route path="/about" component={About}></Route.Route>
        <Route.Route path="/timer" component={Timer}></Route.Route>
        <Route.Route path="/todo" component={Todo}></Route.Route>
        <Route.Route path="/search" component={Search}></Route.Route>
      </div>
      <div>
        <SearchBar inputText={inputText} setText={setText} />
        <div>{inputText}</div>
      </div>
      <div>
        {searchResult.map((result) => {
          return <Content img={result.img} name={result.name} />;
        })}
      </div>
    </div>
  );
};

export default Search;
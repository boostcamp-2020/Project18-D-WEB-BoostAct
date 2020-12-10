import Boostact from "../../../src/boostact/Boostact";
import classes from "./style";
import Navigator from "../../component/navigation/document/navigator";
import DocumentRouter from "./documentRouter";

/** @jsx Boostact.createElement */
const Context = Boostact.createContext();

const Document = () => {
  const [container, setContainer] = Boostact.useState(null);
  const [list, setList] = Boostact.useState(null);

  const value = {
    states: { container, list },
    actions: { setContainer, setList },
  };

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Context.Provider value={value}>
        <div className={classes.DocumentPage}>
          <DocumentRouter />
        </div>
        <div className={classes.ASide}>
          <Navigator />
        </div>
      </Context.Provider>
    </div>
  );
};
export { Document, Context };

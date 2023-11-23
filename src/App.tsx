import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading={"Cities"}
    //     onSelectItem={handleSelectItem}
    //   ></ListGroup>
    // </div>
    <div>
      <Alert>
        Hello <span>11111</span>
      </Alert>
    </div>
  );
}

export default App;

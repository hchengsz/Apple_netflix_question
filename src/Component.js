import React from "react";
import Source from "./source.json";

function Component() {
  const [mylist, setMylist] = React.useState([]);
  const [recommand, seRecommand] = React.useState([]);

  React.useEffect(() => {
    function getData() {
      setMylist(Source.mylist);
      seRecommand(Source.recommendations);
    }
    getData();
  }, []);

  function deleteItem(id) {
    let temp = mylist.slice();
    temp = temp.filter((e) => e.id !== id);
    setMylist(temp);
  }

  return (
    <>
      <div className="header">
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo-700x394.png" />
      </div>
      <p />

      <h2>My List</h2>
      <div className="container">
        {mylist.map((e) => {
          return (
            <div className="component" key={e.id}>
              <img src={e.img} alt={"pics"} />
              <p>{e.title}</p>
            </div>
          );
        })}
      </div>

      <p />
      <h2>Recommendations</h2>
      <div className="container">
        {recommand.map((e) => {
          return (
            <div className="component" key={e.id}>
              <img src={e.img} alt={"pics"} />
              <p>{e.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Component;

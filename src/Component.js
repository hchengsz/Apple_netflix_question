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

  function handleClick() {}

  function handleChange(e) {}

  function deleteItem(id) {
    let temp = mylist.slice();
    temp = temp.filter((e) => e.id !== id);
    setMylist(temp);
  }

  return (
    <>
      <input onChange={(e) => handleChange(e)} />
      <button onClick={(e) => handleClick()}>Search</button>
      <p />
      <div className="container">
        {mylist.map((e) => {
          return (
            <div
              className="component"
              key={e.id}
              onClick={() => deleteItem(e.id)}
            >
              <img
                src="http://cdn1.nflximg.net/webp/1381/11971381.webp"
                alt={"pics"}
              />
              <p>{e.title}</p>
            </div>
          );
        })}
      </div>

      <p />
      <div className="container">
        {recommand.map((e) => {
          return (
            <div
              className="component"
              key={e.id}
              onClick={() => deleteItem(e.id)}
            >
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

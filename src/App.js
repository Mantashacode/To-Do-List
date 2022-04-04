import { useState } from "react";
import "./css/App.css";
// import TodoImage from "./images/todo.svg";

function App() {
  const [data, setData] = useState([]);

  const updateToDo = (term) => {
    console.log(term);
    if (/\w/.test(term)){
      //data.push[term];
      setData([...data, term]);
    }
  };
  const deleteData = (id) => {
    console.log(id);
    data.splice(id, 1);
    console.log(data);
    setData([...data]);
  };
     const check=(index)=>{
       document.getElementById(`check ${index}`).style.textDecoration='line-through';
       console.log(index);
     }
     const uncheck=(index)=>{
      document.getElementById(`check ${index}`).style.textDecoration='none';
    }
  function remove() {
    document.querySelector("#note").value = "";
  }

  const darkmode=()=>{
  document.querySelector('#head').classList.toggle('darkmode');
  document.querySelector('.main').classList.toggle('light');
  document.querySelector('.heading').classList.toggle('light');
  document.querySelector('.display-main').classList.toggle('light');
}
  let term = "";

  return (
    <div id="head">
    <button id="dark" onClick={darkmode}>Dark Mode</button>
    <div className="main">
      <div className="container1">
        <p>To Do</p>
        <div className="input-area">
          <input type="text" id='note' onChange={(e) => (term = e.target.value)} />
          <br />
          <button
            type="button"
            className="addbutton"
            onClick={(e) => {
              updateToDo(term);
              remove();
            }}
          >
            Click Me!!
          </button>
        </div>
      </div>
      <div className="display-main">
        {/* <img src={TodoImage} alt={<i class="spinner loading icon"></i>} /> */}
        {data.length !== 0 ? (
          data.map((element, i) => {
            return (
              <div className="display-data" >
                <div className="task" id={`check ${i}`}>{element}</div>
                <button
                  className="ui red basic button"
                  id={i}
                  onClick={(e) => deleteData(i)}
                >
                <i class="trash alternate outline icon"></i>
                </button>
                {<input type='checkbox'  className="checkbox" onClick={(e)=>{
                    if(e.target.checked)
                    check(i);
                    else
                    uncheck(i);
                  }} />
                }
              </div>
            );
          })
        ) : (
          <div className="heading">Nothing To Do...Yay!!</div>
        )}
      </div>
    </div>
    </div>
  );
}

export default App;

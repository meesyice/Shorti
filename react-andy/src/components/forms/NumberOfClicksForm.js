import { useRef } from "react";


import classes from "./Form.module.css";

function NumberOfClicks() {
  const shortiInputRef = useRef();

  function NumberofClicksHandler(event) {
    event.preventDefault();
    const enteredShorti = shortiInputRef.current.value;

    const NumberOfClicksData = {
      shorti: enteredShorti,
    };

    console.log(NumberOfClicksData);
  }
  return (
    <form className={classes.form} onSubmit={NumberofClicksHandler}>
      <div className={classes.control}>
        <input
          type="text"
          required
          id="shorti-url"
          ref={shortiInputRef}
          placeholder="shorti.xyz/abc123"
        />
      </div>
      <div className={classes.actions}>
        <button>Track Clicks</button>
      </div>
    </form>
  );
}

export default NumberOfClicks;

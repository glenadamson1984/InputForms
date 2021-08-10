import {useEffect, useRef, useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const nameRef = useRef()

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    let formIsValid = false;

    if (enteredNameIsValid) {
        formIsValid = true
    }


    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const formSubmissiveHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        setEnteredName('');
        setEnteredNameTouched(false);
    }

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true);
    }



  return (
    <form onSubmit={formSubmissiveHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef} type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
          {nameInputIsInvalid && <p>name must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

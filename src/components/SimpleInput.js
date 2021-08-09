import {useRef, useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
    const nameRef = useRef()

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const formSubmissiveHandler = (event) => {
        event.preventDefault();

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false)
            return;
        }

        setEnteredNameIsValid(true)
        console.log(nameRef.current.value);
        setEnteredName('');
    }

  return (
    <form onSubmit={formSubmissiveHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} />
          {!enteredNameIsValid && <p>name must be valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

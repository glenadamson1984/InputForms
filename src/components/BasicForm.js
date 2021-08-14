import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    valid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    valueBlurHandler: nameBlurHandler,
    rest: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    valid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    valueBlurHandler: lastNameBlurHandler,
    rest: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    valid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    valueBlurHandler: emailBlurHandler,
    rest: resetEmailInput,
  } = useInput((value) => value.includes("@") !== false);

  let formIsValid = false;

  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissiveHandler = (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid
    ) {
      return;
    }

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmissiveHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onBlur={nameChangedHandler}
            onChange={nameBlurHandler}
          />
          {nameInputHasError && <p>email must be valid</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangedHandler}
          />
        </div>
        {lastNameInputHasError && <p>email must be valid</p>}
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangedHandler}
        />
        {emailInputHasError && <p>email must be valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

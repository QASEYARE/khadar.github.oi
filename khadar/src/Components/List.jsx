import { useId } from 'react';

export default function Form() {
  const ageInputId = useId();
  return (
    <>
<h1>fill the form</h1>
      <label>
        Your first name:
        <input name="firstName" />
      </label>
      <hr />
      <label htmlFor={ageInputId}>Your age:</label>
      <input id={ageInputId} name="age" type="number" />
      
    </>
  );
}

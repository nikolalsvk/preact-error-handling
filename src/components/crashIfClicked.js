import { h } from "preact";
import { useState } from "preact/hooks";

const CrashIfClicked = () => {
  const [error, setError] = useState(null);

  if (error) {
    return (
      <>
        <p>An error happened, sorry!</p>
        <button onClick={() => setError(null)}>Try again</button>
      </>
    );
  }

  return (
    <>
      <p>This is a component that will crash the app.</p>

      <button
        onClick={() => {
          try {
            throw new Error("Crash!");
          } catch (e) {
            setError(e);
          }
        }}
      >
        Crash!
      </button>
    </>
  );
};

export default CrashIfClicked;

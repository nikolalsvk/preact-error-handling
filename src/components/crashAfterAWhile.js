import { h } from "preact";
import { useState } from "preact/hooks";

const CrashAfterAWhile = () => {
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
      <p>
        This is a component that will crash after 1 second within clicking the
        button.
      </p>

      <button
        onClick={() => {
          setTimeout(() => {
            try {
              throw new Error("I crashed after 1 second!");
            } catch (e) {
              setError(e);
            }
          }, 1000);
        }}
      >
        Crash after 1 second!
      </button>
    </>
  );
};

export default CrashAfterAWhile;

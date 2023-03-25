import { h } from "preact";
import { useErrorBoundary } from "preact/hooks";

const CatcherWithHook = (props) => {
  const [error, resetError] = useErrorBoundary();

  if (error) {
    return (
      <>
        <h1>Oh no! I am a CatcherWithHook</h1>
        <p>Something went badly wrong and useErrorBoundary was used 😭</p>
        <p>Here's the error message: {error.message}</p>

        <button onClick={resetError}>Try again</button>
      </>
    );
  }

  return props.children;
};

export default CatcherWithHook;

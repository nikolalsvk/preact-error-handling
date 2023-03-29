import { h, Component } from "preact";
import Appsignal from "@appsignal/javascript";

import { ErrorBoundary } from "@appsignal/preact";

export const appsignal = new Appsignal({
  key: "YOUR FRONTEND API KEY",
});

const FallbackComponent = ({ error }) => (
  <>
    <p>Uh oh! There was an error caught by AppSignal's ErrorBoundary :(</p>
    <p>Here's the error: {error.message}</p>
  </>
);

class AppSignalCatcher extends Component {
  render(props) {
    return (
      <ErrorBoundary
        instance={appsignal}
        tags={{ tag: "value" }}
        fallback={(error) => <FallbackComponent error={error} />}
      >
        {props.children}
      </ErrorBoundary>
    );
  }
}

export default AppSignalCatcher;

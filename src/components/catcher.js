import { h, Component } from "preact";

class Catcher extends Component {
  constructor() {
    super();
    this.state = { errored: false, error: null };
  }

  componentDidCatch(error) {
    this.setState({ errored: true, error });
  }

  render(props, state) {
    if (state.errored) {
      return (
        <>
          <h1>Oh no! I am a Catcher</h1>
          <p>Listen up, something went badly wrong 😭</p>
          <p>Here's the error message: {state.error.message}</p>
        </>
      );
    }

    return props.children;
  }
}

export default Catcher;

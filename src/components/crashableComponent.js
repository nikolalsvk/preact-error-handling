import { h } from "preact";

const CrashableComponent = (props) => {
  return <>{props.iDontExist.meNeither}</>;
};

export default CrashableComponent;

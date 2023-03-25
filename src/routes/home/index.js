import { h } from "preact";
import style from "./style.css";

import CrashableComponent from "../../components/crashableComponent";
import Catcher from "../../components/catcher";
import CatcherWithHook from "../../components/catcherWithHook";
import CrashIfClicked from "../../components/crashIfClicked";
import CrashAfterAWhile from "../../components/crashAfterAWhile";

const Home = () => {
  return (
    <div class={style.home}>
      <div>
        <hr />
        <Catcher>
          <CrashableComponent />
        </Catcher>

        <hr />
        <CatcherWithHook>
          <CrashableComponent />
        </CatcherWithHook>

        <hr />
        <CrashIfClicked />

        <hr />
        <CrashAfterAWhile />

        <hr />
      </div>
    </div>
  );
};

const Resource = (props) => {
  return (
    <a href={props.link} class={style.resource}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
};

export default Home;

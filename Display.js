function Display(props) {
  return (
    <div className="timer-display">
      {props.hours < 10 ? "0" + props.hours : props.hours}.
      {props.minutes < 10 ? "0" + props.minutes : props.minutes}.
      {props.seconds < 10 ? "0" + props.seconds : props.seconds}
    </div>
  );
}

export default Display;

function ControlButton(props) {
  return (
    <button
      className={props.class}
      onClick={props.handleTimer}
      onDoubleClick={props.handleTimerOnDoubleClick}
    >
      {props.name}
    </button>
  );
}

export default ControlButton;

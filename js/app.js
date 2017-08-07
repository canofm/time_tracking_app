class TimersDashboard extends React.Component {
  render() {
    return (
      <div className='ui tree column centered grid'>
        <div className='column'>
          <EditableTimerList />
          <ToggleableTimerForm isOpen={true} />
        </div>
      </div>
    );
  }
}


import * as React from 'react';
import Counter from './Counter';

// interface IAppProps = {};

interface IAppState {
  counterValue: number;
}

// class App extends React.Component<IAppProps, IAppState> {
class App extends React.Component<{}, IAppState> {
  public state = {
    counterValue: 0
  };

  public render() {
    return (
      <div className="App" style={{ textAlign: 'center' }}>
        <Counter counter={this.state.counterValue} />
        <button onClick={this.incHandler}>Increment</button>
        <button onClick={this.decHandler}>Decrement</button>
      </div>
    );
  }

  private incHandler() {
    this.setState(prevState => {
      return {
        counterValue: prevState.counterValue + 1
      };
    });
  }

  private decHandler() {
    this.setState(prevState => {
      return {
        counterValue: prevState.counterValue - 1
      };
    });
  }
}

export default App;

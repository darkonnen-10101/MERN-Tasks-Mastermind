import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title : '',
      description: ''
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange(){
    
  }

  render(){
    return(
      <div>
        <nav className="light-blue darken-4">
          <div className="container">
            <a className="brand-logo" href="/">Mern Stack</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addTask}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input onChange={this.handleChange} type="text" placeholder="Task title" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea onChange={this.handleChange} className="materialize-textarea" placeholder="Task description"> </textarea>
                      </div>
                    </div>
                    <button type="submit" className="btn light-blue darken-4">Send</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import autobind from 'autobind-decorator';

@autobind
export default class App extends Component {
  handleChange(e) {
    const blob = e.target.files[0];
    const a = document.createElement('a');
    a.target = '_blank';
    a.download = blob.name;
    a.href = URL.createObjectUrl(blob);
    a.click();
  }

  render() {
    return (
      <div>
        <h1>Record Video</h1>
        <input
          accept="video/*;capture=camcorder"
          onChange={this.handleChange}
          type="file"
        />
      </div>
    );
  }
}

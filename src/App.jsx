import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import marked from 'marked';
import Editor from './Editor';
import Preview from './Preview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      markdown: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.getRawMarkup = this.getRawMarkup.bind(this);
  }

  getRawMarkup(text) {
    const options = {
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smarypants: false,
      xhtml: false,
    };
    const rawMarkup = marked(text, options);

    return rawMarkup;
  }

  handleChange(event) {
    const textBoxInput = event.target.value;

    this.setState({
      text: textBoxInput,
      markdown: this.getRawMarkup(textBoxInput),
    });
  }


  render() {
    const { markdown } = this.state;

    return (
      <div className="main-container">
        <label htmlFor="editor"></label>
        <Editor handleChange={this.handleChange} />
        <Preview rawMarkdown={markdown} />
      </div>
    )
  }
};

export default App;
ReactDOMServer.renderToString(<App />);

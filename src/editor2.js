import code from "./example1.example.js"

var React = require('react');
var Playground = require('component-playground');

const Editor = () => {
    return (
      <div className="component-documentation">
        <Playground codeText={code} scope={{React: React }}/>
      </div>
    );
}

export default Editor;
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
import { Fraktal, Pattern } from 'fraktal';
import ErrorBoundary from './errorBoundary';

global.Fraktal = Fraktal;

const allButFirstLine = (arg) => arg.split("\n").slice(1).join("\n");
const allButLastLine = (arg) => arg.split("\n").slice(0, -1).join("\n");

const showCode = (arg) => {
  return `
    (function() {
      let wrapper = () => {
        ${arg}

        return 'Be sure to return a value from the code editor to see your changes.'; // give a default return if one not specified
      }

      return wrapper()
    })()
  `
}

const reactShowCode = (arg) => {
  const lastLine = arg.split("\n")[arg.split("\n").length - 1].replace("return", "").replace(";", "");
  let a = `
  (function() {
    let wrapper = () => {
      ${allButLastLine(arg)}

      render(${lastLine})
    }

    wrapper()
  })()
  `

  console.log(a)
  return a;
}

const Editor = ({ example, react }) => {
  return (
    <LiveProvider noInline={ react } code={ allButFirstLine(example) } transformCode={ react ? reactShowCode : showCode } scope={{ Fraktal: Fraktal, Pattern }}>
      <LiveEditor />
      <ErrorBoundary>
        <LiveError />
      </ErrorBoundary>
      <div style={{ padding: '12px', borderLeft: '3px solid gray', borderRadius: '4px', marginLeft: '12px', marginTop: '12px' }}>
        <LivePreview />
      </div>
    </LiveProvider>
  );
}

export default Editor;
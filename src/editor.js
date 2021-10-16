import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
import { Fraktal } from 'fraktal';
import ErrorBoundary from './errorBoundary';

global.Fraktal = Fraktal;

const showCode = (arg) => {
  return `
    render((function() {
      let wrapper = () => {
        ${arg}

        return 'Be sure to return a value from the code editor to see your changes.'; // give a default return if one not specified
      }

      return wrapper()
    })())
  `
}

const Editor = ({ example }) => {
  return (
    <LiveProvider noInline code={ example } transformCode={ showCode } scope={{ Fraktal: Fraktal, global: global }}>
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
import { Fraktal, React } from 'fraktal';
const { useState } = React;

let app = Fraktal({ react: true });

let loading, setLoading;
const InitializeReactHooks = () => {
    [loading, setLoading] = useState(true);
}
app.initializeReactHooks = InitializeReactHooks;

app.render = {
    match: () => loading === true,
    func: () => (
        <div>
            <div>Loading...</div>
            <button onClick={ () => setLoading(l => !l) }>Toggle Loading</button>
        </div>
    )
}

app.render = {
    match: () => loading === false,
    func: () => (
        <div>
            <div>Got the data!</div>
            <button onClick={ () => setLoading(l => !l) }>Toggle Loading</button>
        </div>
    )
}

return app.render;
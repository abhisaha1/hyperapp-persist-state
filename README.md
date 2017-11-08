# HyperApp Persist State
> Reuse the previous app's state for faster reload

This library is a High Order App which encapsulates your [Hyperapp](https://github.com/hyperapp/hyperapp) and saves your state for the next page load increases performance and also giving (partial) offline capability.

# Install
```
npm i hyperapp-persist-state
```
# Usage
```
import { app } from "hyperapp";
import persist from "./lib/persist";

const options = {
    state,
    actions,
    view
};
// Wrap the options inside persist
const appActions = app(persist(options),{
    storage: 'localStorage',
    clearPast: true,
    version: 1
});
appActions.__initPersist();
```

# Options
`storage - {string} (optional) | Default: localStorage`
Uses localStorage to save the state

`version - {int} (optional) | Default: 1`
When there are breaking changes in the state, increament the version number. This will remove the old state and initialize the storage with the new state.

`clearPast - {bool} (optional) | Default: true`
If this is false, it will keep the old states in the storage.

The states are stored in the format `app-state-v-{version}`.

# Todo
Add options for IndexedDB

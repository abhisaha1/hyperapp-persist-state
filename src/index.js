module.exports = function(props, params) {
    params = typeof params == "undefined" ? {} : params;
    var defaults = {
        storage: "localStorage",
        clearPast: true,
        version: 1
    };

    params = Object.assign(defaults, params);

    var storage = window[params.storage];
    var prefix = "app-state-v-";
    var name = prefix + params.version;

    props.actions.__initPersist = function(state, actions) {
        var oldState = null;
        if (storage[name]) {
            oldState = JSON.parse(storage[name]);
        }
        // clean old states
        if (params.clearPast) {
            Object.keys(storage).map(function(key) {
                key !== name &&
                    key.indexOf(prefix) === 0 &&
                    delete storage[key];
            });
        }
        window.addEventListener("unload", actions.__persistState);
        return oldState || state;
    };

    props.actions.__persistState = function(state) {
        storage[name] = JSON.stringify(state);
    };

    props.actions.__removePersist = function(state, actions) {
        delete storage[name];
        window.removeEventListener("unload", actions.__persistState);
    };
    return props;
};
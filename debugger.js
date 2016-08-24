function Debugger(isDebugMode) {
    isDebugMode = isDebugMode || false;
    if (
        typeof console !== 'undefined'
        && isDebugMode
    ) {
        return console;
    } else {
        return {
            log: function() {},
            info: function() {},
            warn: function() {},
            error: function() {},
            dir: function() {},
            time: function() {},
            timeEnd: function() {},
            trace: function() {},
            assert: function() {},
            Console: function() {}
        };
    }
}

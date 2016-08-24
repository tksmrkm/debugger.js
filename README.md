# debugger.js

debugger.js is wrapper object for `console`

## Usage
```
<head>
    <script src="/path/to/debugger.js"></script>
    <script>
        const debug = Debugger(location.href.match(/^https?:\/\//));
        debug.log(debug);
    </script>
</head>
```

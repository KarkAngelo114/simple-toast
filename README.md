# simple-toast

simple-toast is a simple, non-blocking, animated pop up component built using Javascript and CSS.

The function accepts two paraeters - `type` and `message` where:

* type - you can pass the type of toast here. (`success`, `info`, `error`).
* message - the message to be display in the pop-up

The code below is the sample implementation (if you're working with plain HTML):

```Javascript
    Toast.ShowToast('success', 'This is a success message');
    Toast.ShowToast('info', 'This is an info message');
    Toast.ShowToast('error', 'This is an error message');
```

## Usage
You can directly embed using the `<script>` tag as follows (if you're working with plain HTML):

```HTML
<script src = "https://unpkg.com/simple-toast/dist/toast.js" defer></script>
```

You can install also via NPM:

```bash
npm install simple-toast
```

And use as like this:

```Javascript
import { ShowToast } from 'simple-toast':

ShowToast('info', 'Hello World');
```
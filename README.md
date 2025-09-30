# simple-toast-pop-up

Bored with the good old plain `alert()` function? `simple-toast-pop-up` is a straightforward, non-blocking, animated pop-up element that was created with CSS and Javascript. Enhance your online application's user experience (UX) design in displaying notifications.

# Installation
You can directly embed using the `<script>` tag as follows (if you're working with plain HTML):

```HTML
<script src = "https://unpkg.com/simple-toast-pop-up/dist/toast.js" defer></script>
```

You can install also via NPM:

```bash
npm install simple-toast-pop-up
```

## Usage
The function accepts two parameters - `type` and `message` where:

* type - you can pass the type of toast here. (`success`, `info`, `error`).
* message - the message to be display in the pop-up

The code below is the sample implementation (if you're working with plain HTML):

```HTML
    <button onclick = "Success()">Success</button>
    <button onclick = "Info()">Info</button>
    <button onclick = "Error()">Error</button>
    <script>
        functio Success() {
            Toast.ShowToast('success', 'This is a success message');
        }

        function Info() {
            Toast.ShowToast('info', 'This is an info message');
        }

        function Error() {
            Toast.ShowToast('error', 'This is an error message');
        }
    </script>
```
Or if you're working with frameworks (eg: ReactJS):

```Javascript
import { ShowToast } from 'simple-toast-pop-up';

ShowToast('info', 'Hello World');
```
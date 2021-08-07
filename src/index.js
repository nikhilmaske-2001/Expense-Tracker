import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";
import "./index.css";
import {Provider} from "./context/context";

ReactDOM.render(
    <SpeechProvider appId="23b66b83-e3b3-4839-a417-959e6932a0c1" language="en-US">
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>, 
    document.getElementById("root"));
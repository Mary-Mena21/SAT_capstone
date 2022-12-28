import { SAT } from "./components/SAT";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <SAT />
    </BrowserRouter>
);

import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";

import "./assets/style/main.css";
import { BrowserRouter } from "react-router";

const root = createRoot(document.getElementById("root")!);
root.render(
    <BrowserRouter>
        <App />
    
    </BrowserRouter>
);

import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";

import "./assets/style/main.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

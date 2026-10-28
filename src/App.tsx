import "./App.css";
import CodeContextProvider from "./context/codes-context";

import QueryProvider from "./providers/query-provider";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <QueryProvider>
      <CodeContextProvider>
        <AppRoutes />
      </CodeContextProvider>
    </QueryProvider>
  );
}

export default App;

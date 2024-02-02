import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { publicRoutes } from "./routes";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <MainLayout>
                    <Page />
                  </MainLayout>
                }
              />
            );
          })}
        </Routes>
      </div>
      ;
    </Router>
  );
}

export default App;

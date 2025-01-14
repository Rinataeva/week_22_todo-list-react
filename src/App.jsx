import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Navigation } from "./components/Navigation";
import { LoginPage } from "./pages/LoginPage";
import { News } from "./pages/News";
import { NewsPage } from "./pages/News/NewsPage";
import { Missing } from "./components/Missing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  // let userLoggedIn = true;

  const news = [
    { id: 1, title: "Логарифмы и бинарный поиск" },
    { id: 2, title: "Факториал" },
    { id: 3, title: "Рекурсия" },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        {/* или можно Header title = "My List" вместо дефолтного ("To Do List")*/}
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/news" element={<News news={news} />} />
          <Route path="/newsPage/:id" element={<NewsPage news={news} />} />
          <Route path="*" element={<Missing />} />

          {/* {userLoggedIn ? <Content /> : <LoginPage />}  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

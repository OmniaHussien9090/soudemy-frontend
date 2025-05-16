import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import ProductDetails from "./components/products/ProductDetails/ProductDetails";
import "./App.css";
import PostDetails from "./components/blog/PostDetailsPage/PostDetails";
import Blog from "./components/blog/BlogPosts/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/posts" element={<Blog />}/>
        <Route path="/posts/:id" element={<PostDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;
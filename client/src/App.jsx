// import { useEffect, useState } from "react";
// import { getAllAuthors } from "./services/api";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Authors from "./pages/Authors/Authors";
import Books from "./pages/Books/Books";
import Borrowers from "./pages/Borrowers/Borrowers";
import Layout from "./components/layout/layout";
const App = () => {
  // const [authors, setAuthors] = useState([]);
  // useEffect(() => {
  //   const setData = async () => {
  //     const data = await getAllAuthors();
  //     setAuthors(data);
  //   };
  //   setData();
  // }, [authors]);

  // return (
  //   <>
  //     <div>
  //       <h1>Library Management System Project - B4F - Power Up</h1>
  //       {/* {authors &&
  //         authors.map((author) => {
  //           return (
  //             <div key={author.id}>
  //               <p>Author Name: {author.name} </p>
  //             </div>
  //           );
  //         })} */}
  //     </div>
  //   </>
  // );
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/books" element={<Books />} />
          <Route path="/borrowers" element={<Borrowers />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

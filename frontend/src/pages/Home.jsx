import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox} from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import { BsArrowLeft } from "react-icons/bs";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://book-store-backend-5t9yhlumh-arjits-projects-4f88e43c.vercel.app/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-side bg-no-repeat bg-cover bg-center bg-fixed min-h-screen ">
      <div className="p-4  backdrop-blur-[0.4rem] text-white min-h-screen">
        <div className="flex">
          <Link
            to={"/"}
            className="bg-sky-700 text-white px-4 py-1 rounded-lg w-fit hover:scale-125"
          >
            <BsArrowLeft className="text-2xl" />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="bg-sky-700 hover:scale-125 px-4 py-1 rounded-lg"
            onClick={() => setShowType("table")}
          >
            Table
          </button>
          <button
            className="bg-sky-700 hover:scale-125 px-4 py-1 rounded-lg"
            onClick={() => setShowType("card")}
          >
            Card
          </button>
        </div>
        <h1 className="text-[5rem] my-8 text-center font-semibold">Books List</h1>
        <div className="flex justify-between items-center">
        <div></div>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl hover:scale-125" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;

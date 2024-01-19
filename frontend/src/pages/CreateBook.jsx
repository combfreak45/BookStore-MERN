import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("https://book-store-backend-nine.vercel.app/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/books");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="bg-side bg-no-repeat bg-cover bg-center bg-fixed min-h-screen ">
      <div className="p-4 backdrop-blur-[0.4rem] text-white">
        <BackButton />
        <h1 className="text-[5rem] font-semibold ml-[28rem] my-1">Edit Book</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[30rem] p-4 mx-auto bg-black">
          <div className="my-1">
            <label className="text-xl mr-4 text-white">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" px-4 py-2 w-full rounded-3xl text-black"
            />
          </div>
          <div className="my-1">
            <label className="text-xl mr-4 text-white">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="px-4 py-2  w-full rounded-3xl  text-black"
            />
          </div>
          <div className="my-1">
            <label className="text-xl mr-4 text-white">Publish Year</label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="px-4 py-2  w-full rounded-3xl text-black "
            />
          </div>
          <button
            className="p-2 bg-sky-600 m-8 rounded-3xl hover:scale-110"
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBooks;





import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://book-store-backend-5t9yhlumh-arjits-projects-4f88e43c.vercel.app/books/${id}`)
      .then((response) => {
        console.log(1)
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        console.log(2)
        setLoading(false);
        console.log(3)
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Chack console");
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`https://book-store-backend-5t9yhlumh-arjits-projects-4f88e43c.vercel.app/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited successfully", { variant: "success" });
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
          <button className="p-2 bg-sky-600 m-8 rounded-3xl hover:scale-110" onClick={handleEditBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;

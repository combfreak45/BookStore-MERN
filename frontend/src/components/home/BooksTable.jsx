import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-white rounded-md bg-black">No</th>
          <th className="border border-white rounded-md bg-black">Title</th>
          <th className="border border-white rounded-md max-md:hidden bg-black">
            Author
          </th>
          <th className="border border-white rounded-md max-md:hidden bg-black">
            Publish Year
          </th>
          <th className="border border-white rounded-md bg-black">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-white rounded-md text-center bg-black">
              {index + 1}
            </td>
            <td className="border border-white rounded-md text-center bg-black">
              {book.title}
            </td>
            <td className="border border-white rounded-md text-center max-md:hidden bg-black">
              {book.author}
            </td>
            <td className="border border-white rounded-md text-center max-md:hidden bg-black">
              {book.publishYear}
            </td>
            <td className="border border-white rounded-md text-center bg-black">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-100 bg-black hover:scale-110" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-100 bg-black  hover:scale-110" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-900 bg-black  hover:scale-110" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;

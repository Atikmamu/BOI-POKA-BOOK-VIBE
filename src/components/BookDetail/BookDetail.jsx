import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utility/addToDB";

const BookDetail = () => {
  const { bookId } = useParams();

  const data = useLoaderData();
  const id = parseInt(bookId);

  //   console.log(typeof bookId, typeof id, typeof data[0].bookId);

  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    rating,
    yearOfPublishing,
    publisher,
  } = book;


  const handleMarkAsRead = (id) => {
       /**
        * 1. understand what to score or save: => bookId 
        * 2. where to store: database 
        * 3. array, list, collection: 
        * 4. check: if the book is already in the readList. 
        * 5. if not, then add the book to the list 
        * 6. if yes, do not add the book 
        */


       addToStoredReadList(id);
  }

  const handleAddToWishList = (id) => {
        addToStoredWishList(id);
  }

  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">{bookName}</h1>
          <h2 className="text-3xl font-bold">By: {author}</h2>
          <div className="divider"></div>
          <h2 className="text-3xl font-bold">{category}</h2>
          <div className="divider"></div>
          <p class="py-6">
            {review}
          </p>
          <button className="btn btn-xs bg-green-200
                 text-green-500">{tags}</button>
                 <div className="divider"></div>
          <h3 className="text-xl font-bold">Number of Pages: <span>{totalPages}</span></h3>
          <h3 className="text-xl font-bold">Publisher: <span>{publisher}</span></h3>
          <h3 className="text-xl font-bold">Year of Publishing: <span>{yearOfPublishing}</span></h3>
          <h3 className="text-xl font-bold mb-3">Rating: <span>{rating}</span></h3>
          <button onClick={() => handleMarkAsRead(bookId)} class="btn btn-outline mr-4 btn-accent">Mark as Read</button>
          <button onClick={() => handleAddToWishList(bookId)} class="btn btn-accent">Add to Wish List</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

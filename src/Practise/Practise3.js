import axios from "axios";
import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import Switch from "react-js-switch";
const Practise3 = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [address, setAddress] = useState("");
  const [emaail, setEmaail] = useState("");
  const [showGet, setShowGet] = useState([]);
  const handleSubmit = async () => {
    let datas = { name, author, address, emaail };
    let reponsepost = await axios.post(
      "http://localhost:3000/resturants",
      datas
    );

    console.log(reponsepost.data);
  };
  const [searchProduct, setSearchProduct] = useState("");
  const [showSearch, setShowSearch] = useState([]);
  const handleSearch = async (e) => {
    let inputVal = e.target.value;
    const respnseSearc = await axios.get(
      `https://dummyjson.com/products/search?q=${inputVal}`
    );
    setSearchProduct(inputVal);
    setShowSearch(respnseSearc.data.products);
  };
  const [todoVal, setTdo] = useState("");
  const [list, setList] = useState([]);
  const handleClick = () => {
    setList([...list, todoVal]);
    setTdo(" ");
  };
  const handleChangeTodo = (e) => {
    setTdo(e.target.value);
  };
  const handleDeleteTodo = (id) => {
    setList(list.filter((lists) => lists.id != id));
  };

  const handleClickGet = async () => {
    try {
      const responseClcik = await axios.get(
        "https://reqres.in/api/users?page=2"
      );
      setShowGet(responseClcik.data.data);
      console.log("responseClcik.data.per_page", responseClcik.data.per_page);
    } catch (error) {
      console.error(error);
    }
  };
  const handledeleteGet = async (id) => {
    try {
      if (!id) {
        console.log("notid");
        return;
      } else {
        const re = await axios.delete(`https://reqres.in/api/users?page=${id}`);
        handleClickGet();
        console.log("res.data.data", re.data.data);
      }
    } catch (error) {}
  };
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const switch_onChange_handle = (id) => {
    setIsSwitchOn(id);
  };
  const [getDataApi, setgetDataApi] = useState([]);
  const getProductData = async () => {
    const url = "https://dummyjson.com/products";
    const response = await axios.get(url);
    const products = response.data.products;
    setgetDataApi(products);
  };

  useEffect(() => {
    getProductData();
  }, []);
  console.log("111111111111111", getDataApi);

  const [dataPhoto, setDataPhoto] = useState([]);

  const handleClickNow = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      //   setLoading(false);
      setDataPhoto(response.data);

      console.warn("responseresponseresponse12", response.data.title);
    } catch (error) {
      // setLoading(true);
      console.error(error);
    }
  };

  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}`
      );

      setPhotos(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };


  const [showTodo, setShowTodo] = useState([]);
  const handleClickTodo = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setShowTodo(response.data);
    } catch (error) {}
  };
  return (
    <>
      <h1>Practise3</h1>
      <input
        typeof="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        typeof="text"
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        typeof="text"
        placeholder="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        typeof="email"
        placeholder="name"
        value={emaail}
        onChange={(e) => setEmaail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <input
        value={searchProduct}
        onChange={handleSearch}
        placeholder="search your products here "
      />
      {showSearch.map((shows) => {
        return <p>{shows.title}</p>;
      })}
      <h1>Todo List</h1>

      <input
        value={todoVal}
        onChange={handleChangeTodo}
        placeholder="todo here"
      />
      <button onClick={handleClick}>Add</button>
      {list.map((items) => {
        return (
          <ul>
            <li>
              {items}{" "}
              <button onClick={(id) => handleDeleteTodo(items.id)}>
                Delete
              </button>
            </li>
          </ul>
        );
      })}
      <button onClick={handleClickGet}>click to get data</button>

      {showGet.map((items) => (
        <div>
          <p>{items.email}</p>
          <button onClick={(id) => handledeleteGet(items.id)}>delete</button>
        </div>
      ))}

      <button onClick={fetchData}>click now</button>
      {dataPhoto.map((items) => {
        <img src={items.url} alt="pic" />;
      })}
      <ul>
        {isLoading ? (
          <h4>Loading...</h4>
        ) : (
          photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.title}</p>
            </li>
          ))
        )}
      </ul>

      <button onClick={handleClickTodo}>Click to show todo</button>

      {showTodo.map((todoItems) => (
        <>
          <p>{todoItems.title}</p>
          <Switch
            value={todoItems.completed}
            onChange={(id) => switch_onChange_handle(todoItems.id)}
          />
        </>
      ))}

      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default Practise3;

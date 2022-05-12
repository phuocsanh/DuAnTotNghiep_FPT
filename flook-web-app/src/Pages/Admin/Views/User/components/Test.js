import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { UpdateUserAction } from "../../../Redux/Action/AuthAction";
import qs from "qs";


export default function Test() {
  const [uploadFile, setUploadFile] = React.useState();
  const [superHero, setSuperHero] = React.useState();
  const dispatch = useDispatch();
  const URL = "http://localhost:8000/api/user-management/update/62306bd11af8ff64e7cbe094"
  const submitForm = (event) => {

    event.preventDefault();

    // const dataArray = new FormData();
    // dataArray.append("superHeroName", superHero);
    // dataArray.append("uploadFile", uploadFile);
    const dataArray = {
      name: "sanh",
      age: 27
    }

    axios({
      method: "PUT",
      url: URL,
      data: dataArray,
      headers: {
        'Content-Type': "application/json",
      },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    // for (var value of dataArray.values()) {
    //   console.log("values data", value);
    // }

    // dispatch(UpdateUserAction("62306bd11af8ff64e7cbe094", dataArray, "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTczNGQ2NjA1ZGZiMTc1YWJjMmQwMiIsImlhdCI6MTYzOTgxMjE1OSwiZXhwIjozNjAwMTYzOTgxMjE1OX0.v9BkqHGVwAdSswSRv3RRpRkTp53C7JYKyJ-rEtyKHFI"))
    // console.log("submit form")
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          onChange={(e) => setSuperHero(e.target.value)}
          placeholder={"Superhero Name"}
        />
        <br />
        <input type="file" onChange={(e) => setUploadFile(e.target.files)} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
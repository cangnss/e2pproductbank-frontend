import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CategoryDetail() {
  const params = useParams();
  const id = params?.id;
  useEffect(() => {
    getCategory(id);
  }, []);

  const getCategory = async (id) => {
    console.log(typeof +id);

    await axios
      .get(
        `https://localhost:7182/api/Categories/getcategorydetail?id=${id}`,
      )
      .then((res) => {
        console.log(res);
      });
  };

  return <div></div>;
}

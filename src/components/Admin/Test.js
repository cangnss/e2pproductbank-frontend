import axios from "axios";

export default function Test() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      categoryId: 1,
      productName: "string",
      productVendor: "string",
      productDescription: "string",
      productImage: "string",
      category: {
        id: 0,
        categoryName: "string",
      },    
    };
    const res = await axios.post(
      "https://localhost:7182/api/Products/addproduct",
      { headers: { "Content-Type": "application/json" } },
      { data }
    );

    console.log(res);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

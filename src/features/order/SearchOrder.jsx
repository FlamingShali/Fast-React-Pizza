import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
const SearchOrder = () => {
  const [query, setQuery] = useState();

  const navigate = useNavigate();

  const handlerSubmit = function (e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div>
        <input
          placeholder="Search order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
};

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default SearchOrder;

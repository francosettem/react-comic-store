import "./Checkout.css";
import { useCart } from "../../contexts/CartContext";

export const Checkout = () => {
  const { cartStatus, clear } = useCart(); 

  const totalPrice = cartStatus.reduce((a, b) => a + b.price * b.counter, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    clear();
  };

  return (
    <div className="checkout">
      {cartStatus.length ? (
        <>
          <p>To Pay: ${totalPrice}</p>
          <hr />
          <form onSubmit={handleSubmit}>
            <label for="fname">First name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Your First Name"
              required
            />
            <label for="lname">Last name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Your Last Name"
              required
            />
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@hotmail.com"
              required
            />
            <label for="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Argentina..."
              required
            />
            <button type="submit">Buy</button>
          </form>
        </>
      ) : (
        <p>Thank you for your order 😉</p>
      )}
    </div>
  );
};

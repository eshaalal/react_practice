import styled from "styled-components";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import CartItem from "../components/CartItem";

const Profile = () => {
  const user = useSelector((state) => state.user); // Assuming user info is in Redux

  return (
    <Container>
      <h1>Welcome, {user?.name}!</h1>
      {/* Your profile content, wishlist, cart items, etc. */}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  color: #333;
`;

export default Profile;

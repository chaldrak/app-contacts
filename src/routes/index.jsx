import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListingContacts from "../pages/contacts";

const Routage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListingContacts />} />
      </Routes>
    </Router>
  );
};

export default Routage;

import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import PlansPage from "./views/PlansPage";
import NotFound from "./views/NotFound";
import Contacto from "./views/Contacto"
import Registro1 from "./views/Registro";

const App = () => {
return (
<div>
<Navigation />
<Routes>
<Route
path="/"
element={<HomePage />}
/>
<Route
path="/planes"
element={<PlansPage />}
/>
<Route
path="/Registro"
element={<Registro1 />}
/>
<Route
path="*"
element={<NotFound/>}
/>
<Route
path="/contacto"
element={<Contacto/>}
/>
</Routes>

</div>
);
};
export default App;
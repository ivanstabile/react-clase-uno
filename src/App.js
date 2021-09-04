import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/navBar/NavBar.js";
import { ItemListComponent } from "./components/container/ItemListComponent.js";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CarouselComponent } from "./components/CarouselComponent/CarouselComponent";
import { CartScreen } from "./components/CartScreen/CartScreen";
import { CartProvider } from "./Context/Context";

function App() {
    return (
        <div className="App">
            <CartProvider>
                <BrowserRouter>
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <CarouselComponent />
                            <ItemListComponent />
                        </Route>
                        <Route exact path="/genre/:genreId">
                            <ItemListComponent />
                        </Route>
                        <Route exact path="/details/:itemId">
                            <ItemDetailContainer />
                        </Route>
                        <Route exact path="/cart">
                            <CartScreen />
                        </Route>
                        <Route path="*">
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;

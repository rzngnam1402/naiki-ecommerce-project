import { createContext, useState } from "react";

const ShoppingCartContext = createContext({
    products: [],
    cart: [],
    addToCart: function () { },
    reduceQuantity: function () { },
    increaseQuantity: function () { },
    removeProduct: function () { },
    totalPrice: function () { },
});

export function ShoppingCartContextProvider(props) {
    const [cart, setCart] = useState([]);

    function addToCartHandler(product) {
        const check = cart.every((item) => item.ShoesID !== product.ShoesID);

        if (check) {
            setCart([...cart, { ...product }]);
        } else {
            alert("Item has been added to the cart");
        }
    }

    function reduceQuantity(id) {
        cart.map((item) => {
            if (item.ShoesID === id) {
                item.Count === 1 ? (item.Count = 1) : (item.Count -= 1);
            }
        });
        setCart([...cart]); // mutation
    }

    function increaseQuantity(id) {
        cart.map((item) => {
            if (item.ShoesID === id) {
                item.Count += 1;
            }
        });
        setCart([...cart]);
    }

    function removeProduct(id) {
        if (window.confirm("Bạn muốn xóa sản phẩm này?")) {
            cart.forEach((item, index) => {
                if (item.ShoesID === id) {
                    cart.splice(index, 1);
                }
            });
            setCart([...cart]);
        }
    }

    function totalPrice() {
        const res = cart.reduce((prev, item) => {
            return Number(prev) + Number(item.Price);
        }, 0);
        return `$${res}`;
    }

    const context = {
        // products: allProducts,
        cart: cart,
        addToCart: addToCartHandler,
        reduceQuantity: reduceQuantity,
        increaseQuantity: increaseQuantity,
        removeProduct: removeProduct,
        totalPrice: totalPrice,
    };

    return (
        <ShoppingCartContext.Provider value={context}>
            {props.children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartContext;
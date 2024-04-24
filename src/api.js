
// Send product (POST)
export const sendData = async (name, quantity) => {
    let data = {
        "name": name,
        "input": quantity,
        "output": 0
    };

    try {
        const response = await fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            throw new Error("Request error.");
        };
    } catch (error) {
        console.error(error);
    }
}

// Products search (GET)
export const fetchingData = async (products) => {
    try {
      const response = await fetch("http://localhost:3001/products");
      if (!response.ok) {
        throw new Error('Request error..');
      }
      const data = await response.json();
      products(data);
    } catch (error) {
      console.error('Erro:', error);
    }
};

export function situationProduct (a, b) {
    return a - b <= 5 ? "comprar" : "ok";
}


// Update product (PUT)
export const updateProductInput = async (id, quantity, error) => {
    try {
        const response = await fetch(`http://localhost:3001/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({"input": quantity})
        })

        if(!response.ok) {
            error("block")
            throw new Error("Product update error");
        }
        error("hidden")
        console.log("Input update successfully done")
    } catch (error) {
        console.error(error)
    }
}

export const updateProductOutput = async (id, quantity, error) => {
    try {
        const response = await fetch(`http://localhost:3001/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({"output": quantity})
        })
    
        if(!response.ok) {
            error("block")
            throw new Error("Product update error");
        }
        error("hidden")
        console.log("Updated product!")
    } catch (error) {
        console.error(error)
    }
}


// Deleting product (DELETE)
export const deleteProduct = async (id, products) => {
    try {
        const response = await fetch(`http://localhost:3001/products/${id}`, {
            method: "DELETE"
        })
        if(!response.ok) {
            throw new Error("Error deleting product.");
        }
        console.log("Product succesfully deleted");
        fetchingData(products)
    } catch (error) {
        console.error("Error deleting product", error);
    }
}
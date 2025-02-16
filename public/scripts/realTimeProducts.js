const socket = io();

// Escuchar eventos de productos desde el servidor y actualizar la tabla
socket.on("products", (data) => {
    const productsTemplate = data.map((product) => `
        <tr class="product-row">
            <td class="product-id">${product._id}</td>
            <td class="product-title">${product.title}</td>
            <td class="product-price">$${product.price}</td>
            <td class="product-stock">${product.stock}</td>
            <td><button class="btn product-delete" onclick="deleteProduct('${product._id}')">Eliminar</button></td>
        </tr>
    `).join("");
    document.querySelector("#products").innerHTML = productsTemplate;
});

// Evento para agregar un nuevo producto
document.querySelector("#addProduct").addEventListener("click", async () => {
    const title = document.querySelector("#title").value;
    const price = document.querySelector("#price").value;
    const stock = document.querySelector("#stock").value;

    const product = { title, price, stock };
    socket.emit("new product", product);

    // Limpiar los campos de entrada
    document.querySelector("#title").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#stock").value = "";
});

// Función para eliminar un producto
function deleteProduct(productId) {
    socket.emit("delete product", productId);
}

// Agregar estilos CSS 
const style = document.createElement("style");
style.innerHTML = `
    body {
        background-color: #ffffff; 
        font-family: 'Arial', sans-serif;
        color: #444;
        text-align: center;
    }

    h1 {
        color: #6cbf84; /* Verde pastel */
        margin-bottom: 15px;
    }

    .product-form input {
        width: 100%;
        padding: 10px;
        margin: 8px 0;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
    }

    .btn-add {
        background-color: #6cbf84;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        width: 100%;
    }

    .btn-add:hover {
        background-color: #5aaf74;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
        background: white;
    }

    th, td {
        padding: 12px;
        border-bottom: 1px solid #ddd;
    }

    th {
        background: #ffffff; 
        color: white;
    }

    .product-row:nth-child(even) {
        background: #ffffff;
    }

    .product-id {
        font-weight: bold;
        color: #6c757d;
    }

    .product-title {
        font-size: 1.1rem;
        color: #212529;
    }

    .product-price {
        font-weight: bold;
        color: #70a1d7; /* Azul pastel */
    }

    .product-stock {
        font-weight: bold;
        color: #6cbf84; /* Verde pastel */
    }

    .product-delete {
        background-color: #ff6b6b; /* Rojo coral */
        border: none;
        color: white;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
    }

    .product-delete:hover {
        background-color: #e85c5c;
    }
`;
document.head.appendChild(style);

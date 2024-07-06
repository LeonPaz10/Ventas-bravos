const products = [
    {
       
        Marca: 'Mamma Pro',
        Sabor: 'Limon',
        puffs: '1000',
        precioMayorista: '$12.000',
        precioUnidad: '$2500',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Yoop Flow',
        Sabor: 'Sandia',
        puffs: '1500',
        precioMayorista: '$30.000',
        precioUnidad: '$4.500',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Yoop Flow',
        Sabor: 'Melon',
        puffs: '1500',
        precioMayorista: '$30.000',
        precioUnidad: '$4.500',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Jim',
        Sabor: 'Mango',
        puffs: '2000',
        precioMayorista: '$45.000',
        precioUnidad: '$5.000',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Jim',
        Sabor: 'Guava',
        puffs: '2000',
        precioMayorista: '$45.000',
        precioUnidad: '$5.000',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Jim',
        Sabor: 'Sandia',
        puffs: '2000',
        precioMayorista: '$45.000',
        precioUnidad: '$5.000',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Jim',
        Sabor: 'Banana',
        puffs: '2000',
        precioMayorista: '$45.000',
        precioUnidad: '$5.000',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Ignite v50',
        Sabor: '-',
        puffs: '5000',
        precioMayorista: '12 usd',
        precioUnidad: '17 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Ignite v80',
        Sabor: 'Blueberry lemon',
        puffs: '8000',
        precioMayorista: '13 usd',
        precioUnidad: '18 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Ignite v80',
        Sabor: 'Grape Fruit min',
        puffs: '8000',
        precioMayorista: '13 usd',
        precioUnidad: '18 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Ignite v80',
        Sabor: 'Green Apple',
        puffs: '8000',
        precioMayorista: '13 usd',
        precioUnidad: '18 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Ignite v150',
        Sabor: 'Green Apple',
        puffs: '15000',
        precioMayorista: '16 usd',
        precioUnidad: '19 usd',
        Descripcion: '5 u. Por caja'
    },

    {
      
        Marca: 'Off-white',
        Sabor: 'uva',
        puffs: '6000',
        precioMayorista: '60 usd',
        precioUnidad: '6 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Off-white',
        Sabor: 'chicle',
        puffs: '6000',
        precioMayorista: '60 usd',
        precioUnidad: '6 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Off-white',
        Sabor: 'Banana',
        puffs: '6000',
        precioMayorista: '60 usd',
        precioUnidad: '6 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Off-white',
        Sabor: 'Frutilla mango',
        puffs: '6000',
        precioMayorista: '60 usd',
        precioUnidad: '6 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Off-white',
        Sabor: 'Frutilla',
        puffs: '6000',
        precioMayorista: '60 usd',
        precioUnidad: '6 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Off-white',
        Sabor: 'Sandia',
        puffs: '6000',
        precioMayorista: '60 usd',
        precioUnidad: '6 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Off-white',
        Sabor: 'Anana',
        puffs: '6000',
        precioMayorista: '60 usd',
        precioUnidad: '6 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Tornado',
        Sabor: 'Doble Apple',
        puffs: '6000',
        precioMayorista: '8 usd',
        precioUnidad: '8 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Tornado',
        Sabor: 'Grape',
        puffs: '6000',
        precioMayorista: '8 usd',
        precioUnidad: '8 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Tornado',
        Sabor: 'Straw watermelon',
        puffs: '6000',
        precioMayorista: '8 usd',
        precioUnidad: '8 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Tornado',
        Sabor: 'Red apple limon',
        puffs: '6000',
        precioMayorista: '8 usd',
        precioUnidad: '8 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Tornado',
        Sabor: 'Blueraz',
        puffs: '6000',
        precioMayorista: '8 usd',
        precioUnidad: '8 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Tornado',
        Sabor: 'Menta',
        puffs: '6000',
        precioMayorista: '8 usd',
        precioUnidad: '8 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Frozen',
        Sabor: 'Guava',
        puffs: '7000',
        precioMayorista: '9 usd',
        precioUnidad: '12 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Frozen',
        Sabor: 'Mamba',
        puffs: '7000',
        precioMayorista: '9 usd',
        precioUnidad: '12 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Frozen',
        Sabor: 'Mango',
        puffs: '7000',
        precioMayorista: '9 usd',
        precioUnidad: '12 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Geekbar',
        Sabor: '-',
        puffs: '9000',
        precioMayorista: '13 usd',
        precioUnidad: '18 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Geekbar',
        Sabor: 'Black cherry',
        puffs: '15000',
        precioMayorista: '15 usd',
        precioUnidad: '20 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Geekbar',
        Sabor: 'Blue rraz',
        puffs: '15000',
        precioMayorista: '15 usd',
        precioUnidad: '20 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Geekbar',
        Sabor: 'Blueberry watermelon',
        puffs: '15000',
        precioMayorista: '15 usd',
        precioUnidad: '20 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Geekbar',
        Sabor: 'Grape blow pop',
        puffs: '15000',
        precioMayorista: '15 usd',
        precioUnidad: '20 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Geekbar',
        Sabor: 'Watermelon',
        puffs: '15000',
        precioMayorista: '15 usd',
        precioUnidad: '20 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Geekbar',
        Sabor: 'Gummy ',
        puffs: '15000',
        precioMayorista: '15 usd',
        precioUnidad: '20 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Geekbar',
        Sabor: 'Cherry',
        puffs: '15000',
        precioMayorista: '15 usd',
        precioUnidad: '20 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Elfbar lost mary',
        Sabor: 'Peach berry',
        puffs: '10000',
        precioMayorista: '12 usd',
        precioUnidad: '16 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Elfbar lost mary',
        Sabor: 'Match mint',
        puffs: '10000',
        precioMayorista: '12 usd',
        precioUnidad: '16 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Elfbar lost mary',
        Sabor: 'Blue raz ice',
        puffs: '10000',
        precioMayorista: '12 usd',
        precioUnidad: '16 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Elfbar lost mary',
        Sabor: 'Kiwi passion fruit Guava',
        puffs: '10000',
        precioMayorista: '12 usd',
        precioUnidad: '16 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Elfbar lost mary',
        Sabor: 'Peach plus ice',
        puffs: '10000',
        precioMayorista: '12 usd',
        precioUnidad: '16 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Elfbar lost mary',
        Sabor: 'Watermelon ice',
        puffs: '10000',
        precioMayorista: '12 usd',
        precioUnidad: '16 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Elfbar lost mary',
        Sabor: 'Green mango',
        puffs: '10000',
        precioMayorista: '12 usd',
        precioUnidad: '16 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Elfbar lost mary',
        Sabor: 'Pineapple lemon watermelon',
        puffs: '10000',
        precioMayorista: '12 usd',
        precioUnidad: '16 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Elfbar lost mary',
        Sabor: 'Strawberry apple grabe',
        puffs: '10000',
        precioMayorista: '12 usd',
        precioUnidad: '16 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Elfbar lost mary',
        Sabor: 'Mango peach watermelon',
        puffs: '10000',
        precioMayorista: '12 usd',
        precioUnidad: '16 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Elfbar lost mary',
        Sabor: 'Strawberry Smoothie',
        puffs: '10000',
        precioMayorista: '12 usd',
        precioUnidad: '16 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Elfbar lost mary m',
        Sabor: '',
        puffs: '15000',
        precioMayorista: '16 usd',
        precioUnidad: '21 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Elfbar fs',
        Sabor: '',
        puffs: '18000',
        precioMayorista: '18 usd',
        precioUnidad: '18 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Elfbar lost mary',
        Sabor: '',
        puffs: '20000',
        precioMayorista: '18',
        precioUnidad: '18 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Elfbar gh',
        Sabor: '',
        puffs: '23000',
        precioMayorista: '18 usd',
        precioUnidad: '23 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Lamborghini',
        Sabor: 'Grape ice',
        puffs: '12000',
        precioMayorista: '15 usd',
        precioUnidad: '15 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Lamborghini',
        Sabor: 'Blueberry ice',
        puffs: '12000',
        precioMayorista: '15 usd',
        precioUnidad: '15 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Lamborghini',
        Sabor: 'Frutilla con banana',
        puffs: '12000',
        precioMayorista: '15 usd',
        precioUnidad: '15 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Lamborghini',
        Sabor: 'Triple berry',
        puffs: '12000',
        precioMayorista: '15 usd',
        precioUnidad: '15 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Lamborghini',
        Sabor: 'Black ice',
        puffs: '12000',
        precioMayorista: '15 usd',
        precioUnidad: '15 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Vape soul',
        Sabor: 'Cola lime',
        puffs: '12000',
        precioMayorista: '11 usd',
        precioUnidad: '13 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Vape soul',
        Sabor: 'Luche ice',
        puffs: '12000',
        precioMayorista: '11 usd',
        precioUnidad: '13 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Vape soul',
        Sabor: 'Spear mint ',
        puffs: '12000',
        precioMayorista: '11 usd',
        precioUnidad: '13 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Vape soul',
        Sabor: 'Lemon lime',
        puffs: '12000',
        precioMayorista: '11 usd',
        precioUnidad: '13 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Archer',
        Sabor: 'Frutilla con banana',
        puffs: '12000',
        precioMayorista: '12 usd',
        precioUnidad: '12 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Archer',
        Sabor: 'Sandia',
        puffs: '12000',
        precioMayorista: '12 usd',
        precioUnidad: '12 usd',
        Descripcion: '10 u. Por caja'
    },


    {
      
        Marca: 'Vapengin',
        Sabor: '-',
        puffs: '20000',
        precioMayorista: '16 usd',
        precioUnidad: '20 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Oxbar',
        Sabor: 'Blueberry rasperry lemon',
        puffs: '30000',
        precioMayorista: '17 usd',
        precioUnidad: '17 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Oxbar',
        Sabor: 'watermelon mint',
        puffs: '30000',
        precioMayorista: '17 usd',
        precioUnidad: '17 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Oxbar',
        Sabor: 'Straw water dragon fr',
        puffs: '30000',
        precioMayorista: '17 usd',
        precioUnidad: '17 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Oxbar',
        Sabor: 'White grape',
        puffs: '30000',
        precioMayorista: '17 usd',
        precioUnidad: '17 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'Oxbar',
        Sabor: 'Peach blue rraz',
        puffs: '30000',
        precioMayorista: '17 usd',
        precioUnidad: '17 usd',
        Descripcion: '10 u. Por caja'
    },

    {
      
        Marca: 'Sky Solo plus',
        Sabor: '-',
        puffs: '-',
        precioMayorista: '27 usd',
        precioUnidad: '37 usd',
        Descripcion: 'Equipo'
    },
    {
      
        Marca: 'Sky Solo',
        Sabor: '-',
        puffs: '-',
        precioMayorista: '25 usd',
        precioUnidad: '35 usd',
        Descripcion: 'Equipo'
    },
    {
      
        Marca: 'Smok',
        Sabor: '-',
        puffs: '-',
        precioMayorista: '18 usd',
        precioUnidad: '28 usd',
        Descripcion: 'Equipo'
    },
    {
      
        Marca: 'Smok fortis kit',
        Sabor: '-',
        puffs: '-',
        precioMayorista: '25 usd',
        precioUnidad: '35 usd',
        Descripcion: 'Equipo'
    },
    {
      
        Marca: 'Smok r-kiss 2',
        Sabor: '-',
        puffs: '-',
        precioMayorista: '35 usd',
        precioUnidad: '45 usd',
        Descripcion: 'Equipo'
    },
    {
      
        Marca: 'Hookalit',
        Sabor: '-',
        puffs: '40000',
        precioMayorista: '30 usd',
        precioUnidad: '40 usd',
        Descripcion: '10 u. Por caja'
    },
    {
      
        Marca: 'VAPORESSO GTX GO 40 ',
        Sabor: '-',
        puffs: '-',
        precioMayorista: '23 usd',
        precioUnidad: '33 usd',
        Descripcion: 'Equipo'
    },
    {
      
        Marca: 'Yoop ',
        Sabor: '-',
        puffs: '-',
        precioMayorista: '4 usd',
        precioUnidad: '4 usd',
        Descripcion: 'Esencias'
    },





    
];



const brandFilter = document.getElementById('brandFilter');
const flavorFilter = document.getElementById('flavorFilter');
const puffsFilter = document.getElementById('puffsFilter');
const productTableBody = document.querySelector('#productTable tbody');

// Generar las opciones de los filtros dinámicamente
const brands = [...new Set(products.map(product => product.Marca))];
brands.forEach(brand => {
    const option = document.createElement('option');
    option.value = brand;
    option.textContent = brand;
    brandFilter.appendChild(option);
});

const flavors = [...new Set(products.map(product => product.Sabor))];
flavors.forEach(flavor => {
    const option = document.createElement('option');
    option.value = flavor;
    option.textContent = flavor;
    flavorFilter.appendChild(option);
});

const puffs = [...new Set(products.map(product => product.puffs))];
puffs.forEach(puff => {
    const option = document.createElement('option');
    option.value = puff;
    option.textContent = puff;
    puffsFilter.appendChild(option);
});

// Función para mostrar los productos en la tabla
function displayProducts(productsToDisplay) {
    productTableBody.innerHTML = '';
    productsToDisplay.forEach(product => {
        const row = document.createElement('tr');
        
        // Iterar sobre las propiedades del producto para crear las celdas
        Object.keys(product).forEach(key => {
            const cell = document.createElement('td');
            cell.textContent = product[key];
            cell.setAttribute('data-label', key); // Asignar el atributo data-label con el nombre de la propiedad
            row.appendChild(cell);
        });
        
        productTableBody.appendChild(row);
    });
}

// Mostrar todos los productos al cargar la página
displayProducts(products);

// Filtrar productos según los filtros seleccionados
function filterProducts() {
    const selectedBrand = brandFilter.value;
    const selectedFlavor = flavorFilter.value;
    const selectedPuffs = puffsFilter.value;

    const filteredProducts = products.filter(product => {
        return (selectedBrand === '' || product.Marca === selectedBrand) &&
               (selectedFlavor === '' || product.Sabor === selectedFlavor) &&
               (selectedPuffs === '' || product.puffs === selectedPuffs); // Comparar directamente como cadena
    });

    displayProducts(filteredProducts);
}

// Añadir event listeners a los filtros
brandFilter.addEventListener('change', filterProducts);
flavorFilter.addEventListener('change', filterProducts);
puffsFilter.addEventListener('change', filterProducts);
// Define a class for Smoothie
class Smoothie {
    constructor(ingredients, size, quantity) 
    {
        this.ingredients = ingredients;
        this.size = size;
        this.quantity = quantity;
    }
}

// Function to capture form data and create a smoothie object
function orderSmoothie(event) {
    event.preventDefault();

    // Get form inputs
    const ingredients = document.getElementById('ingredients').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;

    // Create a new smoothie object
    const smoothie = new Smoothie(ingredients, size, quantity);
    
    // Display smoothie description
    displaySmoothieDescription(smoothie);
}

// Function to display smoothie description on the HTML page
function displaySmoothieDescription(smoothie) {
    const description = `You ordered ${smoothie.quantity} ${smoothie.size} smoothie with ${smoothie.ingredients}.`;
    document.getElementById('smoothieDescription').textContent = description;
}

// Event listener for form submission
document.getElementById('smoothieForm').addEventListener('submit', orderSmoothie);

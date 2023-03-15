function predict() {
    // setting variables and getting their values from HTML form
    var Area, BHK, Bathroom, Furnishing, Parking, Transaction, Type, Price;
    Area = parseInt(document.getElementById("Area").value);
    BHK = parseInt(document.getElementById("BHK").value);
    Bathroom = parseInt(document.getElementById("Bathroom").value);
    Furnishing = parseInt(document.getElementById("Furnishing").value);
    Parking = parseInt(document.getElementById("Parking").value);
    Transaction = parseInt(document.getElementById("Transaction").value);
    Type = parseInt(document.getElementById("Type").value);

    // Predicting price using weights and intercept obtained from model
    Price = ( (4964.81366 * Area) + (-98776.0010 * BHK) + (13512429.0 * Bathroom) + (1410055.66 * Furnishing) + (4224755.48 * Parking) + (-3626006.60 * Transaction) + (-737972.534 * Type) + -24853306.80254696 )

    // Formatting the number to have commas and make it more readable in the Indian format
    const num_format = Intl.NumberFormat('en-IN')

    // Outputting the Price to HTML file
    document.getElementById("answer").innerText =  "Price : " + num_format.format(Math.abs(Math.round(Price)));
}
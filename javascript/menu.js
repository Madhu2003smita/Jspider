function displayMenu( ) {

    console.log("Menu card:");
    console.log("1. Pizza");
    console.log("2. Burger");
    console.log("3. Pasta");
    console.log("4. Salad");
    console.log("Please select a dish by entering the corresponding number");
}
    function selectDish(dishNumber){
    switch (dishNumber) {
        case 1:
            console.log("You selected Pizza.");
            break;
        case 2:
            console.log("You selected Burger.");
            break;
        case 3:
            console.log("You selected Pasta.");
            break;
        case 4:
            console.log("You selected Salad.");
            break;
        default:
            console.log("Invalid selection. Please select a number between 1 and 4.");
    }
}

displayMenu();
const userSelection = 2;
selectDish(userSelection);

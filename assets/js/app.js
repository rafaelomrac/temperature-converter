const main = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {

        input.addEventListener("input", event => {
            
            const id = event.target.id;
            const value = event.target.value;


            conversion(id, value);
        });
    });
};

const conversion = (id, value) => {

    const celsius = document.getElementById("celsius");
    const fahrenheit = document.getElementById("fahrenheit");
    const kelvin = document.getElementById("kelvin");

    if (id === "celsius") {
        fahrenheit.value = (value * 1.8) + 32;
        kelvin.value = value + 273.15;

        return
    };

    if (id === "fahrenheit") {
        celsius.value = (value - 32) / 1.8;
        kelvin.value = (value - 32) / 1.8 + 273.15;

        return
    };

    if (id === kelvin) {
        fahrenheit.value = ((value - 273.15) * 1.8) + 32;
        celsius.value = (value - 273.15);

        return
    };

};

main();
function converct_to_celcius() {
    let convertedNumber = (get_number() - 32) * 5 / 9
    game.showLongText(convertedNumber + " grados celcius", DialogLayout.Top)
}

function convert_to_fahrenheit() {
    let convertedNumber = get_number() * 9 / 5 + 32
    game.showLongText(convertedNumber + " grados celcius", DialogLayout.Top)
}

function get_number(): number {
    let numberToConver = game.askForNumber("Introduce los grados a convertir")
    if (numberToConver <= 0) {
        game.showLongText("introduce un numero valido", DialogLayout.Top)
        get_number()
    }
    
    return Math.trunc(numberToConver)
}

function get_input_number() {
    let numberType = game.askForNumber("1- Convert to celcius   2- Convert to fahrenhei")
    return Math.trunc(numberType)
}

function menu() {
    let number = get_input_number()
    if (number == 1) {
        converct_to_celcius()
    } else if (number == 2) {
        convert_to_fahrenheit()
    } else {
        game.showLongText("Introduce una opcion valida", DialogLayout.Top)
        menu()
    }
    
}

menu()

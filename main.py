def converct_to_celcius():
    convertedNumber = (get_number() - 32) * 5 / 9
    game.show_long_text(convertedNumber + " grados celcius", DialogLayout.TOP)

def convert_to_fahrenheit():
    convertedNumber = get_number() * 9 / 5 + 32
    game.show_long_text(convertedNumber + " grados celcius", DialogLayout.TOP)
    
def get_number():
    numberToConver = game.ask_for_number("Introduce los grados a convertir")
    if numberToConver <= 0:
        game.show_long_text("introduce un numero valido", DialogLayout.TOP)
        get_number()
    return int(numberToConver)

def get_input_number():
    numberType = game.ask_for_number("1- Convert to celcius   2- Convert to fahrenhei")
    return int(numberType)

def menu():
    number = get_input_number()
    if (number == 1):
        converct_to_celcius()
    elif (number == 2):
        convert_to_fahrenheit()
    else :
        game.show_long_text("Introduce una opcion valida", DialogLayout.TOP)
        menu()

menu()
# Definimos la función para convertir Celsius a Fahrenheit
def convertirCelsiusAFahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

# Solicitamos al usuario la temperatura en grados Celsius
temperatura_celsius = float(input("Ingresa la temperatura en grados Celsius: "))

# Llamamos a la función y mostramos el resultado
temperatura_fahrenheit = convertirCelsiusAFahrenheit(temperatura_celsius)
print(f"{temperatura_celsius}°C es igual a {temperatura_fahrenheit}°F")

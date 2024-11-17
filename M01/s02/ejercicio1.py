# Definimos la función sumaPares
def sumaPares(limite):
    suma = 0
    for numero in range(2, limite + 1, 2):  # Itera solo por números pares
        suma += numero
    return suma

# Solicitamos al usuario el límite superior
limite_superior = int(input("Ingresa el límite superior para la suma de números pares: "))

# Llamamos a la función y mostramos el resultado
resultado = sumaPares(limite_superior)
print(f"La suma de los números pares desde 1 hasta {limite_superior} es: {resultado}")

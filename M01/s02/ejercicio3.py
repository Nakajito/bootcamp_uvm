import math  # Importamos el módulo math para utilizar el valor de π

# Definimos la función para calcular el área de un círculo
def areaCirculo(radio):
    area = math.pi * radio ** 2  # Cálculo del área utilizando π * radio²
    return area

# Solicitamos al usuario que ingrese el valor del radio
radio_usuario = float(input("Ingresa el radio del círculo: "))

# Llamamos a la función y mostramos el resultado
area = areaCirculo(radio_usuario)
print(f"El área del círculo con radio {radio_usuario} es: {area}")
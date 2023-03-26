# Human Rights CIPHER


## Índice


## 1. Descripción del proyecto
## 2. Diseño
       -Prototipo de baja
       -Prototipo de alta
       -Producto final
## 3. Funciones y aplicaciones
## 4. Consideraciones generales




## 1. Descripción del proyecto


El Human Rights CIPHER es una aplicación que permite el cifrado de un mensaje con fines de ayuda humanitaria para áreas que se encuentren en conflicto y en las cuales exista algún tipo de peligro inminente que no permita la comunicación estándar entre miembros de la organización y victimas del conflicto.


Se desarrolló esta aplicación con el fin de permitir que miembros de la organización, así como las víctimas del conflicto puedan comunicarse sin temer que el mensaje sea entendido en caso de que llegase a ser interceptado.


El cifrado y descifrado están basados en el cifrado de Cesar, un antigua método creado por el emperador Julio César, en el cual se tiene un mensaje y un desplazamiento de las letras, este desplazamiento considera las letras y posiciones de establecidas en el alfabeto latino/romano y cifra a partir del número de desplazamientos que el usuario le de. Es un método muy efectivo ya que sólo los 2 actores del conflicto mencionados anteriormente sabrán cual es el desplazamiento y derá más dificil cifrar o decifrar en caso de que sea interceptado el mensaje.


## 2. Diseño


El diseño de la aplicación se pensó con una interfaz amigable e intuitiva para el usuario. Inicialmente se muestra un breve resumen de lo que hace la organización además de una pequeña introducción a lo que hace la aplicación, además del logo de la organización que presenta el mensaje "Empowering voices, securing rights" aludiendo al objetivo principal de la aplicación que es la comunicación. En la parte superior se encuentrar varios enlaces en los cuales el usuario puede contactar a la organización, conocer más de ella etc. y en la parte inferior se encuentran enlaces para las redes sociales de la misma. Al lado derecho se encuentran los botones que permiten que el usuario escoja si desea cifrar o descifrar, y dependiendo de lo que escoja lo llevara a una pagina donde puede insertar el texto y el desplazamiento para cifrar o descifrar.






  A continuación se evidencia el prototipo de baja fidelidad del proyecto
 
 
  ![Prototipobaja1](https://user-images.githubusercontent.com/116685936/227586731-6dd59192-20bf-4c58-a80d-90f7282f0415.png)
  ![Prototipobaja2](https://user-images.githubusercontent.com/116685936/227587919-a7651b64-1be0-494e-8b8f-0fb49cdf977e.png)
  ![Prototipobaja3](https://user-images.githubusercontent.com/116685936/227588109-eb006c1c-b35b-437f-b616-d369a4ed5805.png)
 
  En la primera sesión de feedback, se dieron las siguientes sugerencias:
  - Usar color hunt para establecer la paleta de colores
  - Estandarizar los botones y hacerlos accesibles
  - Agregar pestañas a la parte superior con enlaces a otras páginas
  - Agregar redes sociales en la parte inferior
 
  De las modificaciones propuestas, todas fueron implementadas. Lo único que no se implementó fue funcionalidad para las pestañas superiores al igual que funcionalidad a enlaces de redes sociales.
 
  Aquí se evidencia esntonce el prototipo de alta fidelidad:
 
 
![Prototipoalta1](https://user-images.githubusercontent.com/116685936/227589914-ccd4bbe4-8e1a-4adc-aeb0-dc5d5ea54722.png)
![Prototipoalta2](https://user-images.githubusercontent.com/116685936/227589944-87f56439-bbdc-42c8-b4d5-e9f60b0fb000.png)
![Prototipo alta3](https://user-images.githubusercontent.com/116685936/227589974-df242320-84c5-4df7-9432-8898f08edc06.png)
 
 


   En la primera segunda sesión feedback, se dieron las siguientes sugerencias:
  - No poner el texto de las pestañas superiores en cajas
  - Realizar un HTML solo para los mensajes cifrado/descifrado
 
   De las modificaciones propuestas, se implementó el cambio en las pestañas.
   
   Este fue el producto final:
   
![Productofinal1](https://user-images.githubusercontent.com/116685936/227590665-a464d46d-b513-41b8-80a6-e632416cc112.png)
![Productofinal2](https://user-images.githubusercontent.com/116685936/227591479-ae2f2eba-51ff-4f5e-8078-3fd75a53fcbe.png)
![Productofinal3](https://user-images.githubusercontent.com/116685936/227590694-b09713e8-16cc-48ad-bb52-64d7315af5cf.png)


 
## 3. Funciones y aplicaciones


Human Rights CIPHER fue creado con la función de cifrar o descifrar un mensaje según el usuario lo desee. En la interfaz principal, el usuario debe escoger si desea cifrar o descifrar un mensaje. Después de escoger, se encontrará con otra interfaz que le indicará que debe escribir un mensaje y más abajo escribir el número de desplazamientos que hagan las letras según su posición en el abecedario.Posteriormente, debe hacer clic en el botón "cifrar" y aparecerá su mensaje cifrado. Por ejemplo, si el usuario desea cifrar la palabra "HOLA" debe insertar el mensaje en el primer cuadro de texto. Luego, en el segundo cuadro las posiciones a las cuales desea que el mensaje se cifre, usaremos "1" en este caso. Deberá oprimir el botón y en el último cuadro de texto le aparecerá su mensaje cifrado: "IPMB".


La aplicación de este cifrado es bastante extensa, se puede utilizar para un sin número de contextos. El human Rights CIPHER tiene el único propósito de serle útil a las victimas de conflicto y a los miembros de la organización.




## 4. Consideraciones generales


Se deben tener en cuenta dos factores muy importantes a la hora de cifrar o descifrar en el Human Rights CIPHER:


1. Sólo se admiten letras del abecedario en mayúscula, la aplicación NO transforma las minúsculas a mayúsculas, por lo tanto se debe ingresar el mensaje, ya en mayúscula.


2. No se admiten caractes especiales, la aplicación sólo descifrará y cifrará con respecto a las 26 letras del abecedario latino/romano.


Estas dos consideraciones deben cumplirse a cabalidad al insertar el mensaje inicial, de lo contrario la aplicación no funcionará.



















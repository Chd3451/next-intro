# next-intro
By Charlie Delgado 20211092

## ESLint.
1. **¿Qué es ESLint?**
ESLint es un linter configurable para JavaScript que ayuda a identificar y corregir problemas en el código JavaScript. Puede abordar desde posibles errores de tiempo de ejecución hasta problemas de estilo y buenas prácticas.

*Un linter es una herramienta que va analizar tu código fuente para determinar si existe alguna inconsistencia.*

2. **Reglas:**
Las reglas son componentes centrales de ESLint que validan si el código cumple con ciertas expectativas y especifican cómo manejarlo si no lo hace. Pueden incluir configuraciones específicas para cada regla y abordar aspectos como el uso de punto y coma en las declaraciones.

3. **Archivos de Configuración:**
Los archivos de configuración de ESLint almacenan las preferencias de configuración en un proyecto. Pueden incluir reglas predefinidas, configuración de reglas, plugins personalizados y definiciones de qué archivos se deben aplicar.

4. **Configuraciones Compartibles:**
Las configuraciones compartibles son configuraciones de ESLint que se comparten a través de npm y a menudo se utilizan para aplicar guías de estilo específicas, como la guía de estilo de Airbnb.

5. **Complementos:** 
Los complementos de ESLint son módulos npm que contienen reglas, configuraciones y soporte para diferentes aspectos de JavaScript, como extensiones de lenguaje (por ejemplo, TypeScript) o frameworks (por ejemplo, Angular).

6. **Parsers**:** 
Los analizadores de ESLint convierten el código en una estructura de árbol que ESLint puede evaluar. Los analizadores personalizados permiten trabajar con sintaxis no estándar, como en TypeScript.

7. **Procesadores Personalizados:**
Los procesadores de ESLint extraen código JavaScript de otros tipos de archivos o lo manipulan antes de que ESLint lo analice, lo que es útil para trabajar con archivos Markdown, por ejemplo.

8. **Formateadores:**
Los formateadores de ESLint controlan la apariencia de los resultados del análisis en la línea de comandos.

9. **Integraciones:**
ESLint se integra con una variedad de herramientas y editores, lo que facilita la visualización de los resultados del análisis y la corrección de problemas mientras se trabaja en el código.

## Tailwind CSS.

Tailwind CSS es un framework de CSS de código abierto que se utiliza para desarrollar interfaces de usuario (UI) de sitios web y aplicaciones web de manera eficiente y altamente personalizable. A diferencia de otros frameworks de CSS, como Bootstrap o Foundation, Tailwind CSS se centra en proporcionar clases utilitarias que permiten diseñar interfaces de manera rápida y coherente.

1. **Clases Utilitarias:** 
Tailwind CSS se centra en clases utilitarias que se aplican directamente en el HTML para diseñar interfaces de manera eficiente.

2. **Configurabilidad:** 
Es altamente personalizable, permitiendo ajustar clases, colores y otros aspectos del diseño.

3. **Componentes Reutilizables:** 
Permite crear componentes reutilizables, combinando clases y estilos personalizados.

4. **Integración con JavaScript:** 
Se integra bien con JavaScript y el frameworks React.

5. **Optimización de Tamaño de Archivo:** 
Ofrece herramientas para reducir el tamaño del archivo CSS eliminando clases no utilizadas.

## Project Organization and File Colocation.

**Safe colocation by default:**
- En el directorio "app", la estructura de carpetas anidadas define la estructura de las rutas de la aplicación.
- Cada carpeta representa un segmento de ruta que se asigna a una parte correspondiente de una URL.
- Una ruta no es pública hasta que se agregue un archivo "page.js" o "route.js" a un segmento de ruta.
- Los archivos en el proyecto pueden colocarse de manera segura en segmentos de ruta sin riesgo de ser enrutables.

**Project organization features:**
- Las carpetas privadas se crean usando un guion bajo, lo que indica que no deben ser consideradas por el sistema de enrutamiento.
- Las carpetas privadas son útiles para separar la lógica de interfaz de usuario de la lógica de enrutamiento y para evitar conflictos de nombres.
- Se pueden crear segmentos de URL que comienzan con un guion bajo.
- Los grupos de rutas se crean envolviendo una carpeta entre paréntesis y son útiles para organizar rutas en grupos y permitir diseños anidados en el mismo nivel de segmento de ruta.

**src Directory and Module Path Aliases:**
- Next.js permite almacenar el código de la aplicación en un directorio "src" opcional, separándolo de la configuración del proyecto.
- Se admiten Alias de Rutas de Módulos para facilitar las importaciones en archivos de proyecto anidados.





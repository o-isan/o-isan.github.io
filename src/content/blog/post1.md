---
title: "Scraping de alojamientos turísticos"
description: "Con playwright en Python"
pubDate: "Sep 1 2025"
heroImage: "/projects/scraping/1.png"
tags: ["web scraping", "python"]
---

En este proyecto obtuve +5000 datasets de alojamientos turísticos de andalucia.org
con los siguientes campos: nombre del alojamiento, correo electrónico, sitio web, id propiedad.

El script obtiene los datos y los va introduciendo en un archivo csv.

Debido a que la página usa peticiones AJAX tuve que adoptar las medidas necesarias para
prevenir en lo posible que el programa caiga (tiempos de espera, recarga de la página en caso de fallo de selector ...)

**Vistas de prueba los datos**
Septiembre de 2025![img1](/projects/scraping/0.jpeg)
![img2](/projects/scraping/1.png)
![img3](/projects/scraping/2.png)

**¿Te interesa el conjunto completo?**
Ve a la sección de Contacto y escríbeme.
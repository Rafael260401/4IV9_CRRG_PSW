import pandas as pd
from pandas.core.frame import DataFrame
import re
import webbrowser

datos = pd.read_csv("Encuestas.csv")
df = pd.DataFrame(datos)


#Contando los datos para la gráfica 2
def P2_Tiempo_dormir(Respuesta1, Respuesta2, Respuesta3, Respuesta4):

    for i in range(0, len(df.index)):
        
        Pregunta_Resp = str(datos['¿En promedio cuantas horas duermes al día?'].loc[i])
        if Pregunta_Resp == "10 a 12 horas":
            Respuesta1 += 1
        elif Pregunta_Resp == "8 horas":
            Respuesta2 += 1
        elif Pregunta_Resp == "6 a 8 horas":
            Respuesta3 += 1
        elif Pregunta_Resp == "Menos de 6 horas":
            Respuesta4 += 1
    
    return Respuesta1, Respuesta2, Respuesta3, Respuesta4



P2_10_a_12_horas, P2_8_horas, P2_6_a_8_horas, P2_menos_de_6_horas = P2_Tiempo_dormir(0,0,0,0)

f = open('Graficas.html', 'w')
mensaje = """<html lang="es">
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['10 a 12 horas', """+str(P2_10_a_12_horas)+"""],
          ['8 horas', """+str(P2_8_horas)+"""],
          ['6 a 8 horas', """+str(P2_6_a_8_horas)+"""],
          ['Menos de 6 horas', """+str(P2_menos_de_6_horas)+"""]
        ]);
        var options = {
          title: 'Promedio de tiempo que duermen las personas encuestadas'
        };
        var chart = new google.visualization.PieChart(document.getElementById('Grafica2_Container'));
        chart.draw(data, options);
      }
    </script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
     
  </head>
  <body>
    <h1><center>Gráficas</center></h1>
    <hr width = "80%" height = 25px>
    <div id="Grafica2_Container" style="width: 800px; height: 500px;"></div>
  </body>
</html>
"""
f.write(mensaje)
f.close

webbrowser.open('Graficas.html')
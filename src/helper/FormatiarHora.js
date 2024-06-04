export default function FormatiarHora(data) 
{
   var array = data.split("T")[1];
   var horaFormat = array.split(":");

   return `${horaFormat[0]}:${horaFormat[1]}`
}
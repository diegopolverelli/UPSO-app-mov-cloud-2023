/**
 * Ejemplo de uso de la clase Fecha
 */
public class PruebaFecha {
    public static void main (String [] args) {
        Fecha origen = new Fecha();
        Fecha actual = new Fecha(16,2,2009);
 
        System.out.println("Primera fecha: " + origen.toString());
        System.out.println("Segunda fecha: " + actual.toString());
    }
}
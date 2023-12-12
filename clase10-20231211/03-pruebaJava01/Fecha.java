/**
 * Declaracion de la clase Fecha
 */
public class Fecha {
    // Atributos o variables miembro
    private int dia;
    private int mes;
    private int anho;
 
    /**
     * Constructor 1
     * Asigna los valores 1, 1 y 2000 a los atributos
     * dia, mes y anho respectivamente
     */
    public Fecha() {
        this.dia = 1;
        this.mes = 1;
        this.anho = 2000;
    }
 
    /**
     * Constructor 2
     * @param ndia el dia del mes a almacenar
     * @param nmes el mes del anho a almacenar
     * @param nanho el anho a almacenar
     */
    public Fecha(int dia, int mes, int anho) {
        this.dia = dia;
        this.mes = mes;
        this.anho = anho;
    }
 
    public String toString() {
        return this.dia + "/" + this.mes + "/" + this.anho;
    }
}
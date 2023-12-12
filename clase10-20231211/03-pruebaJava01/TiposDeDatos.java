public class TiposDeDatos {
    public static void main(String[] args) {
        final int NUMERO_1=100;

        System.out.println(NUMERO_1);

        final String EQUIPO_1="BOCA JUNIORS";

        System.out.println(EQUIPO_1);
        
        String equipo2="Velez";
        
        System.out.println(equipo2);

        String [] nombres={"Diego", "Luis", "Matilde", "Romina", "Magdalena"};
        
        for (int i = 0; i < nombres.length; i++) {
            System.out.println("- "+nombres[i]);
        }



        Precio [] catalogo; // Creacion de la referencia
        catalogo = new Precio [5]; // Creacion array de referencias precio
 
        for (int i=0; i<catalogo.length; i++) {
            catalogo[i] = new Precio(); // Creacion del elemento i-esimo
            catalogo[i].pone(10*Math.random());
            System.out.println("Producto "+ i + " : " + catalogo[i].da());
        }
 
        // Busqueda del maximo precio
        double maximo=catalogo[0].da();
        for (int i=1; i<catalogo.length; i++) {
            if (maximo<catalogo[i].da())
                maximo=catalogo[i].da();
        }
        System.out.println("El mas caro vale "+ maximo +" euros");


    }
}

class Precio {
    // Atributo o variable miembro
    public double euros;
 
    // Metodos
    public double da() {
        return this.euros;
    }
 
    public void pone(double x) {
        this.euros = x;
    }
}

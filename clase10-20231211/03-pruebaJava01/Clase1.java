import java.util.Scanner;

public class Clase1{
    public static void main (String[] params){
        System.out.println("Hola Mundo");

        Scanner teclado = new Scanner(System.in);
        System.out.println("Ingrese nombre:");
        String nombre=teclado.nextLine();
        System.out.println("Su nombre es "+nombre);
        
        System.out.println("Ingrese saludo:");
        String saludo=teclado.nextLine();
        System.out.println(saludo);

        System.out.println("Ingrese pais 1:");
        String pais1=teclado.nextLine();

        System.out.println("Ingrese pais 2:");
        String pais2=teclado.nextLine();

        System.out.println(pais1.equals(pais2));

        System.out.println(saludo+" "+nombre);

    }
}
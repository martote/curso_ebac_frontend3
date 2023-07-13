public class MaiorNumero {
    public static void main(String[] args) {
    
        Scanner input = new Scanner(System.in);
        int numeros;
        int maior = 0;
        
        System.out.println("Informe os números para saber qual é o maior.");
        System.out.println("Para acabar Informe 0");
        System.out.print("Informe o número: ");
        numeros = input.nextInt();
        
    
        do{
        
        
                if(maior<numeros){
                         maior = numeros;
                 }
                 System.out.print("Informe o número: ");
                 numeros = input.nextInt();
    
        }while(numeros!=0);
        JOptionPane.showMessageDialog(null,"o maior número foi: "+maior);
    }

    import java.util.Scanner;
public static void main(String[] args) 
{
 Scanner entrada = new Scanner(System.in);
 int a,b;

System.out.println("A :");
     a=entrada.nextInt;
System.out.println("B :");
    b=entrada.nextInt;
 if(a>b)
    {
System.out.println("A é maior com valor:"+a);
}else if(b>a)
    {
    System.out.println("B é maior com valor:"+b);
}else
    {
system.out.println("Os números são iguais com valor:"+a);
}

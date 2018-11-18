import java.util.*;
public class AsciValue
{
public static void main(String args[])
{
Scanner sc=new Scanner(System.in);
System.out.println("Enter the digits:");
char ch1=(char)sc.nextInt();
char ch2=(char)sc.nextInt();
char ch3=(char)sc.nextInt();
char ch4=(char)sc.nextInt();
int in1=(int)ch1;
int in2=(int)ch2;
int in3=(int)ch3;
int in4=(int)ch4;
System.out.println(in1+"-"+ch1+"\n"+in2+"-"+ch2+"\n"+in3+"-"+ch3+"\n"+in4+"-"+ch4+"\n");
}
}
using System;

class URI
{

    static void Main(string[] args)
    {
        string input = Console.ReadLine();

        string[] values = input.Split(' ');
        double A = double.Parse(values[0]);
        double B = double.Parse(values[1]);
        double C = double.Parse(values[2]);
        decimal pi = 3.14159m;

        double triangulo = (A * C) / 2;
        double circulo = (double)pi * Math.Pow(C, 2.0);
        double trapezio = 0.5 * C * (A + B);
        double quadrado = B * B;
        double retangulo = A * B;

        Console.WriteLine("TRIANGULO: " + triangulo.ToString("F3"));
        Console.WriteLine("CIRCULO: " + circulo.ToString("F3"));
        Console.WriteLine("TRAPEZIO: " + trapezio.ToString("F3"));
        Console.WriteLine("QUADRADO: " + quadrado.ToString("F3"));
        Console.WriteLine("RETANGULO: " + retangulo.ToString("F3"));
    }

}
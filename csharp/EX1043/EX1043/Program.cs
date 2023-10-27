using System;

class URI
{

    static void Main(string[] args)
    {
        string[] values = Console.ReadLine().Split(' ');
        double A = double.Parse(values[0]);
        double B = double.Parse(values[1]);
        double C = double.Parse(values[2]);

        if (A + B > C && A + C > B && B + C > A)
        {
            double perimetro = (A + B + C);
            Console.WriteLine($"Perimetro = {perimetro:F1}");
            return;
        }

        double area = 0.5 * C * (A + B);
        Console.WriteLine($"Area = {area:F1}");
        return;
    }
}
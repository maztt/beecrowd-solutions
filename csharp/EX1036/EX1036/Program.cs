using System;

class URI
{

    static void Main(string[] args)
    {
        string[] values = Console.ReadLine().Split(' ');
        double A = double.Parse(values[0]);
        double B = double.Parse(values[1]);
        double C = double.Parse(values[2]);
        double delta = (Math.Pow(B, 2) - (4 * A * C));

        if (A != 0 && delta > 0)
        {
            double R1 = (-B + Math.Sqrt(delta)) / (2.0 * A);
            double R2 = (-B - Math.Sqrt(delta)) / (2.0 * A);

            Console.WriteLine($"R1 = {R1:F5}");
            Console.WriteLine($"R2 = {R2:F5}");
            return;
        }

        Console.WriteLine("Impossivel calcular");
        return;
    }
}
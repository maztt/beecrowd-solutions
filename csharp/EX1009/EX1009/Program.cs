using System;

class URI
{

    static void Main(string[] args)
    {
        string name = Console.ReadLine();
        decimal salary = decimal.Parse(Console.ReadLine());
        decimal sales = decimal.Parse(Console.ReadLine());
        decimal percentCommission = 0.15m;
        decimal totalSalary = salary + (sales * percentCommission);

        Console.WriteLine("TOTAL = R$ " + totalSalary.ToString("F2"));
    }

}
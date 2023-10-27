using System;
using System.Linq;

class URI
{    static void Main(string[] args)
    {
        int crowBlinks = 0;
        int sumOfBinaries = 0;

        string[] TypesOfBlinks = new string[8] {
            "---",
            "--*",
            "-*-",
            "-**",
            "*--",
            "*-*",
            "**-",
            "***"
        };

        while (crowBlinks != 3)
        {
            string input = Console.ReadLine();
            if (input == "caw caw")
            {
                crowBlinks++;
                Console.WriteLine(sumOfBinaries);
                sumOfBinaries = 0;
            }

            var binQuery = 
                from blink in TypesOfBlinks 
                where input == blink 
                select blink;

            binQuery
                .ToList()
                .ForEach(blink => sumOfBinaries += Array.IndexOf(TypesOfBlinks, blink));
        }
    }

}
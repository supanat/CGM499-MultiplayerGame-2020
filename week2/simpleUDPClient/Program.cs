using System;
using System.Net;
using System.Net.Sockets;
using System.Text;

namespace simpleUDPClient
{
    class Program
    {
        static void Main(string[] args)
        {
            String message = "hello 123";
            String ipAddress = "127.0.0.1";
            int port = 5000;

            UdpClient udpClient = new UdpClient();
            udpClient.Connect(ipAddress,port);

            //Byte Array
            Byte[] sendBytes = Encoding.ASCII.GetBytes(message);
            udpClient.Send(sendBytes,sendBytes.Length);

            Console.WriteLine("Message was sent");




        }
    }
}

using System;
using System.Net;
using System.Net.Sockets;
using System.Threading;
using System.Text;

namespace simpleTCPClient
{
    class Program
    {
        static void Main(string[] args)
        {
            String message = "this is your message";
            int port = 5000;
            String ipAddress = "127.0.0.1";


            TcpClient tcpClient = new TcpClient();
            tcpClient.Connect(ipAddress, port);


            NetworkStream netStream = tcpClient.GetStream();
            byte[] data = Encoding.ASCII.GetBytes(message);
            netStream.Write(data, 0, data.Length);

            

        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dtos.Auth
{
    //los dtos son clases que se usan para transferir datos entre capas
    //son clase de re Register y login 
    public class RegisterModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class LoginModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class AddRoleModel
    {
        public string Email { get; set; }
        public string Role { get; set; }
    }

}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Entities.Users
{
    //heredamos de IdentityUser para poder usar la autentificación
    //es nuestra tabla en la base de datos
    public class ApplicationUser: IdentityUser<int> //se cambia string por int
    {
        public string? UserType { get; set; }
        
    }
}

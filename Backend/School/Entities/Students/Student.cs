using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Users;

namespace Entities.Students
{
    public class Student
    {

        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public String FirsName { get; set; } = String.Empty;

        [Required]
        [StringLength(50)]

        public String LastName { get; set; } = String.Empty;

        [Required]
        [StringLength(50)]

        public String Email { get; set; } = String.Empty;

        [Required]

        public DateTime Registration_Date { get; set; }

        // una relación uno a uno con la tabla de usuarios
        [Required]
        public int UserId { get; set; }

        public ApplicationUser? User { get; set; }
    }
}

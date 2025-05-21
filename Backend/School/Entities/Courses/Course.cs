using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Classes;

namespace Entities.Courses
{
    public class Course
    {


        public int Id { get; set; }

        [Required]
        [StringLength(50)]

        public string Name { get; set; } = String.Empty;

        public string? Description { get; set; }


        [Required]
        public int Credits { get; set; }


        //obtener una lista de clases por cada curso
        public ICollection<Class> Classes { get; set; }
    }
}

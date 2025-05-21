using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Courses;
using Entities.Enum;
using Entities.Teachers;

namespace Entities.Classes
{
    public class Class
    {

        public int Id { get; set; }


        [Required]
        [StringLength(50)]
        public string Schedule { get; set; } = String.Empty;

        [Required]
        [StringLength(50)]

        public string Room { get; set; } = String.Empty;


        public EnumPeriod EnumPeriod { get; set; }

        public Teacher? Teacher { get; set; }

        public int TeacherId { get; set; }

        public Course? Course { get; set; }
        public int CourseId { get; set; }


    }
}

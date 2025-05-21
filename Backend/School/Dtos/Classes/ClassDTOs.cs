using System.ComponentModel.DataAnnotations;
using Entities.Courses;
using Entities.Enum;
using Entities.Teachers;

namespace DTOs.Classes
{
    public class ClassCreateDto
    {


        [Required]
        [StringLength(50)]
        public string Schedule { get; set; } = String.Empty;

        [Required]
        [StringLength(50)]

        public string Room { get; set; } = String.Empty;

        [Required]
        public EnumPeriod EnumPeriod { get; set; }


       [Required]
       [Range(1, int.MaxValue)]
        public int CourseId { get; set; }

        //un campo para capturar el id de Teacher
        //crearía una clase y asignaría un maestro desde un select
    }

    public class ClassPatchDto
    {
        [Required]
        [StringLength(50)]
        public string Schedule { get; set; } = String.Empty;

        [Required]
        [StringLength(50)]

        public string Room { get; set; } = String.Empty;

        [Required]
        public EnumPeriod EnumPeriod { get; set; }


        [Required]
        [Range(1, int.MaxValue)]
        public int CourseId { get; set; }

    }

    public class ClassResponseDto
    {

        public int Id { get; set; }

        public string Schedule { get; set; } = String.Empty;

        public string Room { get; set; } = String.Empty;

        public EnumPeriod EnumPeriod { get; set; }

        public int CourseId { get; set; }

        public int TeacherId { get; set; }

        public string CourseName { get; set; } = string.Empty;

        public string TeacherName {  get; set; } = string.Empty;

    }
}

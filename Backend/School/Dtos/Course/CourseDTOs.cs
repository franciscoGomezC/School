using System.ComponentModel.DataAnnotations;
using DTOs.Classes;
using Entities.Classes;

namespace DTOs.Courses
{
    public class CourseCreateDto
    {


        [Required]
        [StringLength(50)]

        public string Name { get; set; } = String.Empty;

        public string? Description { get; set; }


        [Required]
        public int Credits { get; set; }
    }

    public class CoursePatchDto
    {

        [Required]
        [StringLength(50)]

        public string Name { get; set; } = String.Empty;

        public string? Description { get; set; }


        [Required]
        public int Credits { get; set; }
    }

    //es la respuesta del dto
    public class CourseResponseDto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]

        public string Name { get; set; } = String.Empty;

        public string? Description { get; set; }


        [Required]
        public int Credits { get; set; }

        public ICollection<ClassResponseDto> Classes { get; set; } //no tiene la propiedad de course ni teacher

    }
}

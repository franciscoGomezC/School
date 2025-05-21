using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Classes;
using Entities.Courses;
using Entities.Enrollments;
using Entities.Enum;
using Entities.Students;
using Entities.Teachers;
using Entities.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DataAccess
{
    ///heredamos de IdentityDbContext para poder usar la autentificación
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, IdentityRole<int>, int>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Student> Students { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Class> Classes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            modelBuilder.HasPostgresEnum<EnumPeriod>();

            modelBuilder.Entity<Enrollment>().HasIndex(e => new { e.StudentId, e.ClassId }).IsUnique();



            // 1 a muchos

            //configuración desde el lado del uno (Course)
            modelBuilder.Entity<Course>()
                .HasMany(c => c.Classes) //un curso tiene muchas clases (HasMany)...se maneja una relación inversa
                .WithOne(c => c.Course) //una clase pertenece a un curso
                .HasForeignKey(c => c.CourseId)
                .OnDelete(DeleteBehavior.Restrict); //Clases se borra automáticamente

            ////configuración desde el lado del muchos (Class)
            //modelBuilder.Entity<Class>()
            //    .HasOne(c => c.Course) //una clase pertenece a un curso(
            //    .WithMany() //un curso tiene muchas clases                
            //    .HasForeignKey(c => c.CourseId)
            //    .OnDelete(DeleteBehavior.Cascade); //Clases se borra automáticamente


            //// relación 1 - 1
            ////Opción 1: Desde la entidad persona (sin usar propiedades de navegación en Persona
            //modelBuilder.Entity<Persona>()
            //    .HasOne<Pasaporte>() //una persona tiene un pasaporte
            //    .WithOne() //un pasaporte no tiene propiedad
            //    .HasForeignKey<Pasaporte>(p => p.PersonaId) //clave foránea en pasaporte
            //    .OnDelete(DeleteBehavior.Cascade); //Eliminar pasaporte si se elimina la persona 

            ////Opción 2: Desde la entidad Pasaporte (sin usar propiedades de navegación)
            //modelBuilder.Entity<Pasaporte>()
            //    .HasOne<Persona>() //Un pasaporte pertenece a una persona
            //    .WithOne() //Una persona no tiene propiedad de
            //    .HasForeignKey<Pasaporte>(p => p.PersonaId)
            //    .OnDelete(DeleteBehavior.Cascade); //Clave foránea en pasaporte 


        }



    }
}

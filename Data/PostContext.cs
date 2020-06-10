using Blog.Models;
using Microsoft.EntityFrameworkCore;


namespace postAPI.Models
{

    public class PostContext : DbContext
    {

        public PostContext(DbContextOptions<PostContext> options) : base(options) { }

        public DbSet<Post> Posts { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Comment> Comments { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
             modelBuilder.Entity<Comment>()
            .HasOne(p => p.Post)
            .WithMany(c => c.comments);
              
        }


    }

}
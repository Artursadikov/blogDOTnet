using Microsoft.EntityFrameworkCore;


namespace postAPI.Models
{

    public class PostContext : DbContext
    {

        public PostContext(DbContextOptions<PostContext> options) : base(options)
        {

        }

        public DbSet<Post> PostItems { get; set; }

    }

}
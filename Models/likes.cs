using postAPI.Models;

namespace Blog.Models
{
    public class likes
    {
        public int id { get; set; }
        public int like { get; set; } = 0;
        public int love { get; set; } = 0;
        public int liked { get; set; } = 0;
        public int loved { get; set; } = 0;
        public Post Post { get; set; }
    }
}
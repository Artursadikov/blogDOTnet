

namespace postAPI.Models
{
    public class Post {
        public int Id { get; set; }
        public string PostContent { get; set; }
        public string userNickname { get; set; }
        public int likes { get; set; }
        public int saved { get; set; }
    }
}
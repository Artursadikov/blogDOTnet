


using System.Collections.Generic;
using Blog.Models;

namespace postAPI.Models
{
    public class Post
    {

        public int Id { get; set; }
        public string PostContent { get; set; }
        public string userNickname { get; set; }
        public int likes { get; set; } = 0;
        public int saved { get; set; } = 0;
        public bool pressedLK { get; set; } = false;
        public bool pressedSD { get; set; } = false;
        public List<Comment> comments { get; set; }
       
    }
}
using System.Collections.Generic;
using postAPI.Models;

namespace Blog.Models
{
    public class Comment
    {
        public int id { get; set; }
        public string content { get; set; }
        public string userNameCommented { get; set; }
        public Post Post { get; set; }
        public User User { get; set; }
    }
}
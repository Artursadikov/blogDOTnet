using System.Collections.Generic;
using postAPI.Models;

namespace Blog.Models
{
    public class User
    {
        public int Id { get; set; }
        public string nickName { get; set; }
        public string email { get; set; }
        public byte[] passwordHash { get; set; }
        public byte[] passwordSalt { get; set; }
        public List<Post> UserPosts { get; set; }
        public List<Comment> UserComments { get; set; }
    }
}
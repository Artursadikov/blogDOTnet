using System.Collections.Generic;
using postAPI.Models;

namespace Blog.Models
{
    public class User
    {
        public int Id { get; set; }
        public string firsName { get; set; }
        public string lastName { get; set; }
        public string nickName { get; set; }
        public string email { get; set; }
        public byte[] passwordHash { get; set; }
        public byte[] passwordSalt { get; set; }
        public List<Post> posts { get; set; }
        public List<Comment> Commen { get; set; }

    }
}
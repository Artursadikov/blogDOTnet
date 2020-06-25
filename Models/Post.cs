


using System;
using System.Collections.Generic;
using Blog.Models;

namespace postAPI.Models
{
    public class Post
    {

        public int Id { get; set; }
        public string PostContent { get; set; }
        public string userNickname { get; set; }
        public string theme { get; set; }
        public int like { get; set; }
        public int love { get; set; }
        public bool liked { get; set; } = false;
        public bool loved { get; set; } = false;
        public List<Comment> comments { get; set; }
        public User User { get; set; }

    }
}
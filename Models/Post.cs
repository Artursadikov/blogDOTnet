


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
        public List<Comment> comments { get; set; }
        public List<Like> like { get; set; }

    }
}
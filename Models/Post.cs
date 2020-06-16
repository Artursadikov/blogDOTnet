


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
        public string header { get; set; }
        public DateTime date { get; set; }
        public List<Comment> comments { get; set; }
        public List<likes> like { get; set; }

    }
}
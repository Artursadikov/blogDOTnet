using Microsoft.AspNetCore.Identity;

namespace Blog.Models
{
    public class AppUser : IdentityUser<int>
    {
        public string firsName { get; set; }
        public string lastName { get; set; }
        public string nickName { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }
}
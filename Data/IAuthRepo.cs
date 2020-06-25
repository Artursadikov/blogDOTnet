using System.Threading.Tasks;
using Blog.Models;



namespace Blog.Data
{
    public interface IAuthRepo
    {
        Task<ServiceResponse<int>> Register(User user, string password);
        Task<ServiceResponse<string>> Login(string nickName, string password, string email);
        Task<bool> UserExists(string nickName);
    }
}
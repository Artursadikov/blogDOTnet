using System.Collections.Generic;
using System.Threading.Tasks;

using Blog.Models;
using postAPI.Models;

namespace Blog.Services
{
    public interface IPostService
    {
        
        Task<ServiceResponse<List<Post>>> GetAllPosts();
        Task<ServiceResponse<Post>> GetPostById(int id);
        Task<ServiceResponse<List<Post>>> AddNewPost(Post newPost);
        Task<ServiceResponse<Post>> UpdatePost(Post UpdatedPost, int id);
        Task<ServiceResponse<List<Post>>> DeletePost(int id);
    }
}
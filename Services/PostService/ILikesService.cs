using System.Collections.Generic;
using System.Threading.Tasks;
using Blog.Models;

namespace Blog.Services.PostService
{
    public interface ILikesService
    {
        Task<ServiceResponse<List<likes>>> GetAllLikes(int postId);
        Task<likes> GetLikeById(int id);
        Task<likes> UpdateLike(likes Updatedlike, int id);
        Task<List<likes>> CreateLike(likes newLike);
        
    }
}
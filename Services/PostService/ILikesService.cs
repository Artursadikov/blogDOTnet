using System.Collections.Generic;
using System.Threading.Tasks;
using Blog.Models;

namespace Blog.Services.PostService
{
    public interface ILikesService
    {
        Task<ServiceResponse<List<Like>>> GetAllLikes(int postId);
        Task<Like> GetLikeById(int id);
        Task<Like> UpdateLike(Like Updatedlike, int id);
        Task<List<Like>> CreateLike(Like newLike);
        
    }
}
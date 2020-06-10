using System.Collections.Generic;
using System.Threading.Tasks;
using Blog.Models;

namespace Blog.Services.PostService
{
    public interface ICommentService
    {
        Task<ServiceResponse<List<Comment>>> GetAllCommentes(int postId);
        Task<ServiceResponse<Comment>> GetCommentById(int id);
        Task<ServiceResponse<List<Comment>>> AddNewComment(Comment newComment);
        Task<ServiceResponse<Comment>> UpdateComment(Comment UpdatedComment, int id);
        Task<ServiceResponse<List<Comment>>> DeleteComment(int id);
    }
}
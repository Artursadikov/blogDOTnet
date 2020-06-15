using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Models;
using Microsoft.EntityFrameworkCore;
using postAPI.Models;

namespace Blog.Services.PostService
{
    public class LikesService : ILikesService
    {
        private readonly PostContext _context;

        public LikesService(PostContext context)
        {
            _context = context;
        }

        public async Task<ServiceResponse<List<likes>>> GetAllLikes(int postId)
        {
            ServiceResponse<List<likes>> Response = new ServiceResponse<List<likes>>();
            List<likes> dbLikes = await _context.like.Where(l => l.Post.Id == postId).ToListAsync();

            Response.Data = dbLikes;
            return Response;
        }

        public Task<likes> GetLikeById(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<likes> UpdateLike(likes UpdatedPost, int id)
        {
            throw new System.NotImplementedException();
        }


    }
}
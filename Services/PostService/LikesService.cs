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

        public async Task<List<Like>> CreateLike(Like newlike)
        {
            List<Like> likes = await _context.likes.ToListAsync();
            newlike.Post = await _context.Posts.FindAsync(newlike.Post.Id);

            await _context.likes.AddAsync(newlike);
            await _context.SaveChangesAsync();
            return likes;

        }

        public async Task<ServiceResponse<List<Like>>> GetAllLikes(int postId)
        {
            ServiceResponse<List<Like>> Response = new ServiceResponse<List<Like>>();
            List<Like> dbLikes = await _context.likes.Where(l => l.Post.Id == postId).ToListAsync();

            Response.Data = dbLikes;
            return Response;
        }

        public Task<Like> GetLikeById(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<Like> UpdateLike(Like Updatedlike, int id)
        {

            Like like = await _context.likes.FirstOrDefaultAsync(c => c.id == Updatedlike.id);

            like.like = Updatedlike.like;
            like.love = Updatedlike.love;
            like.loved = Updatedlike.loved;
            like.liked = Updatedlike.liked;



            _context.likes.Update(like);
            await _context.SaveChangesAsync();


            return like;
        }


    }
}
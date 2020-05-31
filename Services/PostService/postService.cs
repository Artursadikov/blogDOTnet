using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Blog.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using postAPI.Models;

namespace Blog.Services.PostService
{
    public class postService : IPostService
    {


        private readonly PostContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public postService(PostContext context, IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
            _context = context;

        }

       // private int GetUserId() => int.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
        public async Task<ServiceResponse<List<Post>>> AddNewPost(Post newPost)
        {
            ServiceResponse<List<Post>> serviceResponse = new ServiceResponse<List<Post>>();
            List<Post> dbPost = await _context.Posts.ToListAsync();
            // all users CAN POST A NEW POST
           //newPost.User = await _context.Users.FirstOrDefaultAsync(u => u.Id == GetUserId());
            await _context.Posts.AddAsync(newPost);
            await _context.SaveChangesAsync();
            serviceResponse.Data = dbPost;
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<Post>>> DeletePost(int id)
        {
            ServiceResponse<List<Post>> serviceResponse = new ServiceResponse<List<Post>>();
            try
            {
                Post post = await _context.Posts.FirstOrDefaultAsync(c => c.Id == id);
                if (post != null)
                {
                    _context.Posts.Remove(post);
                    await _context.SaveChangesAsync();
                    List<Post> dbPost = await _context.Posts.ToListAsync();
                    serviceResponse.Data = dbPost;
                }
                else
                {
                    serviceResponse.Sucsses = false;
                    serviceResponse.Message = "Post not found!";
                }
            }

            catch (Exception ex)
            {
                serviceResponse.Sucsses = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }


        //  public async Task<ServiceResponse<List<Post>>> GetAllPosts(int userId)
        public async Task<ServiceResponse<List<Post>>> GetAllPosts()
        {
            ServiceResponse<List<Post>> serviceResponse = new ServiceResponse<List<Post>>();
            List<Post> dbPost = await _context.Posts.ToListAsync();
            //  List<Post> dbPost = await _context.Posts.Where(c => c.User.Id == userId).ToListAsync();
            serviceResponse.Data = dbPost;
            return serviceResponse;
        }

        public async Task<ServiceResponse<Post>> GetPostById(int id)
        {
            ServiceResponse<Post> serviceResponse = new ServiceResponse<Post>();
            Post dbPost = await _context.Posts.FirstOrDefaultAsync(c => c.Id == id);
            serviceResponse.Data = dbPost;
            return serviceResponse;
        }

        public async Task<ServiceResponse<Post>> UpdatePost(Post UpdatedPost, int id)
        {
            ServiceResponse<Post> serviceResponse = new ServiceResponse<Post>();
            try
            {
                Post post = await _context.Posts.FirstOrDefaultAsync(c => c.Id == UpdatedPost.Id);

                    post.PostContent = UpdatedPost.PostContent;
                    post.likes = UpdatedPost.likes;
                    post.pressedLK = UpdatedPost.pressedLK;
                    post.pressedSD = UpdatedPost.pressedSD;
                    post.saved = UpdatedPost.saved;
                    post.userNickname = UpdatedPost.userNickname;

                    _context.Posts.Update(post);
                    await _context.SaveChangesAsync();

                    serviceResponse.Data = post;
           

            }

            catch (Exception ex)
            {
                serviceResponse.Sucsses = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }


    }
}
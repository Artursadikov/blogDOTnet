using System.Collections.Generic;
using System.Threading.Tasks;
using Blog.Models;
using Blog.Services.PostService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    // need to remove authorize to post a new post or login in front <--
   // [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class CommentController : ControllerBase
    {

        private readonly ICommentService _commentService;

        public CommentController(ICommentService commentService)
        {
            _commentService = commentService;
        }



        // all users can see all the comments
        [AllowAnonymous]
        [HttpGet("comments/{postId}")]
        public async Task<IActionResult> Get(int postId)
        {
            return Ok(await _commentService.GetAllCommentes(postId));
        }


        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSingel(int id)
        {
            return Ok(await _commentService.GetCommentById(id));
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> AddComment(Comment newComment)
        {
            return Ok(await _commentService.AddNewComment(newComment));
        }


        [AllowAnonymous]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePost(Comment UpdatedComment, int id)
        {

            ServiceResponse<Comment> responce = await _commentService.UpdateComment(UpdatedComment, id);

            if (responce.Data == null)
            {
                return NotFound(responce);
            }

            return Ok(responce);

        }

        //[AllowAnonymous]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            ServiceResponse<List<Comment>> responce = await _commentService.DeleteComment(id);

            if (responce.Data == null)
            {
                return NotFound(responce);
            }

            return Ok(responce);
        }


    }
}
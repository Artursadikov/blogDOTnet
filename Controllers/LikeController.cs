using System.Threading.Tasks;
using Blog.Models;
using Blog.Services.PostService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class LikeController : ControllerBase
    {

        private readonly ILikesService _likeService;

        public LikeController(ILikesService likeService)
        {
            _likeService = likeService;

        }

        [AllowAnonymous]
        [HttpGet("likes/{postId}")]
        public async Task<IActionResult> Get(int postId)
        {
            return Ok(await _likeService.GetAllLikes(postId));
        }


        
        [AllowAnonymous]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(likes UpdatedLike, int id)
        {

            likes like = await _likeService.UpdateLike(UpdatedLike, id);

            if (like == null)
            {
                return NotFound(like);
            }

            return Ok(like);

        }

    }
}
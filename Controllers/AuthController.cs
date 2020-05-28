using System.Threading.Tasks;
using Blog.Data;
using Blog.Dtos;
using Blog.Models;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepo _authRepo;
        public AuthController(IAuthRepo authRepo)
        {
            _authRepo = authRepo;

        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(UserDto request)
        {
            ServiceResponse<int> response = await _authRepo.Register(
                new User { firsName = request.firstName }, request.password
            );

            if (!response.Sucsses)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }



        [HttpPost("Login")]
        public async Task<IActionResult> Login(UserLoginDto request)
        {
            ServiceResponse<string> response = await _authRepo.Login(
                request.firstName, request.password
            );

            if (!response.Sucsses)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }


    }
}
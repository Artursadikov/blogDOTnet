using System.Threading.Tasks;
using Blog.Data;
using Blog.Dtos;
using Blog.Models;
using Microsoft.AspNetCore.Authorization;
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

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserDto userDto)
        {
            ServiceResponse<int> response = await _authRepo.Register(
                new User { nickName = userDto.nickName, email = userDto.email}, userDto.password
            );

            if (!response.Sucsses)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }



        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginDto userLoginDto)
        {
            ServiceResponse<string> response = await _authRepo.Login(
                userLoginDto.password , userLoginDto.nickName
            );

            if (!response.Sucsses)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }


    }
}
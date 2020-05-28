


using System.Threading.Tasks;
using Blog.Models;
using Microsoft.EntityFrameworkCore;
using postAPI.Models;

namespace Blog.Data
{
    public class AuthRepo : IAuthRepo
    {
        private readonly PostContext _context;

        public AuthRepo(PostContext context)
        {
            _context = context;

        }


        public async Task<ServiceResponse<string>> Login(string firstName, string password)
        {
            ServiceResponse<string> response = new ServiceResponse<string>();
            User user = await _context.Users.FirstOrDefaultAsync(x => x.firsName.ToLower().Equals(firstName.ToLower()));
            if (user == null)
            {
                response.Sucsses = false;
                response.Message = "User not found";
            }
            else if (!VarifyPasswordHash(password, user.passwordHash, user.passwordSalt))
            {
                response.Sucsses = false;
                response.Message = "Wrong password!";
            }
            else 
            {
                response.Data = user.Id.ToString();
            }
            return response;
        }

        public async Task<ServiceResponse<int>> Register(User user, string password)
        {

            ServiceResponse<int> response = new ServiceResponse<int>();
            if (await UserExists(user.firsName))
            {
                response.Sucsses = false;
                response.Message = "User already Exists";
                return response;
            }
            CreatePasswordHash(password, out byte[] passwordHash, out byte[] passwordSalt);

            user.passwordHash = passwordHash;
            user.passwordSalt = passwordSalt;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            response.Data = user.Id;

            return response;
        }

        public async Task<bool> UserExists(string firsName)
        {
            if (await _context.Users.AnyAsync(x => x.firsName.ToLower() == firsName.ToLower()))
            {
                return true;
            }

            return false;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VarifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                    {
                        return false;
                    }
                }
                 return true;
            }
        }
    }
}
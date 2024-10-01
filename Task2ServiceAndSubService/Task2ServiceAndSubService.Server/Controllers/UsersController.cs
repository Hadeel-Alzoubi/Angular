using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Task2ServiceAndSubService.Server.DTO;
using Task2ServiceAndSubService.Server.Models;

namespace Task2ServiceAndSubService.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MyDbContext _db;
        public UsersController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        async public Task<IActionResult> getUser()
        {
            var users = _db.Users.ToList();
            return Ok(users);
        }


        [HttpPost]
        async public Task<IActionResult> addUser([FromForm] AddUSerDTO dto)
        {
            var userEmail = _db.Users.Where(x => x.Email == dto.Email).FirstOrDefault();

            if (userEmail != null)
            {
                return BadRequest("Email Exist");
            }

            var user = new User
            {
                UserName = dto.UserName,
                Email = dto.Email,
                PasswordHash = dto.PasswordHash,
                Phone = dto.Phone,
                Address = dto.Address,
            };

            await _db.Users.AddAsync(user);
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("Login")]
        public IActionResult Login([FromForm] AddUSerDTO userInfo)
        {
            var checkUser = _db.Users.Where(u => u.Email == userInfo.Email && u.PasswordHash == userInfo.PasswordHash).FirstOrDefault();

            if (checkUser == null)
            {
                return BadRequest("Email or Password wrong!");
            }

            return Ok(checkUser);
        }
    }
}

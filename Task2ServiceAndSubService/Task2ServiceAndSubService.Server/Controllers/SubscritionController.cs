using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Task2ServiceAndSubService.Server.Models;

namespace Task2ServiceAndSubService.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscritionController : ControllerBase
    {
        private readonly MyDbContext _db;

        public SubscritionController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        async public Task<IActionResult> getAll()
        {
            var sub = _db.Subscriptions.ToList();
            return Ok(sub);
        }
    }
}

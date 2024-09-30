using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Task2ServiceAndSubService.Server.DTO;
using Task2ServiceAndSubService.Server.Models;

namespace Task2ServiceAndSubService.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSubscribtionController : ControllerBase
    {
        private readonly MyDbContext _db;
        public UserSubscribtionController(MyDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        async public Task<IActionResult> setSub([FromBody] UserSubscriptionDTO dTO)
        {
            var subscribtion = _db.Subscriptions.Where(x => x.SubscriptionId == dTO.SubscriptionId).FirstOrDefault();
            var amount = subscribtion.SubscriptionAmount;
            var startdate = DateOnly.FromDateTime(DateTime.Now);


            //قيمة ابتدائية
            DateOnly enddate = DateOnly.FromDateTime(DateTime.Now);

            switch (amount)
            {
                case "7": 
                    enddate = startdate.AddDays(7);
                    break;
                case "90":
                    enddate = startdate.AddMonths(3);
                    break;
                case "365":
                    enddate = startdate.AddYears(1);
                    break;
            }

            var usersub = new UserSubscription
            {
                UserId = dTO.UserId,
                SubscriptionId = dTO.SubscriptionId,
                SubServiceId = dTO.SubscriptionId,
                StartDate = startdate,
                EndDate = enddate,
            };

            _db.UserSubscriptions.AddAsync(usersub);
            _db.SaveChangesAsync();


            return Ok(dTO);
        }

    }
}

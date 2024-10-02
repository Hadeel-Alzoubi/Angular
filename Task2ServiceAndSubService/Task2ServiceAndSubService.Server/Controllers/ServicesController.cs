using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Task2ServiceAndSubService.Server.DTO;
using Task2ServiceAndSubService.Server.Models;

namespace Task2ServiceAndSubService.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly MyDbContext _db;

        public ServicesController(MyDbContext db)
        {
            _db = db;
        }


        [HttpGet]
        public IActionResult GetAllServices()
        {
            var services = _db.Services.ToList();
            if (!services.Any()) { return BadRequest(); }
            return Ok(services);
        }


        [HttpPost("AddService")]
        public IActionResult AddService([FromForm] addServiceDTO addService)
        {
            var check = _db.Services.Where(s => s.ServiceName == addService.ServiceName).FirstOrDefault();

            if (check != null)
            {
                return BadRequest("This service already exict");
            }

            var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadsImages");

            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }

            var fileImage = Path.Combine(folder, addService.ServiceImage.FileName);

            if (!System.IO.File.Exists(fileImage))
            {
                using (var stream = new FileStream(fileImage, FileMode.Create))
                {

                    addService.ServiceImage.CopyToAsync(stream);

                }
            }

            Service newService = new Service()
            {

                ServiceName = addService.ServiceName,
                ServiceDescription = addService.ServiceDescription,
                ServiceImage = addService.ServiceImage.FileName,
            };

            _db.Services.Add(newService);
            _db.SaveChanges();

            return Ok();
        }
    }
}

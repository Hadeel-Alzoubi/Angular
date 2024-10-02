namespace Task2ServiceAndSubService.Server.DTO
{
    public class addServiceDTO
    {
        public string ServiceName { get; set; } = null!;

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }
    }
}

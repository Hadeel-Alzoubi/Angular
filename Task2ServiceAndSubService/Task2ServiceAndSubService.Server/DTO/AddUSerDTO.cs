namespace Task2ServiceAndSubService.Server.DTO
{
    public class AddUSerDTO
    {
        public string? UserName { get; set; } = null!;

        public string? PasswordHash { get; set; } = null!;

        public string?  Email { get; set; } = null!;

        public string? Phone { get; set; }

        public string? Address { get; set; }


    }
}

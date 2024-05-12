using TravelAppAPI.Entities;

namespace TravelAppAPI.Repositories.UserRepository
{
    public interface IUserRepository
    {
		Task<string> Login(string username,string password);
		public Task<string> CreateUser(string username,string password);


	}
}
